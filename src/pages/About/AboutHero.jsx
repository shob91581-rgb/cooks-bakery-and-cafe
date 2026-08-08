import { motion } from "framer-motion";
import "./AboutHero.css";

function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-hero-overlay"></div>

      <div className="container about-hero-content">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          OUR STORY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Where Every
          <br />
          Bite Tells A Story
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Discover the passion, craft and warmth behind
          Cook's Bakery & Cafe.
        </motion.p>

      </div>

    </section>
  );
}

export default AboutHero;