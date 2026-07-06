const products = require("../data/sampleProducts");

const searchProducts = (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  res.json(filtered);
};

module.exports = {
  searchProducts,
};