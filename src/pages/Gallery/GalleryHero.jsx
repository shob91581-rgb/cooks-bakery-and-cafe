import { motion } from "framer-motion";
import "./GalleryHero.css";

function GalleryHero() {
  return (
    <section className="gallery-hero">

      <div className="gallery-hero-image" />

      <div className="gallery-hero-overlay" />

      <motion.div
        className="gallery-hero-content"
        initial={{
          opacity: 0,
          y: 45,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >

        <span className="gallery-hero-label">
          A GLIMPSE INTO COOK'S
        </span>

        <h1>
          Moments
          <br />
          <em>Worth Remembering.</em>
        </h1>

        <p>
          From freshly baked favourites to quiet coffee moments,
          discover the world of Cook's Bakery & Cafe.
        </p>

      </motion.div>

      <div className="gallery-hero-bottom">

        <span>SCROLL TO EXPLORE</span>

        <div className="gallery-scroll-line" />

      </div>

    </section>
  );
}

export default GalleryHero;