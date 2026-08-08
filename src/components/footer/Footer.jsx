import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="container">

          <div className="footer-grid">

            {/* BRAND */}
            <div className="footer-brand">

              <Link to="/" className="footer-logo">
                Cook's
                <span>Bakery</span>
              </Link>

              <p>
                Freshly baked goodness, carefully crafted coffee,
                and beautiful moments shared every day.
              </p>

              <div className="footer-socials">

                <a
                  href="https://www.instagram.com/cooksbakeryandcafe/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  Facebook
                </a>

              </div>

            </div>


            {/* QUICK LINKS */}
            <div className="footer-column">

              <h3>
                Explore
              </h3>

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/menu">
                Menu
              </Link>

              <Link to="/gallery">
                Gallery
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </div>


            {/* VISIT */}
            <div className="footer-column">

              <h3>
                Visit Us
              </h3>

              <p>
  Cook's Bakery & Cafe
  <br />
  G-0003, Vasundhara Tower
  <br />
  Patel Nagar, City Center
  <br />
  Gwalior, Madhya Pradesh
</p>

            </div>


            {/* CONTACT */}
            <div className="footer-column">

              <h3>
                Get In Touch
              </h3>

              <a href="tel:+919584244559">
                +91 95842 44559
              </a>

              <a href="mailto:hello@cooksbakery.com">
                hello@cooksbakery.com
              </a>

              <Link to="/contact" className="footer-contact-link">
                Plan Your Visit →
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM BAR */}

      <div className="footer-bottom">

        <div className="container footer-bottom-inner">

          <p>
            © {currentYear} Cook's Bakery & Cafe.
            All rights reserved.
          </p>

          <p>
            Crafted with care.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;