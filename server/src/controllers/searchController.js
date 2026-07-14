const prisma = require("../lib/prisma");

const searchProducts = async (req, res) => {
  try {
    const query = req.query.q || "";

    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            brand: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            category: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      take: 8,
      include: {
        prices: {
          include: {
            store: true,
          },
        },
      },
    });

    res.json(products);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Search Failed",
    });
  }
};
const searchResults = async (req, res) => {
  try {
    const query = req.query.q || "";

    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            brand: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            category: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      include: {
        prices: {
          include: {
            store: true,
          },
        },
      },
    });

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Search failed" });
  }
};
module.exports = {
  searchProducts,
  searchResults,
};