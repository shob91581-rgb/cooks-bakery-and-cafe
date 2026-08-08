import { motion } from "framer-motion";
import "./MenuHero.css";

function MenuHero() {
  return (
    <section className="menu-hero">

      <div className="menu-hero-bg"></div>

      <div className="menu-hero-content">

        <motion.span
          className="menu-hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Cook's Bakery & Cafe
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Our
          <br />
          <em>Menu</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Freshly prepared food, handcrafted drinks,
          <br />
          sweet treats and everything in between.
        </motion.p>

        <motion.div
          className="menu-hero-line"
          initial={{ width: 0 }}
          animate={{ width: "90px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

      </div>

      <div className="menu-hero-number">
        01
      </div>

    </section>
  );
}

export default MenuHero;