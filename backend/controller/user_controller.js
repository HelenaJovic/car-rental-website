const express = require("express");
const router = express.Router();
const userService = require("../service/user_service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

router.use(express.json());

router.get("/", (req, res) => {
  res.json(userService.getAll());
});

router.post("/", (req, res) => {
  const user = req.body;

  if (userService.getByUsername(user.username)) {
    res.status(409).json({ error: "Username already exists!" });
    return;
  }

  try {
    userService.create(user);
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

router.put("/:id", (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  if (
    userService.getByUsername(updatedData.username) &&
    !(userService.getById(userId).username === updatedData.username)
  ) {
    res.status(409).json({ error: "Username already exists!" });
    return;
  }

  const updatedUser = userService.update(userId, updatedData);

  res.json(updatedUser);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    var user = userService.getById(id);

    if (user) {
      // Delete the user
      userService.remove(id);
      res.status(204).end(); // No content
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    var user = userService.getById(id);
    //console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  var user = userService.getByUsername(username);

  if (user && user.password == password) {
    const token = jwt.sign(
      { id: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      secretKey
    );

    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ error: "Invalid username or password" });
  }
});

module.exports = router;
