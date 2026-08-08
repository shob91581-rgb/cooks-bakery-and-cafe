import { motion } from "framer-motion";
import "./Welcome.css";

function Welcome() {
  return (
    <section className="welcome-section">

      <div className="welcome-number">
        <span>01</span>
        <span>WELCOME TO COOK'S</span>
      </div>

      <motion.div
        className="welcome-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >

        <span className="welcome-label">
          A PLACE TO EAT · DRINK · GATHER
        </span>

        <h2>
          A little sweetness
          <br />
          in <em>every moment.</em>
        </h2>

        <p>
          Welcome to Cook's Bakery & Cafe — where freshly
          baked treats, comforting food and beautifully made
          coffee come together under one roof.
        </p>

        <p>
          Whether you're here for your morning coffee, a
          celebration cake or simply something delicious,
          there's always something waiting for you.
        </p>

        <a href="/about" className="welcome-link">
          Discover Our Story
          <span>→</span>
        </a>

      </motion.div>

    </section>
  );
}

export default Welcome;