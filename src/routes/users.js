const express = require("express");
const router = express.Router();

const Users = require("../useCases/Users");
const authUser = require("../middlewares/authClient");

router.get("/", async (request, response) => {
  try {
    const allUsers = await Users.getAll();
    response.json({
      success: true,
      data: {
        clients: allUsers,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const UsertId = request.params.id;
    const User = await clients.getById(UsertId);
    response.json({
      success: true,
      data: {
        User,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.patch("/:id", authUser, async (request, response) => {
  try {
    const id = request.params.id;
    const dataToUpdate = request.body;
    const UserUpdated = await clients.update(id, dataToUpdate);
    response.json({
      success: true,
      data: {
        UserUpdated,
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

router.delete("/:id", UserClient, async (request, response) => {
  try {
    const id = request.params.id;
    const UserToDelete = await Users.deletee(id);
    response.json({
      success: true,
      data: {
        UserToDelete,
      },
      message: "Se ha borrado correctamente",
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
