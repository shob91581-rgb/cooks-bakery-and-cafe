import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-image" />

        <div className="about-hero-overlay" />

        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>OUR STORY</span>

          <h1>
            More than
            <br />
            <em>a bakery.</em>
          </h1>

          <p>
            A place where freshly baked goodness, great coffee
            and meaningful moments come together.
          </p>
        </motion.div>

      </section>


      {/* STORY */}

      <section className="about-story">

        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=85"
            alt="Freshly baked bread"
          />
        </div>

        <div className="about-story-content">

          <span>01 — WHERE IT BEGAN</span>

          <h2>
            Built around
            <br />
            <em>good food.</em>
          </h2>

          <p>
            Cook's Bakery & Cafe was created with a simple
            idea — bring people together over food that feels
            warm, familiar and genuinely delicious.
          </p>

          <p>
            From freshly baked breads and cakes to comforting
            cafe favourites, everything we serve is made to
            create a moment worth remembering.
          </p>

          <div className="about-story-signature">
            <span>COOK'S</span>
            <small>BAKERY & CAFE</small>
          </div>

        </div>

      </section>


      {/* PHILOSOPHY */}

      <section className="about-philosophy">

        <div className="about-philosophy-heading">

          <span>02 — OUR PHILOSOPHY</span>

          <h2>
            Simple things.
            <br />
            <em>Done beautifully.</em>
          </h2>

        </div>

        <div className="about-philosophy-grid">

          <article>
            <span>01</span>
            <h3>Fresh Every Day</h3>
            <p>
              We believe freshly baked food simply tastes
              better. That's why freshness is at the heart
              of everything we make.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Made With Care</h3>
            <p>
              From ingredients to presentation, every little
              detail matters. Good food deserves attention.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>A Place To Gather</h3>
            <p>
              Cook's isn't just about what is on the plate.
              It's about the conversations, celebrations and
              memories around it.
            </p>
          </article>

        </div>

      </section>


      {/* EXPERIENCE */}

      <section className="about-experience">

        <div className="about-experience-image">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=85"
            alt="Coffee at Cook's Bakery and Cafe"
          />
        </div>

        <div className="about-experience-content">

          <span>THE COOK'S EXPERIENCE</span>

          <h2>
            Slow down.
            <br />
            <em>Stay awhile.</em>
          </h2>

          <p>
            There is always time for one more cup of coffee,
            one more conversation and one more bite of
            something delicious.
          </p>

          <a href="/menu">
            Explore Our Menu
            <span>→</span>
          </a>

        </div>

      </section>


      {/* VALUES */}

      <section className="about-values">

        <div className="about-values-top">
          <span>03 — WHAT MATTERS TO US</span>

          <h2>
            Made for
            <br />
            <em>your moments.</em>
          </h2>
        </div>

        <div className="about-values-list">

          <div>
            <span>01</span>
            <strong>Quality</strong>
            <p>
              Thoughtfully selected ingredients and
              carefully prepared food.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Warmth</strong>
            <p>
              A welcoming space where everyone can feel
              comfortable.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Creativity</strong>
            <p>
              Classic favourites with a little Cook's
              personality.
            </p>
          </div>

          <div>
            <span>04</span>
            <strong>Community</strong>
            <p>
              Creating a place people are happy to return to.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="about-cta">

        <div className="about-cta-image" />

        <div className="about-cta-overlay" />

        <div className="about-cta-content">

          <span>COME EXPERIENCE COOK'S</span>

          <h2>
            There's always
            <br />
            <em>room for you.</em>
          </h2>

          <a href="/contact">
            Visit Us
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default About;