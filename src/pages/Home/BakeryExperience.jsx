import { motion } from "framer-motion";
import "./BakeryExperience.css";


function BakeryExperience(){

  return(

    <section className="experience-section">


      <div className="container experience-wrapper">


        <motion.div

          className="experience-content"

          initial={{
            opacity:0,
            x:-60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

        >

          <span>
            THE EXPERIENCE
          </span>


          <h2>
            More Than A
            <br/>
            Bakery
          </h2>


          <p>

            Step into a warm and welcoming space where
            freshly baked aromas meet handcrafted coffee.
            Every corner is designed for comfort,
            conversations and unforgettable moments.

          </p>


          <div className="experience-points">


            <div>

              <h3>
                100%
              </h3>

              <p>
                Fresh Ingredients
              </p>

            </div>



            <div>

              <h3>
                Daily
              </h3>

              <p>
                Fresh Baking
              </p>

            </div>



            <div>

              <h3>
                Premium
              </h3>

              <p>
                Cafe Experience
              </p>

            </div>


          </div>


        </motion.div>




        <motion.div

          className="experience-image"

          initial={{
            opacity:0,
            x:60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

        >

          <img

          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"

          alt="Cafe interior"

          />

        </motion.div>


      </div>


    </section>

  )

}


export default BakeryExperience;