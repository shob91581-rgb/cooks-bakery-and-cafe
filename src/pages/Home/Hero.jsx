import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="home-hero">

      <div className="home-hero-image" />

      <div className="home-hero-overlay" />

      <motion.div
        className="home-hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <span className="home-hero-eyebrow">
          COOK'S BAKERY & CAFE
        </span>

        <h1>
          Freshly baked.
          <br />
          <em>Simply delicious.</em>
        </h1>

        <p>
          Fresh bakes, handcrafted coffee and beautiful
          moments, served every day at Cook's.
        </p>

        <div className="home-hero-buttons">

          <a href="/menu" className="hero-primary-btn">
            Explore Menu
            <span>→</span>
          </a>

          <a href="/about" className="hero-text-btn">
            Our Story
            <span>↗</span>
          </a>

        </div>
      </motion.div>

      <div className="home-hero-bottom">

        <span>BAKED FRESH DAILY</span>

        <div className="hero-line" />

        <span>COOK'S BAKERY & CAFE</span>

      </div>

    </section>
  );
}

export default Hero;