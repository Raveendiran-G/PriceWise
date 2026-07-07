const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    brand: "Apple",
    category: "Mobiles",
    price: 123499,
    rating: 4.8,
    image: "https://picsum.photos/400?1",

    specifications: {
      display: "6.3-inch OLED",
      processor: "A18 Pro",
      ram: "8GB",
      storage: "256GB",
      battery: "3582mAh"
    },
    priceHistory: [
  { date: "2026-06-01", price: 129999 },
  { date: "2026-06-10", price: 127999 },
  { date: "2026-06-20", price: 125999 },
  { date: "2026-07-01", price: 123499 }
],

    stores: [
      {
        name: "Amazon",
        price: 123499,
        delivery: "Tomorrow",
        offer: "10% Bank Offer",
        link: "https://amazon.in"
      },
      {
        name: "Flipkart",
        price: 124199,
        delivery: "2 Days",
        offer: "Exchange Bonus",
        link: "https://flipkart.com"
      },
      {
        name: "Croma",
        price: 124999,
        delivery: "Today",
        offer: "No Cost EMI",
        link: "https://croma.com"
      }
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
