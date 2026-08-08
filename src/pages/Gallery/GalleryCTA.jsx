
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./GalleryCTA.css";

function GalleryCTA() {
  return (
    <section className="gallery-cta">

      <div className="gallery-cta-inner">

        <motion.div
          className="gallery-cta-content"
          initial={{
            opacity: 0,
            y: 35,
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

          <span>COME EXPERIENCE COOK'S</span>

          <h2>
            Pictures are nice.
            <br />
            <em>The real thing is better.</em>
          </h2>

          <p>
            Come by for something freshly baked, a perfectly brewed
            coffee and a moment worth remembering.
          </p>


          <div className="gallery-cta-buttons">

            <Link
              to="/menu"
              className="gallery-cta-primary"
            >
              Explore Menu
              <span>→</span>
            </Link>


            <Link
              to="/contact"
              className="gallery-cta-secondary"
            >
              Visit Cook's
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default GalleryCTA;