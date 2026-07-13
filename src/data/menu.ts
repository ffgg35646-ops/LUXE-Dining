import { MenuItem } from "@/types";

export const menu: MenuItem[] = [
  {
    id: "1",
    name: "Wagyu Ribeye Steak",
    slug: "wagyu-ribeye-steak",
    description:
      "Premium Japanese Wagyu ribeye served with roasted vegetables and black pepper sauce.",
    price: 89.99,
    image: "/images/menu/wagyu-ribeye.jpg",
    categoryId: "steaks",
    ingredients: [
      { id: "1", name: "Wagyu Beef" },
      { id: "2", name: "Rosemary" },
      { id: "3", name: "Butter" }
    ],
    rating: 4.9,
    reviews: 327,
    calories: 860,
    preparationTime: 25,
    spicy: false,
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    available: true,
    featured: true
  },
  {
    id: "2",
    name: "Truffle Pasta",
    slug: "truffle-pasta",
    description:
      "Fresh handmade pasta with black truffle cream sauce and parmesan cheese.",
    price: 29.99,
    image: "/images/menu/truffle-pasta.jpg",
    categoryId: "pasta",
    ingredients: [
      { id: "4", name: "Fresh Pasta" },
      { id: "5", name: "Black Truffle" },
      { id: "6", name: "Parmesan" }
    ],
    rating: 4.8,
    reviews: 241,
    calories: 640,
    preparationTime: 18,
    spicy: false,
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    available: true,
    featured: true
  },
  {
    id: "3",
    name: "Grilled Salmon",
    slug: "grilled-salmon",
    description:
      "Atlantic salmon grilled to perfection with lemon butter sauce.",
    price: 34.99,
    image: "/images/menu/grilled-salmon.jpg",
    categoryId: "seafood",
    ingredients: [
      { id: "7", name: "Salmon" },
      { id: "8", name: "Lemon" },
      { id: "9", name: "Butter" }
    ],
    rating: 4.9,
    reviews: 198,
    calories: 520,
    preparationTime: 20,
    spicy: false,
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    available: true,
    featured: true
  },
  {
    id: "4",
    name: "Margherita Pizza",
    slug: "margherita-pizza",
    description:
      "Stone-baked pizza with mozzarella, tomato sauce and fresh basil.",
    price: 18.99,
    image: "/images/menu/margherita-pizza.jpg",
    categoryId: "pizza",
    ingredients: [
      { id: "10", name: "Mozzarella" },
      { id: "11", name: "Tomato" },
      { id: "12", name: "Basil" }
    ],
    rating: 4.7,
    reviews: 412,
    calories: 780,
    preparationTime: 15,
    spicy: false,
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    available: true,
    featured: false
  },
  {
    id: "5",
    name: "Classic Cheeseburger",
    slug: "classic-cheeseburger",
    description:
      "Angus beef burger with cheddar cheese, lettuce and signature sauce.",
    price: 19.99,
    image: "/images/menu/classic-burger.jpg",
    categoryId: "burgers",
    ingredients: [
      { id: "13", name: "Angus Beef" },
      { id: "14", name: "Cheddar" },
      { id: "15", name: "Lettuce" }
    ],
    rating: 4.8,
    reviews: 356,
    calories: 910,
    preparationTime: 16,
    spicy: false,
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    available: true,
    featured: false
  },
  {
    id: "6",
    name: "Chocolate Lava Cake",
    slug: "chocolate-lava-cake",
    description:
      "Warm chocolate cake with a rich molten center served with vanilla ice cream.",
    price: 12.99,
    image: "/images/menu/lava-cake.jpg",
    categoryId: "desserts",
    ingredients: [
      { id: "16", name: "Dark Chocolate" },
      { id: "17", name: "Butter" },
      { id: "18", name: "Vanilla Ice Cream" }
    ],
    rating: 5,
    reviews: 287,
    calories: 470,
    preparationTime: 12,
    spicy: false,
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    available: true,
    featured: true
  }
];
