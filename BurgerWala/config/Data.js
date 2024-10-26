export const CategoriesData = [
  "All",
  "Combo",
  "Sliders",
  "Classic",
  "Cheesy",
  "American",
  "Desi-Tadka",
];

export const Menu = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    image: require("../assets/images2/Burger1.png"),
    price: 100,
    rating: "4.1",
    description:
      "A timeless favorite featuring a juicy beef patty topped with melted cheese, crisp lettuce, and ripe tomato on a toasted bun.",
    ingredients: ["beef patty", "cheese", "lettuce", "tomato", "bun"],
  },
  {
    id: 2,
    name: "Bacon Cheeseburger",
    description:
      "Indulge in the smoky flavor of bacon with a classic cheeseburger topped with crispy bacon.",
    ingredients: ["beef patty", "cheese", "bacon", "lettuce", "tomato", "bun"],
    image: require("../assets/images2/Burger2.png"),
    price: 80,
    rating: "4.3",
  },
  {
    id: 3,

    name: "Big Mac",
    description:
      "The iconic Big Mac features two beef patties, special sauce, lettuce, cheese, pickles, and onions on a sesame seed bun.",
    ingredients: [
      "beef patties",
      "special sauce",
      "lettuce",
      "cheese",
      "pickles",
      "buns",
    ],
    image: require("../assets/images2/Burger3.png"),
    price: 125,
    rating: "3.1",
  },
  {
    id: 4,
    name: "Whopper",
    description:
      "A flame-grilled beef patty topped with cheese, lettuce, tomato, pickles, onion, and a special sauce on a toasted bun.",
    ingredients: [
      "beef patty",
      "cheese",
      "lettuce",
      "tomato",
      "pickles",
      "onion",
      "bun",
    ],
    image: require("../assets/images2/Burger4.png"),
    price: 110,
    rating: "4.0",
  },
  {
    id: 5,

    name: "Double Cheeseburger",
    description:
      "Twice the beef, twice the cheese! This burger is perfect for meat lovers.",
    ingredients: ["two beef patties", "cheese", "lettuce", "tomato", "bun"],
    image: require("../assets/images2/Burger1.png"),
    price: 125,
    rating: "4.2",
  },
  {
    id: 6,
    name: "Veggie Burger",
    description:
      "A delicious plant-based option with a flavorful veggie patty, cheese, lettuce, and tomato.",
    ingredients: ["veggie patty", "cheese", "lettuce", "tomato", "bun"],

    image: require("../assets/images2/Burger1.png"),
    price: 70,
    rating: "4",
  },
  {
    id: 7,
    name: "Fish Burger",
    description:
      "A light and refreshing option featuring a flaky fish patty with tarter sauce, lettuce, and bun.",
    ingredients: ["fish patty", "tarter sauce", "lettuce", "bun"],
    image: require("../assets/images2/Burger1.png"),
    price: 150,
    rating: "3.7",
  },
  {
    id: 8,

    name: "Grilled Cheese",
    description: "A classic comfort food with melted cheese on grilled bread.",
    ingredients: ["cheese", "bread"],
    image: require("../assets/images2/Burger1.png"),
    price: 160,
    rating: "4.1",
  },
  {
    id: 9,
    name: "Mushroom Swiss Burger",
    description:
      "A flavorful combination of beef patty, Swiss cheese, mushrooms, lettuce, tomato, and bun.",
    ingredients: [
      "beef patty",
      "Swiss cheese",
      "mushrooms",
      "lettuce",
      "tomato",
      "bun",
    ],
    image: require("../assets/images2/Burger1.png"),
    price: 115,
    rating: "4.1",
  },
  {
    id: 10,
    name: "Burger",
    image: require("../assets/images2/Burger1.png"),
    price: 100,
    rating: "4.1",
    ingredients: [
      "beef patty",
      "Swiss cheese",
      "mushrooms",
      "lettuce",
      "tomato",
      "bun",
    ],
  },
];

export const Payment = [
  {
    id: 1,
    mode: "Credit Card",
    cardNumber: "*********1253",
    image: require("../assets/credit-card.png"),
  },
  {
    id: 2,
    mode: "Debit Card",
    cardNumber: "*********1254",
    image: require("../assets/visa.png"),
  },
  {
    id: 3,
    mode: "Cash On Delivery",
    image: require("../assets/cash-on-delivery.png"),
  },
];
