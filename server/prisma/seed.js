const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Clear old data
  await prisma.productPrice.deleteMany();
  await prisma.store.deleteMany();
  await prisma.product.deleteMany();

  // Stores
  const amazon = await prisma.store.create({
    data: {
      name: "Amazon",
      website: "https://amazon.in",
    },
  });

  const flipkart = await prisma.store.create({
    data: {
      name: "Flipkart",
      website: "https://flipkart.com",
    },
  });

  // Product
  const iphone = await prisma.product.create({
    data: {
      name: "iPhone 16 Pro",
      brand: "Apple",
      category: "Mobiles",
      image: "https://picsum.photos/400?1",
      rating: 4.8,
    },
  });

  // Prices
  await prisma.productPrice.createMany({
    data: [
      {
        productId: iphone.id,
        storeId: amazon.id,
        price: 123499,
        delivery: "Tomorrow",
        offer: "10% Bank Offer",
        productUrl: "https://amazon.in",
      },
      {
        productId: iphone.id,
        storeId: flipkart.id,
        price: 124199,
        delivery: "2 Days",
        offer: "Exchange Bonus",
        productUrl: "https://flipkart.com",
      },
    ],
  });

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });