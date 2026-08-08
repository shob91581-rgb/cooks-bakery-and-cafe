import { motion } from "framer-motion";
import "./WhyChooseUs.css";


const features = [

  {
    icon:"🥐",
    title:"Freshly Baked",
    text:"Every product is prepared fresh with quality ingredients."
  },

  {
    icon:"☕",
    title:"Premium Coffee",
    text:"Enjoy handcrafted beverages made with care."
  },

  {
    icon:"🎂",
    title:"Custom Creations",
    text:"Special cakes and desserts made for your occasions."
  }

];



function WhyChooseUs(){


  return(


    <section className="why-section">


      <div className="container">


        <motion.div

          className="why-heading"

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
            WHY CHOOSE US
          </span>


          <h2>
            Made With
            <br/>
            Passion
          </h2>


        </motion.div>



        <div className="why-grid">


        {

          features.map((item,index)=>(


            <motion.div

              className="why-card"

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

              <div className="why-icon">

                {item.icon}

              </div>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.text}
              </p>


            </motion.div>


          ))

        }


        </div>


      </div>


    </section>


  )

}


export default WhyChooseUs;