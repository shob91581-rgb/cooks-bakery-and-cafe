import { motion, AnimatePresence } from "framer-motion";
import "./ProductGrid.css";

const products = [
  {
    name: "Classic Burger",
    category: "Burgers",
    price: "₹199",
    description: "Juicy patty, fresh vegetables and our signature sauce.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Cheese Burger",
    category: "Burgers",
    price: "₹229",
    description: "Classic burger layered with melted cheese.",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Margherita Pizza",
    category: "Pizza",
    price: "₹299",
    description: "Classic tomato, mozzarella and herbs.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Veggie Pizza",
    category: "Pizza",
    price: "₹349",
    description: "Loaded with fresh vegetables and cheese.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Grilled Sandwich",
    category: "Sandwiches",
    price: "₹179",
    description: "Golden grilled bread with a delicious filling.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Chocolate Shake",
    category: "Shakes",
    price: "₹169",
    description: "Rich creamy chocolate shake.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Oreo Shake",
    category: "Shakes",
    price: "₹189",
    description: "Creamy shake blended with Oreo cookies.",
    image:
      "https://images.unsplash.com/photo-1553787499-6f9133860278?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Chicken Wrap",
    category: "Wraps",
    price: "₹219",
    description: "Tender chicken with fresh vegetables and sauce.",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Fresh Lime Mojito",
    category: "Mocktails",
    price: "₹149",
    description: "Refreshing lime, mint and sparkling soda.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Veg Hakka Noodles",
    category: "Chinese",
    price: "₹229",
    description: "Wok-tossed noodles with fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Chicken Noodles",
    category: "Chicken Chinese",
    price: "₹269",
    description: "Wok-tossed noodles with tender chicken.",
    image:
      "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Classic Cheesecake",
    category: "Cheese Cake",
    price: "₹199",
    description: "Smooth, creamy and delicately sweet.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Mexican Nachos",
    category: "Mexican",
    price: "₹249",
    description: "Crispy nachos with cheese and Mexican flavours.",
    image:
      "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "Bubble Waffle",
    category: "Bubble Waffle",
    price: "₹219",
    description: "Freshly made bubble waffle with sweet toppings.",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=900&auto=format&fit=crop",
  },

  {
    name: "French Fries",
    category: "Add-Ons",
    price: "₹99",
    description: "Crispy golden fries.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=900&auto=format&fit=crop",
  },
];


function ProductGrid({ activeCategory = "All" }) {

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );


  return (
    <section className="product-grid-section">

      <div className="product-grid-container">

        <div className="product-grid-top">

          <div>
            <span>From Our Kitchen</span>

            <h2>
              Something
              <br />
              For Everyone
            </h2>
          </div>

          <p>
            Fresh flavours, comforting classics and
            little treats made to brighten your day.
          </p>

        </div>


        <motion.div
          className="product-grid"
          layout
        >

          <AnimatePresence mode="popLayout">

            {filteredProducts.map((product) => (

              <motion.article
                key={product.name}
                className="product-card"

                layout

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}

                transition={{
                  duration: 0.4,
                }}
              >

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="product-category">
                    {product.category}
                  </span>

                </div>


                <div className="product-info">

                  <div className="product-title-row">

                    <h3>
                      {product.name}
                    </h3>

                    <strong>
                      {product.price}
                    </strong>

                  </div>

                  <p>
                    {product.description}
                  </p>

                </div>

              </motion.article>

            ))}

          </AnimatePresence>

        </motion.div>


        {filteredProducts.length === 0 && (

          <div className="no-products">
            No items available in this category.
          </div>

        )}

      </div>

    </section>
  );
}


export default ProductGrid;