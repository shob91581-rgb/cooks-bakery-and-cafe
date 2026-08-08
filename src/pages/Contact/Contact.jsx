import { motion } from "framer-motion";
import "./Contact.css";

const MAP_URL =
  "https://www.google.com/maps/place/cooks+bakery+and+cafe/data=!4m2!3m1!1s0x3976c5741b012713:0xcb3206574f50b79d?sa=X&ved=1t:242&ictx=111";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="contact-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="contact-hero">

        <div className="contact-hero-image" />

        <div className="contact-hero-overlay" />

        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span>COME SAY HELLO</span>

          <h1>
            Let's <em>Connect.</em>
          </h1>

          <p>
            Have a question, planning a celebration, or simply
            looking for your next favourite place? We'd love to
            hear from you.
          </p>
        </motion.div>

      </section>


      {/* =========================
          CONTACT DETAILS
      ========================= */}

      <section className="contact-details">

        <div className="contact-details-heading">

          <span>GET IN TOUCH</span>

          <h2>
            Come for the food.
            <br />
            Stay for the <em>experience.</em>
          </h2>

          <p>
            Whether you're stopping by for your morning coffee,
            celebrating something special, or meeting someone
            over a delicious meal, Cook's is always ready to
            welcome you.
          </p>

        </div>


        <div className="contact-info-grid">

          {/* LOCATION */}

          <div className="contact-info-card">

            <span className="contact-card-number">
              01
            </span>

            <h3>Visit Us</h3>

            <p>
              Cook's Bakery & Cafe
              <br />
              G-0003, Vasundhara Tower
              <br />
              Patel Nagar, City Center
              <br />
              Gwalior, Madhya Pradesh
            </p>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
              <span>↗</span>
            </a>

          </div>


          {/* PHONE */}

          <div className="contact-info-card">

            <span className="contact-card-number">
              02
            </span>

            <h3>Call Us</h3>

            <p>
              Have a question?
              <br />
              Need help with an order?
              <br />
              Give us a call.
            </p>

            <a href="tel:+919584244559">
              +91 95842 44559
              <span>↗</span>
            </a>

          </div>


          {/* INSTAGRAM */}

          <div className="contact-info-card">

            <span className="contact-card-number">
              03
            </span>

            <h3>Instagram</h3>

            <p>
              Follow Cook's for freshly baked
              <br />
              creations, cafe moments and
              <br />
              special updates.
            </p>

            <a
              href="https://www.instagram.com/cooksbakeryandcafe/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Follow Us
              <span>↗</span>
            </a>

          </div>


          {/* OPENING HOURS */}

          <div className="contact-info-card">

            <span className="contact-card-number">
              04
            </span>

            <h3>Opening Hours</h3>

            <p>
              Monday – Sunday
              <br />
              10:00 AM – 10:00 PM
              <br />
              Open all week
            </p>

            <span className="contact-open">
              ● Open Today
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          MESSAGE FORM
      ========================= */}

      <section className="contact-message">

        <div className="contact-message-heading">

          <span>SEND A MESSAGE</span>

          <h2>
            We'd love to
            <br />
            <em>hear from you.</em>
          </h2>

          <p>
            Have something to ask or tell us?
            Fill out the form and we'll get back to you.
          </p>

        </div>


        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
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

          <div className="contact-form-row">

            <div className="contact-field">

              <label htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />

            </div>


            <div className="contact-field">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
              />

            </div>

          </div>


          <div className="contact-field">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />

          </div>


          <div className="contact-field">

            <label htmlFor="subject">
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What would you like to talk about?"
            />

          </div>


          <div className="contact-field">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
            />

          </div>


          <button
            type="submit"
            className="contact-submit"
          >
            <span>Send Message</span>

            <span className="contact-submit-arrow">
              →
            </span>
          </button>

        </motion.form>

      </section>


      {/* =========================
          LOCATION
      ========================= */}

      <section className="contact-location">

        <div className="contact-location-image">

          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1800&q=85"
            alt="Cook's Bakery and Cafe"
          />

        </div>


        <div className="contact-location-content">

          <span>COME VISIT COOK'S</span>

          <h2>
            Your table
            <br />
            <em>is waiting.</em>
          </h2>

          <p>
            Good coffee, freshly baked treats and a place
            to slow down for a while.
          </p>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="contact-location-button"
          >
            Open in Google Maps
            <span>↗</span>
          </a>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="contact-final">

        <div className="contact-final-inner">

          <span>COOK'S BAKERY & CAFE</span>

          <h2>
            See you
            <br />
            <em>soon.</em>
          </h2>

          <p>
            Until then, explore our menu and discover
            something delicious.
          </p>

          <a
            href="/menu"
            className="contact-menu-button"
          >
            Explore Our Menu
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;