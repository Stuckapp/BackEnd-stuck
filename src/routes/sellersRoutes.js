const express = require("express");
const router = express.Router();
const seller = require("../useCases/sellers");
const auth = require("../middlewares/auth");
const { response } = require("express");

router.get("/", async (req, res) => {
  try {
    const allSellers = await seller.getAll();
    response.json({
      succes: true,
      data: {
        users: allSellers,
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

router.delete("/:id", auth, async (request, response) => {
  try {
    const id = request.params.id;
    const sellerToDelete = await seller.deletee(id);
    response.json({
      success: true,
      data: {
        sellerToDelete,
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

router.patch("/:id", auth, async (request, response) => {
  try {
    const id = request.params.id;
    const dataToUpdate = request.body;
    const sellerUpdated = await seller.update(id, dataToUpdate);
    response.json({
      success: true,
      data: {
        sellerUpdated,
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
