import { motion } from "framer-motion";
import "./FeaturedProducts.css";


const products = [

  {
    image:
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=900&auto=format&fit=crop",
    title:"Signature Cakes",
    text:"Handcrafted celebration cakes"
  },


  {
    image:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop",
    title:"Fresh Breads",
    text:"Daily baked artisan breads"
  },


  {
    image:
    "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=900&auto=format&fit=crop",
    title:"Sweet Pastries",
    text:"Delicate desserts made fresh"
  }


];


function FeaturedProducts(){


  return(


    <section className="products-section">


      <div className="container">


        <motion.div

          className="products-heading"

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
            Our Specialties
          </span>


          <h2>
            Crafted For
            <br/>
            Every Occasion
          </h2>


        </motion.div>




        <div className="products-grid">


        {

          products.map((item,index)=>(


            <motion.div

              className="product-card"

              key={index}

              initial={{
                opacity:0,
                y:60
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


              <img
                src={item.image}
                alt={item.title}
              />


              <div className="product-info">


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.text}
                </p>


              </div>


            </motion.div>


          ))

        }


        </div>


      </div>


    </section>


  )

}


export default FeaturedProducts;