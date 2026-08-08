import React, { useMemo, useState } from "react";
import "./Menu.css";

const menuData = [
  {
    category: "Shakes",
    items: [
      ["Chocolate", "₹120"],
      ["Strawberry", "₹120"],
      ["Butterscotch", "₹120"],
      ["Pineapple", "₹120"],
      ["Oreo", "₹130"],
      ["Kitkat", "₹130"],
      ["Nutella", "₹150"],
      ["Brownie", "₹160"],
      ["Red Velvet", "₹160"],
      ["Banana Caramel", "₹140"],
      ["Cold Coffee", "₹110"],
    ],
  },

  {
    category: "Hot Pot",
    items: [
      ["Chai", "₹30"],
      ["Hot Coffee", "₹60"],
      ["Green Tea", "₹30"],
      ["Black Coffee", "₹50"],
      ["Hot Chocolate", "₹120"],
    ],
  },

  {
    category: "Wraps",
    items: [
      ["Veg Wrap", "₹120"],
      ["Veg Tandoori Panner", "₹140"],
      ["Cheese Nugget Wrap", "₹140"],
      ["Chicken Cheese Wrap", "₹170"],
      ["Chicken Wrap", "₹170"],
    ],
  },

  {
    category: "Burger",
    items: [
      ["Old School Aloo Tikki", "₹100"],
      ["Cook's MAHA Burger", "₹130"],
      ["Chicken Burger", "₹130"],
    ],
  },

  {
    category: "Pizza",
    note: "Choice of Thick / Thin Crust",
    sizes: ["6″", "9″"],
    items: [
      ["Old School Pizza", "₹170 / ₹270", "Onion, Tomato, Capsicum"],
      ["Urban Pizza", "₹180 / ₹280", "Onion, Tomato, Capsicum, Olive, Jalapeno"],
      ["Fries Pizza 6″", "₹150"],
      ["Plain Cheese Pizza", "₹150 / ₹250"],
      ["Peppy Paneer Pizza", "₹180 / ₹320"],
      ["Italian Corn Pizza", "₹180 / ₹320"],
      ["Paneer Tikka Pizza", "₹220 / ₹330"],
      ["Chicken Tikka Pizza", "₹250 / ₹350"],
      ["Chicken Pizza", "₹230 / ₹330"],
    ],
  },

  {
    category: "Sandwich",
    items: [
      ["Veg Grilled", "₹100", "Multigrain / White"],
      ["Tandoori Panner", "₹140", "Multigrain / White"],
      ["Chicken Sandwich", "₹170"],
      ["Club Sandwich", "₹130"],
      ["Cheese Mushroom Grilled", "₹150"],
    ],
  },

  {
    category: "Mocktails",
    items: [
      ["Green Apple", "₹120"],
      ["Blue Curacao", "₹120"],
      ["Pina Colada", "₹120"],
      ["Mint Mojito", "₹120"],
      ["Ice Tea", "₹100"],
    ],
  },

  {
    category: "Add-On's",
    items: [
      ["Fusion Fries", "₹100 / ₹120", "Spicy / Cheesy"],
      ["Pizza Stick Fries", "₹100"],
      ["Brownie with ice cream", "₹100"],
      ["Cheese loaded Bun", "₹100"],
      ["Oreo Fudge (Slice)", "₹100"],
      ["Tiramisu", "₹120"],
      ["Banoffee Pie", "₹120"],
      ["Eclairs (Chocolate)", "₹50"],
      ["Apple Pie", "₹100"],
    ],
  },

  {
    category: "Chinese",
    items: [
      ["Veg Noodle", "₹140"],
      ["Veg Singapuri Noodles", "₹180"],
      ["Veg Hakka Noodle", "₹160"],
      ["Chilly Garlic Noodle", "₹180"],
      ["Vegetable Chopsuey", "₹270"],
      ["Veg Manchurian", "₹190", "Gravy / Dry"],
      ["Shezwan Manchurian", "₹200"],
      ["Mushroom Manchurian", "₹190"],
      ["Chilly Mushroom", "₹220"],
      ["Chilly Paneer Dry", "₹220"],
      ["Garlic Paneer Cheese & Oregano Bread", "₹270"],
      ["Paneer 65", "₹220", "Gravy / Dry"],
      ["Honey Chilly Potato", "₹200"],
      ["Veg Fried Rice", "₹170"],
      ["Singapuri Fried Rice", "₹180"],
      ["Veg Triple Rice", "₹250", "Noodle / Rice / Manchurian"],
      ["Veg Chinese Platter", "₹270"],
      ["Exotic Veggies in Red Sauce & Rice", "₹270"],
      ["Veg Sizzler", "₹300"],
      ["Veg Spring Roll", "₹120"],
      ["Cheese Spring Roll", "₹160"],
    ],
  },

  {
    category: "Chicken Chinese",
    items: [
      ["Chi. Noodle", "₹180"],
      ["Chi. Singapuri Noodles", "₹210"],
      ["Chi. Hakka Noodle", "₹190"],
      ["Chi. Chilly Garlic Noodle", "₹210"],
      ["Chi. Chopsuey", "₹300"],
      ["Chi. Manchurian", "₹220", "Gravy / Dry"],
      ["Chi. Shezwan Manchurian", "₹230"],
      ["Chicken 65", "₹250"],
      ["Garlic Chicken with cheese & oregano bread", "₹300"],
      ["Chilly Chicken", "₹250"],
      ["Chi. Fried Rice", "₹200"],
      ["Chi. Singapuri Fried Rice", "₹200"],
      ["Chi. Triple Rice", "₹300", "Noodle / Rice / Manchurian"],
      ["Chi Chinese Platter", "₹300"],
      ["Chicken & Exotic Veggies in Red sauce & Rice", "₹300"],
      ["Chicken Sizzler", "₹350"],
    ],
  },

  {
    category: "Cheese Cake",
    items: [
      ["Blueberry Cheese Cake", "₹120"],
      ["Chocolate Cheese Cake", "₹120"],
      ["Strawberry Cheese Cake", "₹120"],
      ["Caramel Cheese Cake", "₹120"],
    ],
  },

  {
    category: "Mexican",
    items: [
      ["Baked Nachos with Cheese", "₹200"],
      ["Quesadilla", "₹200 / ₹250", "Veg / Non Veg"],
      ["Burrito Bowl", "₹200 / ₹250", "Veg / Non Veg"],
    ],
  },

  {
    category: "Bubble Waffle",
    items: [
      ["Chocolate", "₹100"],
      ["Strawberry", "₹100"],
      ["Nutella", "₹120"],
      ["Banana Caramel", "₹100"],
    ],
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...menuData.map((section) => section.category)];

  const visibleSections = useMemo(() => {
    if (activeCategory === "All") {
      return menuData;
    }

    return menuData.filter(
      (section) => section.category === activeCategory
    );
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    setTimeout(() => {
      const element = document.getElementById(
        `menu-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  return (
    <main className="menu-page">

      {/* HERO */}
      <section className="menu-hero">
        <div className="menu-hero-overlay" />

        <div className="menu-hero-content">
          <span className="menu-eyebrow">COOK'S BAKERY & CAFE</span>

          <h1>Our Menu</h1>

          <p>
            Something delicious for every craving.
            <br />
            Freshly prepared. Always worth coming back for.
          </p>
        </div>
      </section>

      {/* CATEGORY BAR */}
      <section className="menu-category-wrapper">
        <div className="menu-category-scroll">
          {categories.map((category) => (
            <button
              key={category}
              className={`menu-category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section className="menu-content">

        <div className="menu-intro">
          <span>EXPLORE</span>
          <h2>Our Menu</h2>
          <p>
            From comforting classics to loaded favourites,
            there is something here for everyone.
          </p>
        </div>

        <div className="menu-sections">

          {visibleSections.map((section) => {
            const sectionId = `menu-${section.category
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`;

            return (
              <article
                className="menu-section"
                id={sectionId}
                key={section.category}
              >

                <div className="menu-section-heading">
                  <span className="menu-section-line" />

                  <div>
                    <span className="menu-section-number">
                      {String(
                        menuData.findIndex(
                          (item) => item.category === section.category
                        ) + 1
                      ).padStart(2, "0")}
                    </span>

                    <h3>{section.category}</h3>
                  </div>

                  <span className="menu-section-line" />
                </div>

                {section.note && (
                  <div className="menu-note">
                    {section.note}

                    {section.sizes && (
                      <span className="menu-sizes">
                        {section.sizes.join("  /  ")}
                      </span>
                    )}
                  </div>
                )}

                <div className="menu-items">

                  {section.items.map((item, index) => (
                    <div
                      className="menu-item"
                      key={`${section.category}-${index}`}
                    >

                      <div className="menu-item-info">
                        <h4>{item[0]}</h4>

                        {item[2] && (
                          <span className="menu-item-note">
                            ({item[2]})
                          </span>
                        )}
                      </div>

                      <span className="menu-item-dots" />

                      <span className="menu-item-price">
                        {item[1]}
                      </span>

                    </div>
                  ))}

                </div>

              </article>
            );
          })}

        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="menu-bottom-cta">
        <span>GOOD FOOD • GOOD MOOD</span>

        <h2>Come hungry.</h2>

        <p>
          Leave with a full heart and an even fuller plate.
        </p>

        <div className="menu-cta-buttons">
          <a href="/contact">Visit Us</a>

          <a href="tel:+919999999999">
            Call Us
          </a>
        </div>
      </section>

    </main>
  );
}

export default Menu;