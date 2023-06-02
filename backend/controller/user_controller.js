const express = require("express");
const router = express.Router();
const userService = require("../service/user_service");

router.use(express.json());

router.get("/", (req, res) => {
  res.json(userService.getAll());

});

router.post("/", (req, res) => {
  const user = req.body;

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
  const updatedUser = userService.update(userId, updatedData);

  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  
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

module.exports = router;
