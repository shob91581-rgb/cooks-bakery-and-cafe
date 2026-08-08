const menuData = [
  {
    category: "Burgers",
    items: [
      { name: "Old School Aloo Tikki", price: "₹100" },
      { name: "Cook's MAHA Burger", price: "₹130" },
      { name: "Chicken Burger", price: "₹130" },
    ],
  },

  {
    category: "Pizza",
    note: "Choice of Thick / Thin Crust",
    items: [
      { name: "Old School Pizza", price: "₹170 / ₹270", size: "6″ / 9″" },
      { name: "Urban Pizza", price: "₹180 / ₹280", size: "6″ / 9″" },
      { name: "Fries Pizza", price: "₹150" },
      { name: "Plain Cheese Pizza", price: "₹150 / ₹250" },
      { name: "Peppy Paneer Pizza", price: "₹180 / ₹320" },
      { name: "Italian Corn Pizza", price: "₹180 / ₹320" },
      { name: "Paneer Tikka Pizza", price: "₹220 / ₹330" },
      { name: "Chicken Tikka Pizza", price: "₹250 / ₹350" },
      { name: "Chicken Pizza", price: "₹230 / ₹330" },
    ],
  },

  {
    category: "Sandwiches",
    items: [
      { name: "Veg Grilled", price: "₹100" },
      { name: "Tandoori Panner", price: "₹140" },
      { name: "Chicken Sandwich", price: "₹170" },
      { name: "Club Sandwich", price: "₹130" },
      { name: "Cheese Mushroom Grilled", price: "₹150" },
    ],
  },

  {
    category: "Shakes",
    items: [
      { name: "Chocolate", price: "₹120" },
      { name: "Strawberry", price: "₹120" },
      { name: "Butterscotch", price: "₹120" },
      { name: "Pineapple", price: "₹120" },
      { name: "Oreo", price: "₹130" },
      { name: "KitKat", price: "₹130" },
      { name: "Nutella", price: "₹150" },
      { name: "Brownie", price: "₹160" },
      { name: "Red Velvet", price: "₹160" },
      { name: "Banana Caramel", price: "₹140" },
      { name: "Cold Coffee", price: "₹110" },
    ],
  },

  {
    category: "Hot Pot",
    items: [
      { name: "Chai", price: "₹30" },
      { name: "Hot Coffee", price: "₹60" },
      { name: "Green Tea", price: "₹30" },
      { name: "Black Coffee", price: "₹50" },
      { name: "Hot Chocolate", price: "₹120" },
    ],
  },

  {
    category: "Wraps",
    items: [
      { name: "Veg Wrap", price: "₹120" },
      { name: "Veg Tandoori Panner", price: "₹140" },
      { name: "Cheese Nugget Wrap", price: "₹140" },
      { name: "Chicken Cheese Wrap", price: "₹170" },
      { name: "Chicken Wrap", price: "₹170" },
    ],
  },

  {
    category: "Mocktails",
    items: [
      { name: "Green Apple", price: "₹120" },
      { name: "Blue Curacao", price: "₹120" },
      { name: "Pina Colada", price: "₹120" },
      { name: "Mint Mojito", price: "₹120" },
      { name: "Ice Tea", price: "₹100" },
    ],
  },

  {
    category: "Add-Ons",
    items: [
      { name: "Fusion Fries (Spicy / Cheesy)", price: "₹100 / ₹120" },
      { name: "Pizza Stick Fries", price: "₹100" },
      { name: "Brownie with Ice Cream", price: "₹100" },
      { name: "Cheese Loaded Bun", price: "₹100" },
      { name: "Oreo Fudge (Slice)", price: "₹100" },
      { name: "Tiramisu", price: "₹120" },
      { name: "Banoffee Pie", price: "₹120" },
      { name: "Eclairs (Chocolate)", price: "₹50" },
      { name: "Apple Pie", price: "₹100" },
    ],
  },

  {
    category: "Chinese",
    items: [
      { name: "Veg Noodle", price: "₹140" },
      { name: "Veg Singapuri Noodles", price: "₹180" },
      { name: "Veg Hakka Noodle", price: "₹160" },
      { name: "Chilly Garlic Noodle", price: "₹180" },
      { name: "Vegetable Chopsuey", price: "₹270" },

      { name: "Veg Manchurian (Gravy / Dry)", price: "₹190" },
      { name: "Shezwan Manchurian", price: "₹200" },
      { name: "Mushroom Manchurian", price: "₹190" },
      { name: "Chilly Mushroom", price: "₹220" },
      { name: "Chilly Paneer Dry", price: "₹220" },
      { name: "Garlic Paneer Cheese & Oregano Bread", price: "₹270" },
      { name: "Paneer 65 (Gravy / Dry)", price: "₹220" },
      { name: "Honey Chilly Potato", price: "₹200" },

      { name: "Veg Fried Rice", price: "₹170" },
      { name: "Singapuri Fried Rice", price: "₹180" },
      { name: "Veg Triple Rice", price: "₹250" },

      { name: "Veg Chinese Platter", price: "₹270" },
      { name: "Exotic Veggies in Red Sauce & Rice", price: "₹270" },
      { name: "Veg Sizzler", price: "₹300" },
      { name: "Veg Spring Roll", price: "₹120" },
      { name: "Cheese Spring Roll", price: "₹160" },
    ],
  },

  {
    category: "Chicken Chinese",
    items: [
      { name: "Chi. Noodle", price: "₹180" },
      { name: "Chi. Singapuri Noodles", price: "₹210" },
      { name: "Chi. Hakka Noodle", price: "₹190" },
      { name: "Chi. Chilly Garlic Noodle", price: "₹210" },
      { name: "Chi. Chopsuey", price: "₹300" },

      { name: "Chi. Manchurian (Gravy / Dry)", price: "₹220" },
      { name: "Chi. Shezwan Manchurian", price: "₹230" },
      { name: "Chicken 65", price: "₹250" },
      { name: "Garlic Chicken with Cheese & Oregano Bread", price: "₹300" },
      { name: "Chilly Chicken", price: "₹250" },

      { name: "Chi. Fried Rice", price: "₹200" },
      { name: "Chi. Singapuri Fried Rice", price: "₹200" },
      { name: "Chi. Triple Rice", price: "₹300" },

      { name: "Chi. Chinese Platter", price: "₹300" },
      { name: "Chicken & Exotic Veggies in Red Sauce & Rice", price: "₹300" },
      { name: "Chicken Sizzler", price: "₹350" },
    ],
  },

  {
    category: "Cheese Cake",
    items: [
      { name: "Blueberry Cheese Cake", price: "₹120" },
      { name: "Chocolate Cheese Cake", price: "₹120" },
      { name: "Strawberry Cheese Cake", price: "₹120" },
      { name: "Caramel Cheese Cake", price: "₹120" },
    ],
  },

  {
    category: "Mexican",
    items: [
      { name: "Baked Nachos with Cheese", price: "₹200" },
      { name: "Quesadilla (Veg / Non Veg)", price: "₹200 / ₹250" },
      { name: "Burrito Bowl (Veg / Non Veg)", price: "₹200 / ₹250" },
    ],
  },

  {
    category: "Bubble Waffle",
    items: [
      { name: "Chocolate", price: "₹100" },
      { name: "Strawberry", price: "₹100" },
      { name: "Nutella", price: "₹120" },
      { name: "Banana Caramel", price: "₹100" },
    ],
  },
];

export default menuData;