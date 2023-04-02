const express = require("express");
const itemController = require("./../controllers/itemController");

const router = express.Router();

router
  .route("/items")
  .get(itemController.getItems)
  .post(itemController.addItem);

router
  .route("/items/:itemId")
  .patch(itemController.updateItem)
  .delete(itemController.deleteItem);

module.exports = router;
