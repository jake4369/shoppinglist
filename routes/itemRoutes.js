const express = require("express");
const itemController = require("./../controllers/itemController");

const router = express.Router();

router.route("/").get(itemController.getItems).post(itemController.addItem);

router
  .route("/:itemId")
  .get(itemController.getItemById)
  .patch(itemController.updateItem)
  .delete(itemController.deleteItem);

module.exports = router;
