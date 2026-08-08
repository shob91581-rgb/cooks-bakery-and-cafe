import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Navbar.css";


function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 30) {

        setScrolled(true);

      } else {

        setScrolled(false);

      }

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  const closeMenu = () => {

    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  return (

    <motion.nav

      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}

      initial={{
        opacity: 0,
        y: -20
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.6
      }}

    >

      <div className="nav-container">


        {/* LOGO */}

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >

          Cook's

          <span>
            Bakery
          </span>

        </Link>



        {/* DESKTOP / MOBILE LINKS */}

        <div
          className={`nav-links ${
            open ? "active" : ""
          }`}
        >

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>


          <Link
            to="/about"
            onClick={closeMenu}
          >
            About
          </Link>


          <Link
            to="/menu"
            onClick={closeMenu}
          >
            Menu
          </Link>


          <Link
            to="/gallery"
            onClick={closeMenu}
          >
            Gallery
          </Link>


          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>

        </div>



        {/* ORDER BUTTON */}

        <button
          className="nav-button"
          onClick={() => {
            window.location.href = "/contact";
          }}
        >

          Order Now

        </button>



        {/* MOBILE MENU */}

        <button

          className={`menu-toggle ${
            open ? "open" : ""
          }`}

          onClick={() => setOpen(!open)}

          aria-label="Toggle navigation"

        >

          <span></span>

          <span></span>

          <span></span>

        </button>


      </div>

    </motion.nav>

  );

}


export default Navbar;