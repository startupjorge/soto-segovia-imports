export type Recipe = {
  slug: string;
  title: string;
  category: string;
  time: string;
  image: string;
  products: string[]; // product names that appear in this recipe
};

export const allRecipes: Recipe[] = [
  { slug: "patatas-bravas",    title: "Patatas Bravas",             category: "Tapas",       time: "30 min", image: "/recipes-patatas-bravas.png",                                                       products: ["Garlic Olive Oil", "Paprika Salt"] },
  { slug: "gambas-al-ajillo",  title: "Gambas al Ajillo",           category: "Tapas",       time: "15 min", image: "/recipes-gambas.jpg",                                                               products: ["Garlic Olive Oil"] },
  { slug: "sashas-salted-mangos", title: "Sasha's Salted Mangos",   category: "Dessert",     time: "5 min",  image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80",           products: ["Mint Salt"] },
  { slug: "pan-con-tomate",    title: "Spanish Pan Con Tomate",      category: "Tapas",       time: "10 min", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",           products: ["Tomato Salt", "Garlic Olive Oil"] },
  { slug: "garlic-bruschetta", title: "Garlic Olive Oil Bruschetta", category: "Tapas",       time: "10 min", image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=600&q=80",           products: ["Garlic Olive Oil", "Wild Salt"] },
  { slug: "orange-wine-mussels", title: "Orange Wine Mussels",      category: "Main Course", time: "20 min", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80",           products: ["Orange Wine", "Lemon Olive Oil"] },
  { slug: "truffle-pasta",     title: "Truffle Olive Oil Pasta",     category: "Main Course", time: "20 min", image: "https://images.unsplash.com/photo-1551183053-bf91798d702b?w=600&q=80",             products: ["Truffle Olive Oil", "Rose Salt"] },
  { slug: "fig-chicken",       title: "Fig Vinegar Glazed Chicken",  category: "Main Course", time: "40 min", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=600&q=80",          products: ["Fig Vinegar", "Rosemary Salt"] },
  { slug: "lemon-salmon",      title: "Lemon Salt Grilled Salmon",   category: "Main Course", time: "20 min", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",          products: ["Lemon Olive Oil", "Lemon Salt"] },
  { slug: "orange-duck",       title: "Orange Vinegar Duck Breast",  category: "Main Course", time: "35 min", image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=600&q=80",          products: ["Orange Vinegar", "Orange Salt"] },
  { slug: "rosemary-focaccia", title: "Rosemary Focaccia",           category: "Bread",       time: "45 min", image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",          products: ["Rosemary Olive Oil", "Rosemary Salt"] },
  { slug: "lemon-cake",        title: "Lemon Olive Oil Cake",        category: "Dessert",     time: "55 min", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",          products: ["Lemon Olive Oil"] },
  { slug: "vanilla-strawberries", title: "Vanilla Vinegar Strawberries", category: "Dessert", time: "10 min", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80",        products: ["Vanilla Vinegar", "Rose Salt"] },
  { slug: "chocolate-bark",    title: "Fleur de Sel Chocolate Bark", category: "Dessert",     time: "30 min", image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80",          products: ["Black Salt"] },
];
