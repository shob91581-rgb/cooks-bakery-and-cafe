import { motion } from "framer-motion";
import "./Philosophy.css";

const values = [
  {
    number: "01",
    title: "Fresh Every Day",
    text: "We believe freshness makes all the difference. Our breads, pastries and treats are prepared with care so every visit feels special."
  },
  {
    number: "02",
    title: "Made With Care",
    text: "From the first ingredient to the final presentation, we pay attention to the little details that turn simple food into memorable moments."
  },
  {
    number: "03",
    title: "Made To Be Shared",
    text: "A bakery is more than a place for food. It is a place for conversations, celebrations, coffee breaks and moments worth remembering."
  }
];

function Philosophy() {
  return (
    <section className="philosophy">

      <div className="container">

        <motion.div
          className="philosophy-heading"
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
            duration: 0.8
          }}
        >

          <span>WHAT WE BELIEVE</span>

          <h2>
            Simple Ideas.
            <br />
            Beautifully Crafted.
          </h2>

          <p>
            Everything we do comes back to one simple belief:
            great food, genuine hospitality and thoughtful
            details can make an ordinary day feel extraordinary.
          </p>

        </motion.div>


        <div className="philosophy-grid">

          {values.map((item, index) => (

            <motion.div
              className="philosophy-card"
              key={item.number}
              initial={{
                opacity: 0,
                y: 50
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
                delay: index * 0.15
              }}
            >

              <span className="philosophy-number">
                {item.number}
              </span>

              <div className="philosophy-line"></div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Philosophy;