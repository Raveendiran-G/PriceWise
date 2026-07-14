const express = require("express");
const router = express.Router();
const {
  searchProducts,
  searchResults,
} = require("../controllers/searchController");

router.get("/", searchProducts);
router.get("/results", searchResults);

module.exports = router;