import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./AboutCTA.css";

function AboutCTA() {
  return (
    <section className="about-cta">

      <div className="about-cta-overlay"></div>

      <div className="container about-cta-content">

        <motion.span
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
        >
          COME VISIT US
        </motion.span>


        <motion.h2
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8,
            delay: 0.1
          }}
        >
          Good Food.
          <br />
          Good Coffee.
          <br />
          Good Moments.
        </motion.h2>


        <motion.p
          initial={{
            opacity: 0,
            y: 25
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7,
            delay: 0.2
          }}
        >
          Come by, slow down and enjoy something freshly
          baked with a cup of your favourite coffee.
        </motion.p>


        <motion.div
          className="about-cta-buttons"
          initial={{
            opacity: 0,
            y: 25
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7,
            delay: 0.3
          }}
        >

          <Link
            to="/menu"
            className="about-cta-primary"
          >
            Explore Our Menu
          </Link>


          <Link
            to="/contact"
            className="about-cta-secondary"
          >
            Visit Us
          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutCTA;