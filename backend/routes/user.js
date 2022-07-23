const router = require("express").Router();
const User = require("../models/User");
const { verifyToken, verifyAndAuthorize, verifyAndAdmin } = require("./verify");

// Update

router.put("/:id", verifyAndAuthorize, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_KEY
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete

router.delete("/:id", verifyAndAuthorize, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get User

router.get("/find/:id", verifyAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...otherInfo } = user._doc;
    res.status(200).json(otherInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all users
router.get("/", verifyAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(1)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get stats

router.get("/stats", verifyAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
