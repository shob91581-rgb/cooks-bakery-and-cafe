import { motion } from "framer-motion";
import "./Home.css";

const featuredItems = [
  {
    name: "Freshly Baked Pastries",
    category: "BAKERY",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Signature Cakes",
    category: "CAKES",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Fresh Coffee",
    category: "CAFE",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
  },
];

function Home() {
  return (
    <main className="home-page">

      {/* HERO */}

      <section className="home-hero">

        <div className="home-hero-image" />

        <div className="home-hero-overlay" />

        <motion.div
          className="home-hero-content"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span>COOK'S BAKERY & CAFE</span>

          <h1>
            Baked with
            <br />
            <em>love.</em>
          </h1>

          <p>
            Freshly baked goodness, beautiful coffee and
            moments worth slowing down for.
          </p>

          <div className="home-hero-actions">
            <a href="/menu">
              Explore Menu
              <span>→</span>
            </a>

            <a href="/about" className="home-secondary-link">
              Our Story
              <span>↗</span>
            </a>
          </div>
        </motion.div>

        <div className="home-scroll">
          <span>SCROLL</span>
          <i />
        </div>

      </section>


      {/* INTRO */}

      <section className="home-intro">

        <div className="home-section-label">
          <span>01</span>
          <span>WELCOME TO COOK'S</span>
        </div>

        <div className="home-intro-content">

          <h2>
            A little sweetness
            <br />
            in <em>every moment.</em>
          </h2>

          <p>
            Cook's Bakery & Cafe is a place for freshly baked
            treats, comforting food, carefully made coffee and
            the kind of atmosphere that makes you want to stay
            a little longer.
          </p>

          <a href="/about">
            Discover Our Story
            <span>→</span>
          </a>

        </div>

      </section>


      {/* FEATURED */}

      <section className="home-featured">

        <div className="home-featured-heading">

          <div>

            <span>02 — FROM OUR KITCHEN</span>

            <h2>
              Made fresh.
              <br />
              <em>Made for you.</em>
            </h2>

          </div>

          <a href="/menu">
            View Full Menu
            <span>↗</span>
          </a>

        </div>


        <div className="home-featured-grid">

          {featuredItems.map((item, index) => (

            <motion.article
              className="home-product-card"
              key={item.name}
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
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              <div className="home-product-image">

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                <div className="home-product-overlay">

                  <span>Explore</span>

                  <span>↗</span>

                </div>

              </div>


              <div className="home-product-info">

                <span>{item.category}</span>

                <h3>{item.name}</h3>

              </div>

            </motion.article>

          ))}

        </div>

      </section>


      {/* EXPERIENCE */}

      <section className="home-experience">

        <div className="home-experience-image">

          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1800&q=85"
            alt="Cook's Bakery and Cafe"
            loading="lazy"
          />

        </div>


        <div className="home-experience-content">

          <span>03 — THE COOK'S EXPERIENCE</span>

          <h2>
            Come hungry.
            <br />
            Leave <em>happy.</em>
          </h2>

          <p>
            From the aroma of freshly baked bread to the first
            sip of your coffee, Cook's is all about creating
            simple experiences that feel special.
          </p>

          <a href="/gallery">
            Explore The Gallery
            <span>→</span>
          </a>

        </div>

      </section>


      {/* WHY COOK'S */}

      <section className="home-why">

        <div className="home-why-heading">

          <span>04 — WHY COOK'S</span>

          <h2>
            The little things
            <br />
            <em>matter.</em>
          </h2>

        </div>


        <div className="home-why-grid">

          <article>

            <span>01</span>

            <h3>Freshly Made</h3>

            <p>
              Fresh ingredients and freshly prepared favourites,
              every day.
            </p>

          </article>


          <article>

            <span>02</span>

            <h3>Quality First</h3>

            <p>
              We care about every ingredient, every recipe and
              every plate that leaves our kitchen.
            </p>

          </article>


          <article>

            <span>03</span>

            <h3>Made With Love</h3>

            <p>
              Because food tastes better when it is made with
              care and attention.
            </p>

          </article>

        </div>

      </section>


      {/* QUOTE */}

      <section className="home-quote">

        <div className="home-quote-inner">

          <span>A NOTE FROM COOK'S</span>

          <h2>
            Life is too short
            <br />
            for <em>ordinary coffee.</em>
          </h2>

          <p>
            So take your time. Order something delicious.
            Enjoy the moment.
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="home-cta">

        <div className="home-cta-image" />

        <div className="home-cta-overlay" />

        <div className="home-cta-content">

          <span>YOUR TABLE IS WAITING</span>

          <h2>
            See you
            <br />
            <em>at Cook's.</em>
          </h2>

          <div className="home-cta-buttons">

            <a href="/menu">
              Explore Menu
              <span>→</span>
            </a>

            <a
              href="/contact"
              className="home-cta-outline"
            >
              Find Us
              <span>↗</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;