import { motion } from "framer-motion";
import "./StoryPreview.css";


function StoryPreview(){

  return(

    <section className="story-section">


      <div className="container story-wrapper">


        <motion.div

          className="story-image"

          initial={{
            opacity:0,
            x:-80
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}

        >

          <img

            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop"

            alt="Fresh bakery"

          />

        </motion.div>



        <motion.div

          className="story-text"

          initial={{
            opacity:0,
            x:80
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}

        >

          <span>
            OUR STORY
          </span>


          <h2>
            Crafted With
            <br/>
            Love & Tradition
          </h2>


          <p>

            At Cook's Bakery & Cafe, we believe every
            bite should create a memory. Our bakers
            carefully prepare every cake, pastry and
            bread using quality ingredients.

          </p>


          <p>

            A place where families meet, friends
            gather and every celebration becomes
            sweeter.

          </p>


          <button>
            Discover More
          </button>


        </motion.div>


      </div>


    </section>

  )

}


export default StoryPreview;