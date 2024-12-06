import Packages from "../model/Packages ";

const getList = async (req, res) => {
  let allData = await Packages.find({ deleted: false });

  let totalRecords = allData.length;
  res.send({ packagesAllData: allData, count: totalRecords });
};

const add = async (req, res) => {
  try {
    const packages = new Packages(req.body);
    await packages.save();
    res.status(201).json({ packages, message: "Packages saved successfully" });
  } catch (err) {
    console.error("Failed to create packages:", err);
    res.status(500).json({ error: "Failed to create Packages" });
  }
};

const edit = async (req, res) => {
  try {
    let result = await Packages.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ result, message: "Packages updated successfully" });
  } catch (err) {
    console.error("Failed to Update Packages:", err);
    res.status(400).json({ error: "Failed to Update Packages" });
  }
};

const deleteData = async (req, res) => {
  try {
    let packages = await Packages.findByIdAndUpdate(
      { _id: req.params.id },
      { deleted: true }
    );
    res
      .status(200)
      .json({ message: "Packages deleted successfully", packages });
  } catch (err) {
    res.status(404).json({ message: "error", err });
  }
};

export default { getList, add, edit, deleteData };
