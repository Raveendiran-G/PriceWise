const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    brand: "Apple",
    category: "Mobiles",
    price: 123499,
    image: "https://picsum.photos/300?1",
    stores: [
      { name: "Amazon", price: 123499 },
      { name: "Flipkart", price: 124199 },
      { name: "Croma", price: 124999 }
    ]
  },
  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Mobiles",
    price: 109999,
    image: "https://picsum.photos/300?2",
    stores: [
      { name: "Amazon", price: 109999 },
      { name: "Flipkart", price: 110499 }
    ]
  },
  {
    id: 3,
    name: "MacBook Air M4",
    brand: "Apple",
    category: "Laptops",
    price: 99999,
    image: "https://picsum.photos/300?3",
    stores: [
      { name: "Amazon", price: 99999 },
      { name: "Reliance Digital", price: 100999 }
    ]
  }
];

module.exports = products;
