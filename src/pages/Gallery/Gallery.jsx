import { motion } from "framer-motion";
import "./Gallery.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    title: "The Cafe",
    category: "Cafe",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    title: "Freshly Baked",
    category: "Bakery",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
    title: "Morning Bake",
    category: "Bakery",
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85",
    title: "Made Fresh",
    category: "Food",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    title: "Coffee Time",
    category: "Cafe",
  },
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    title: "Sweet Moments",
    category: "Desserts",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
    title: "Something Sweet",
    category: "Desserts",
  },
  {
    src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=85",
    title: "Fresh From The Oven",
    category: "Bakery",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
    title: "Good Food",
    category: "Food",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
    title: "Cafe Moments",
    category: "Cafe",
  },
  {
    src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1200&q=85",
    title: "Celebrations",
    category: "Desserts",
  },
  {
    src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85",
    title: "Chocolate Indulgence",
    category: "Desserts",
  },
];

function Gallery() {
  return (
    <main className="gallery-page">

      {/* HERO */}

      <section className="gallery-hero">

        <div className="gallery-hero-image" />

        <div className="gallery-hero-overlay" />

        <motion.div
          className="gallery-hero-content"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>COOK'S BAKERY & CAFE</span>

          <h1>
            Moments
            <br />
            <em>worth sharing.</em>
          </h1>

          <p>
            A little look into our world of freshly baked
            treats, beautiful plates, good coffee and
            unforgettable cafe moments.
          </p>
        </motion.div>

      </section>


      {/* INTRO */}

      <section className="gallery-intro">

        <div className="gallery-intro-label">
          <span>01</span>
          <span>OUR GALLERY</span>
        </div>

        <div className="gallery-intro-content">

          <h2>
            Made with care.
            <br />
            <em>Captured with love.</em>
          </h2>

          <p>
            From the first cup of coffee in the morning to
            the last bite of dessert, every moment at Cook's
            is made to be enjoyed.
          </p>

        </div>

      </section>


      {/* GALLERY */}

      <section className="gallery-grid-section">

        <div className="gallery-grid">

          {galleryImages.map((image, index) => (
            <motion.article
              className={`gallery-item gallery-item-${index + 1}`}
              key={image.src}
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
                margin: "-80px",
              }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.08,
              }}
            >

              <div className="gallery-image-wrapper">

                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                />

                <div className="gallery-image-overlay">

                  <span>View</span>

                  <span>↗</span>

                </div>

              </div>

              <div className="gallery-item-info">

                <span>{image.category}</span>

                <h3>{image.title}</h3>

              </div>

            </motion.article>
          ))}

        </div>

      </section>


      {/* QUOTE */}

      <section className="gallery-quote">

        <div className="gallery-quote-inner">

          <span>THE COOK'S EXPERIENCE</span>

          <h2>
            Good food.
            <br />
            Good coffee.
            <br />
            <em>Good company.</em>
          </h2>

          <p>
            Because the best memories are often made
            around a table.
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="gallery-cta">

        <div className="gallery-cta-image" />

        <div className="gallery-cta-overlay" />

        <div className="gallery-cta-content">

          <span>COME EXPERIENCE IT YOURSELF</span>

          <h2>
            See you
            <br />
            <em>at Cook's.</em>
          </h2>

          <a href="/menu">
            Explore Our Menu
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default Gallery;