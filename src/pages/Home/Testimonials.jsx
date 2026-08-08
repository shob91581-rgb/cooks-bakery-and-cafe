import { motion } from "framer-motion";
import "./Testimonials.css";


const reviews = [

  {
    name:"Aarav Sharma",
    text:"The cakes are absolutely amazing. Fresh, beautiful and full of flavour."
  },

  {
    name:"Riya Mehta",
    text:"A perfect place for coffee and peaceful conversations. Loved the ambience."
  },

  {
    name:"Kunal Verma",
    text:"One of the best bakery experiences. Every item feels handcrafted."
  }

];



function Testimonials(){


  return(


    <section className="testimonial-section">


      <div className="container">


        <motion.div

          className="testimonial-heading"

          initial={{
            opacity:0,
            y:40
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
            CUSTOMER LOVE
          </span>


          <h2>
            Sweet Words
            <br/>
            From Guests
          </h2>


        </motion.div>




        <div className="testimonial-grid">


        {

          reviews.map((review,index)=>(


            <motion.div

              className="review-card"

              key={index}

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

              transition={{
                delay:index*.15
              }}

            >


              <div className="stars">
                ★★★★★
              </div>


              <p>
                "{review.text}"
              </p>


              <h3>
                {review.name}
              </h3>


            </motion.div>


          ))

        }


        </div>


      </div>


    </section>


  )

}


export default Testimonials;