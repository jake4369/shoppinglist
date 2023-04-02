const Item = require("./../models/itemModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const { findById } = require("./../models/itemModel");

const filterObj = (obj, ...allowedFields) => {
  const clonedObj = _.cloneDeep(obj);
  const newObj = {};
  Object.keys(clonedObj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = clonedObj[el];
  });
  return newObj;
};

exports.addItem = catchAsync(async (req, res, next) => {
  const item = await Item.create({
    item: req.body.item,
    quantity: req.body.quantity,
  });

  res.status(201).json({
    status: "success",
    data: {
      item,
    },
  });
});

exports.getItems = catchAsync(async (req, res, next) => {
  const items = await Item.find();

  res.status(200).json({
    status: "success",
    results: items.length,
    data: {
      items,
    },
  });
});

exports.getItemById = catchAsync(async (req, res, next) => {
  const item = await findById(req.params.itemId);

  res.status(200).json({
    status: "success",
    data: {
      item,
    },
  });
});

exports.updateItem = catchAsync(async (req, res, next) => {
  const item = await Item.findByIdAndUpdate(
    req.params.itemId,
    { $set: req.body },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    data: {
      item,
    },
  });
});

exports.deleteItem = catchAsync(async (req, res, next) => {
  await Item.findByIdAndDelete(req.params.itemId);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
