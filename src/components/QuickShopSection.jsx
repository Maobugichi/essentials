import { motion , useScroll, useTransform } from "motion/react"
import { useState , useRef,useEffect} from "react";
import QuickShop from "./QuickShop";
import essential1 from "../assets/essential1.jpeg"
import essential2 from "../assets/jer2.jpeg"
import essential3 from "../assets/jer3.jpeg"
import jer1 from "../assets/jer1.jpeg"
import essential5 from "../assets/essential5.jpeg"


const QuickShopSection = ({setShowCart}) => {
     const essentials = [essential1,essential2,essential3,jer1,essential5]
      const [scrollLeft, setScrollLeft] = useState(0);
        const sliderRef = useRef(null)
        const maxScrollLeft = -1300
        const handleButtonClick = () => {
            const newScrollLeft = scrollLeft - 320;
            if (newScrollLeft <= maxScrollLeft) {
              setScrollLeft(0);
            }  else {
                setScrollLeft(newScrollLeft)
            }
          };
        const { scrollXProgress } = useScroll(
         {
            container: sliderRef,
            layoutEffect: false,
         }
        )
        const scaleX = useTransform(scrollXProgress, [0, 1], [0, 1]);
      
        
        const handleButtonClickRight = () => {
        const newScrollLeft = scrollLeft + 320;
        if (newScrollLeft >= 100) {
            setScrollLeft(0);
        }  else {
            setScrollLeft(newScrollLeft)
        }
        };
    return(
        <div className="bg-gray-400/20 h-auto min-h-[230px] grid w-full overflow-x-scroll overflow-y-hidden pl-10">
            <div >
                <p>You may also like</p>
                <div className="flex gap-3">
                    <div onClick={handleButtonClickRight} ><i className="fa-solid fa-angle-left fa-lg" style={{color: "#000"}}></i></div>
                    <div onClick={handleButtonClick} ><i className="fa-solid fa-angle-right fa-lg" style={{color: "#333"}}></i></div>
                </div>
            </div>
             <motion.div 
                    id="slide"
                    initial={{ x: 0 }}
                    animate={{ x: scrollLeft }}
                    transition={{ duration: 0.3, type:"tween", ease: "linear" }}
                    className="w-full grid gap-7"
                    > 
                        <div className="flex gap-4 w-full ">
                            {
                            essentials.map(item => {
                                return(
                                    <QuickShop
                                     src={item}
                                     width="w-[290px]"
                                     imgWidth="w-[90%]"
                                     setShowCart={setShowCart}
                                    />
                                )
                            })
                            }
                        </div>
            </motion.div>
        </div>
    )
}


export default QuickShopSection