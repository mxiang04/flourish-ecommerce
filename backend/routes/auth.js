const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_KEY),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json("Wrong Credentials!");
    }

    const hashedPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_KEY
    );
    const loginPassword = hashedPass.toString(CryptoJS.enc.Utf8);
    if (loginPassword !== req.body.password) {
      return res.status(401).json("Wrong Password!");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "30d" }
    );

    const { password, ...otherInfo } = user._doc;

    res.status(200).json({ ...otherInfo, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
