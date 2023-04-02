const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: [true, "Item must have a name"],
    trim: true,
    unique: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
