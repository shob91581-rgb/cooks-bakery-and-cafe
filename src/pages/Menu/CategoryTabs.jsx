import { motion } from "framer-motion";
import "./CategoryTabs.css";

const categories = [
  "All",
  "Burgers",
  "Pizza",
  "Sandwiches",
  "Shakes",
  "Wraps",
  "Mocktails",
  "Chinese",
  "Chicken Chinese",
  "Cheese Cake",
  "Mexican",
  "Bubble Waffle",
  "Add-Ons",
];

function CategoryTabs({ activeCategory, setActiveCategory }) {
  return (
    <section className="category-tabs-section">
      <div className="category-tabs-container">

        <motion.div
          className="category-tabs-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Explore Our Menu</span>

          <h2>
            Pick Your
            <br />
            Favourite
          </h2>
        </motion.div>

        {/* HORIZONTAL SCROLL AREA */}
        <div className="category-scroll">

          <div className="category-tabs">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`category-tab ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}

                {activeCategory === category && (
                  <motion.span
                    className="category-tab-dot"
                    layoutId="active-category-dot"
                  />
                )}
              </button>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default CategoryTabs;