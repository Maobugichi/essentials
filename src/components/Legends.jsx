import banner from "../assets/felabanner.avif"
import { motion } from "motion/react"

const Legends = () => {
   return( 
   <motion.div 
   initial={{ backgroundSize: '100% 100%' }}
   whileHover={{ backgroundSize: '110% 110%' }}
   transition={{ duration: 1, ease: 'easeInOut',type:"tween" }}
   className="text-white w-[95%]  mx-auto rounded-md h-full flex items-center" style={{backgroundImage:`url(${banner})`, backgroundRepeat:"no-repeat", backgroundPosition:"left", backgroundSize: "cover"}}>
        <div className="h-[60%] flex flex-col justify-center  lg:w-1/2 w-full gap-3 pl-10">
            <h2 className="text-[45px]">Fela Tees</h2>
            <p className="text-2xl">Amazing Discounts On The Legendary Fela Tees</p>
            <button className="bg-black text-white h-[48px] w-[150px]">Shop Now</button>
        </div>
    </motion.div>)
}

export default Legends