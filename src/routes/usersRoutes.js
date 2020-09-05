const express = require("express");
const router = express.Router();
const user = require("../useCases/users");

router.get("/", async (request, response) => {
  try {
    const allUsers = await user.getAll();
    response.json({
      succes: true,
      data: {
        users: allUsers,
      },
    });
  } catch (error) {
    response.status(error.status || 400);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const userId = request.params.id;
    const user = await users.getById(userId);
    response.json({
      success: true,
      data: {
        user,
      },
    });
  } catch (error) {
    response.status(error.status || 400);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
