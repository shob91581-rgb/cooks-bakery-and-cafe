import { motion } from "framer-motion";
import "./GalleryGrid.css";

const images = [
  {
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=85",
    title: "Crafted Coffee",
    category: "Coffee",
  },

  {
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=85",
    title: "Morning Rituals",
    category: "Cafe",
  },

  {
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=85",
    title: "Signature Cakes",
    category: "Cakes",
  },

  {
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=85",
    title: "Freshly Baked",
    category: "Bakery",
  },

  {
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1600&q=85",
    title: "Sweet Moments",
    category: "Desserts",
  },

  {
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1400&q=85",
    title: "Beautiful Creations",
    category: "Cakes",
  },

  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
    title: "Our Space",
    category: "Cafe",
  },

  {
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85",
    title: "Cafe Experience",
    category: "Experience",
  },
];


function GalleryGrid() {
  return (
    <section className="gallery-grid-section">

      <div className="gallery-grid-container">

        <motion.div
          className="gallery-grid-heading"
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

          <span>OUR COLLECTION</span>

          <h2>
            A little look
            <br />
            <em>inside Cook's.</em>
          </h2>

          <p>
            Every corner tells a story. Every creation has a little
            piece of Cook's in it.
          </p>

        </motion.div>


        <div className="gallery-editorial-grid">

          {images.map((item, index) => (

            <motion.article
              key={item.title}
              className={`gallery-item gallery-item-${index}`}
              initial={{
                opacity: 0,
                y: 55,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: (index % 4) * 0.08,
              }}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="gallery-item-shade" />

              <div className="gallery-item-content">

                <span>{item.category}</span>

                <h3>{item.title}</h3>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default GalleryGrid;