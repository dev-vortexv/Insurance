import mongoose from "mongoose";
import Policy from "../model/policy";
import policyDocument from "../model/policyDocument";
import claim from "../model/claim";
import Notes from "../model/Notes";

const getList = async (req, res) => {
  const query = req.query;
  query.deleted = false;
  // let result = await Policy.find(query)
  // let totalRecords = await Policy.find(query).countDocuments()
  let allData = await Policy.find(query)
    .populate({
      path: "createdBy",
      match: { deleted: false }, // Populate only if createBy.deleted is false
    })
    .exec();

  const allPolicyData = allData.filter((item) => item.createdBy !== null);

  let totalRecords = allPolicyData.length;
  res.send({ allPolicyData, count: totalRecords });
};

const getTotalPolicy = async (req, res) => {
  const query = req.query;
  query.deleted = false;
  let allPolicyData = await Policy.find(query).exec();

  let totalRecords = allPolicyData.length;
  res.send({ allPolicyData, count: totalRecords });
};

const getPolicyGraph = async (req, res) => {
  try {
    // Aggregate pipeline to group policies by month and type and count
    const policyData = await Policy.aggregate([
      {
        $match: {
          deleted: false,
          createdBy: mongoose.Types.ObjectId(req.query.createdBy),
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdOn" }, // Extract month from createdAt field
            policyType: "$policyType", // Group by policyType
          },
          count: { $sum: 1 }, // Count documents in each group
        },
      },
      {
        $group: {
          _id: "$_id.month",
          policyTypes: {
            $push: {
              policyType: "$_id.policyType",
              count: "$count",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          month: "$_id",
          policyTypes: 1,
        },
      },
    ]);

    res.status(200).json({ policyData });
  } catch (error) {
    console.error("Error in getPolicyGraph:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const add = async (req, res) => {
  try {
    const policyNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit policy number
    const policy = new Policy({ policyNumber: policyNumber, ...req.body });
    await policy.save();
    res.status(201).json({ policy, message: "Policy saved successfully" });
  } catch (err) {
    console.error("Failed to create Meetings:", err);
    res.status(500).json({ error: "Failed to create Policy" });
  }
};

const view = async (req, res) => {
  try {
    let policyaggregate = await Policy.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.params.id),
        },
      },
      {
        $lookup: {
          from: "claimhistories",
          localField: "_id",
          foreignField: "policy_id",
          as: "claimhistories",
          pipeline: [
            {
              $match: {
                deleted: false,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "notes",
          localField: "_id",
          foreignField: "policy_id",
          as: "notes",
          pipeline: [
            {
              $match: {
                deleted: false,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "policydocuments",
          localField: "_id",
          foreignField: "policy_id",
          as: "policydocuments",
          pipeline: [
            {
              $match: {
                deleted: false,
              },
            },
          ],
        },
      },
    ]);

    if (policyaggregate.length === 0) {
      return res.status(404).json({ message: "No data found." });
    }

    let policy = policyaggregate[0];
    let populatedPolicy = await Policy.populate(policyaggregate, [
      { path: "assigned_agent", select: ["firstName", "lastName"] },
      { path: "contact_id", select: ["firstName", "lastName"] },
    ]);
    res.status(200).json({ policy: populatedPolicy });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

const edit = async (req, res) => {
  try {
    let result = await Policy.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ result, message: "Policy updated successfully" });
  } catch (err) {
    console.error("Failed to Update Policy:", err);
    res.status(400).json({ error: "Failed to Update Policy" });
  }
};

const deleteData = async (req, res) => {
  try {
    const policyId = req.params.id;

    // Delete notes related to the lead
    await Notes.updateMany({ policy_id: policyId, deleted: true });

    // Delete claim related to the lead
    await claim.updateMany({ policy_id: policyId, deleted: true });

    // Delete policyDocumnet related to the lead
    await policyDocument.updateMany({ policy_id: policyId, deleted: true });

    // Delete the policy itself
    const deletedPolicy = await Policy.findByIdAndUpdate(policyId, {
      deleted: true,
    });

    if (!deletedPolicy) {
      return res.status(404).json({ message: "Policy not found." });
    }

    res
      .status(200)
      .json({ message: "Policy and related data deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

const deleteMany = async (req, res) => {
  try {
    const policyIds = req.body;

    // Delete notes related to the leads
    await Notes.updateMany(
      { policy_id: { $in: policyIds } },
      { $set: { deleted: true } }
    );

    // Delete claim related to the leads
    await claim.updateMany(
      { policy_id: { $in: policyIds } },
      { $set: { deleted: true } }
    );

    // Delete policyDocumnet related to the leads
    await policyDocument.updateMany(
      { policy_id: { $in: policyIds } },
      { $set: { deleted: true } }
    );

    // Delete the policys themselves
    const deletedPolicys = await Policy.updateMany(
      { _id: { $in: policyIds } },
      { $set: { deleted: true } }
    );

    if (deletedPolicys.deletedCount === 0) {
      return res.status(404).json({ message: "No Policys found." });
    }

    res
      .status(200)
      .json({ message: "Policys and related data deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

export default {
  getList,
  getPolicyGraph,
  getTotalPolicy,
  add,
  view,
  edit,
  deleteData,
  deleteMany,
};
