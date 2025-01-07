import { motion,AnimatePresence } from "motion/react"
import { useEffect } from "react"
const ItemAlreadyAdded = ({alreadyAdded,setAlreadyAdded}) => {

    useEffect(() => {
        let timeoutId;

        if (alreadyAdded) {
            timeoutId = setTimeout(() => {
                setAlreadyAdded(false)
            },2000)
        }
        return () => {
            clearTimeout(timeoutId);
          };
        
    },[alreadyAdded])
    return(
        <AnimatePresence>
           { alreadyAdded ? <motion.div
             initial={{x:0}}
             animate={{x:-1200}}
             whileInView={{x:0}}
             exit={{x:-1500}}
             className="bg-red-200 grid place-content-center text-white h-10 top-[40px] w-full z-50 fixed">
            <span>item has already been added to cart</span>
         </motion.div> : null}
        </AnimatePresence>
         
    )
}

export default ItemAlreadyAdded