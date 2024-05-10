const User = require('./../models/userModel');

exports.addUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        msg: 'provide email and password',
      });
    }
    const user = await User.create(req.body);

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.json(err);
  }
};
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!user) {
      res
        .status(404)
        .json({ msg: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.json(err);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(
      req.params.id
    );
    if (!user) {
      res
        .status(404)
        .json({ msg: 'User not found' });
    }

    res.status(204).json({});
  } catch (err) {
    res.json(err);
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.find({
      _id: req.params.id,
    });
    if (!user) {
      res
        .status(404)
        .json({ msg: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.json(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        msg: 'provide email and password',
      });
    }
    const user = await User.findOne({
      email,
    });
    if (!user) {
      res
        .status(404)
        .json({ msg: 'User not found' });
    }
    if (user.password != password) {
      res
        .status(404)
        .json({ msg: 'wrong password' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
