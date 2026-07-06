const products = require("../data/sampleProducts");

const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};