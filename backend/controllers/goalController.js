const asyncHandler = require("express-async-handler");
//@desc Get goals
//@route GET/api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

//@desc Set goals
//@route POST/api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goals" });
  console.log(req.body);
});

//@desc Update goals
//@route PUT/api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

//@desc Delete goals
//@route DELETE/api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
