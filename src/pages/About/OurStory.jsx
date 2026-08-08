import { motion } from "framer-motion";
import "./OurStory.css";

function OurStory() {
  return (
    <section className="our-story">

      <div className="container">

        <div className="story-grid">

          <motion.div
            className="story-image"
            initial={{
              opacity: 0,
              x: -60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1400&auto=format&fit=crop"
              alt="Fresh bakery"
            />

          </motion.div>


          <motion.div
            className="story-content"
            initial={{
              opacity: 0,
              x: 60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
          >

            <span>
              OUR BEGINNING
            </span>

            <h2>
              Baked With
              <br />
              Heart
            </h2>

            <p>
              Cook's Bakery & Cafe was built around a simple
              idea — good food should bring people together.
            </p>

            <p>
              From freshly baked breads and beautifully crafted
              cakes to carefully prepared coffee, every creation
              is made with attention to detail and a genuine love
              for the craft.
            </p>

            <div className="story-signature">
              Cook's Bakery
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default OurStory;