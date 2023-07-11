//@desc Get goals
//@route GET/api/goals
//@access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

//@desc Set goals
//@route POST/api/goals
//@access Private
const setGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goals" });
  console.log(req.body);
};
//@desc Update goals
//@route PUT/api/goals/:id
//@access Private
const updateGoals = (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
};

//@desc Delete goals
//@route DELETE/api/goals/:id
//@access Private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
