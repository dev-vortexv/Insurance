import User from "../model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const index = async (req, res) => {
  const query = req.query;
  query.deleted = false;
  let result = await User.find({ deleted: false, role: "user" });
  let totalRecords = await User.countDocuments();
  res.send({ result, total_recodes: totalRecords });
};

const totalUsers = async (req, res) => {
  try {
    const query = req.query;
    query.deleted = false;
    // Aggregation pipeline to group "user" role users by month
    const aggregationPipeline = [
      {
        $match: {
          deleted: false, // Filter to include only non-deleted users
          role: "user", // Filter to include only users with role "user"
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdOn" }, // Group by month of creation
            role: "$role", // Group by user role
          },
          count: { $sum: 1 }, // Count the number of users in each group
        },
      },
    ];

    // Execute the aggregation pipeline
    const result = await User.aggregate(aggregationPipeline);

    // Create a new array to store month-wise counts with role and month names
    const monthWiseCounts = result.map((item) => ({
      month: item._id.month,
      role: item._id.role,
      count: item.count,
    }));

    res.send({ monthWiseCounts });
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const view = async (req, res) => {
  let user = await User.findById({ _id: req.params.id });
  if (!user) return res.status(404).json({ message: "no Data Found." });
  res.status(200).json(user);
};

const edit = async (req, res) => {
  try {
    let result = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          emailAddress: req.body.emailAddress,
          modifiedOn: req.body.modifiedOn,
        },
      }
    );
    res.status(200).json({ result, message: "User updated successfully" });
  } catch (err) {
    console.error("Failed to Update User:", err);
    res.status(400).json({ error: "Failed to Update User" });
  }
};

const deleteData = async (req, res) => {
  try {
    // let user = await User.findByIdAndUpdate({ _id: req.params.id }, { deleted: true })
    // res.status(200).json({ message: "User delete successfully", user })
    const userId = req.params.id;
    // Assuming you have retrieved the user document using userId
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    if (user.role !== "admin") {
      // Update the user's 'deleted' field to true
      await User.findByIdAndUpdate({ _id: userId }, { deleted: true });
      res.send({ message: "User deleted successfully " });
    } else {
      res.send({ message: "Admin can not deleted" });
    }
  } catch (err) {
    res.status(404).json({ message: "error", err });
  }
};

const register = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ emailAddress: email });
    if (existingUser) {
      res.status(401).json({ message: "EmailAddress already exists" });
      return;
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName: fname,
      lastName: lname,
      emailAddress: email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by username
    const user = await User.findOne({ emailAddress: email });
    if (!user) {
      res.status(401).json({ message: "invalid Email" });
      return;
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ message: "invalid Password" });
      return;
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, "secret_key", {
      expiresIn: "1d",
    });
    res.setHeader("Authorization", token);
    res.status(200).json({ token: token, user, message: "Login successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

export default { index, totalUsers, view, edit, deleteData, register, login };
