import { motion } from "framer-motion";
import "./HomeCTA.css";


function HomeCTA(){


  return(


    <section className="home-cta">


      <div className="home-cta-overlay"></div>


      <div className="container">


        <motion.div

          className="cta-content"

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

        >


          <span>
            VISIT COOK'S BAKERY
          </span>


          <h2>
            Taste The
            <br/>
            Difference
          </h2>


          <p>

            Fresh bakes, handcrafted desserts and
            unforgettable cafe moments are waiting
            for you.

          </p>


          <div className="cta-buttons">


            <button>
              Explore Menu
            </button>


            <button className="outline-btn">
              Contact Us
            </button>


          </div>


        </motion.div>


      </div>


    </section>


  )

}


export default HomeCTA;