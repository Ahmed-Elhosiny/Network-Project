const Product = require('./../models/productModel');

exports.addProduct = async (req, res) => {
  try {
    console.log('Creating Product');
    const product = await Product.create(
      req.body
    );

    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const Products = await Product.find();
    res.status(200).json(Products);
  } catch (err) {
    res.json(err);
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body
      );
    if (!Product) {
      res
        .status(404)
        .json({ msg: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.json(err);
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const product =
      await Product.findByIdAndDelete(
        req.params.id
      );
    if (!product) {
      res
        .status(404)
        .json({ msg: 'Product not found' });
    }

    res.status(204).json({});
  } catch (err) {
    res.json(err);
  }
};
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(
      req.params.id
    );
    if (!product) {
      res
        .status(404)
        .json({ msg: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.json(err);
  }
};
