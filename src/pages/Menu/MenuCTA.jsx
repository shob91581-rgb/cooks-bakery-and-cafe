import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./MenuCTA.css";

function MenuCTA() {
  return (
    <section className="menu-cta">

      <div className="menu-cta-overlay"></div>

      <div className="menu-cta-container">

        <motion.div
          className="menu-cta-content"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <span className="menu-cta-label">
            Come Hungry
          </span>

          <h2>
            Good Food.
            <br />
            Good Mood.
          </h2>

          <p>
            From freshly prepared favourites to sweet treats,
            there is always something waiting for you at
            Cook's Bakery & Cafe.
          </p>

          <div className="menu-cta-buttons">

            <Link
              to="/contact"
              className="menu-cta-button primary"
            >
              Visit Us
              <span>↗</span>
            </Link>

            <Link
              to="/gallery"
              className="menu-cta-button secondary"
            >
              Explore Gallery
              <span>→</span>
            </Link>

          </div>

        </motion.div>


        <motion.div
          className="menu-cta-decoration"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
        >
          <span>COOK'S</span>
          <span>BAKERY</span>
          <span>& CAFE</span>
        </motion.div>

      </div>

    </section>
  );
}

export default MenuCTA;