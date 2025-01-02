import { useState,useEffect } from "react"
import { motion , AnimatePresence, useScroll } from "motion/react"
import Nav from "./Nav"
import localForage from 'localforage';

const Header = ({text,isStuck,setIsStuck , color, iconColor , cartColor , cartText, openNav,setOpenNav ,showCart, setShowCart}) => {
   
    const [slides, setSlides] = useState([
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{type: "spring", duration: 0.3,  ease: "linear",stiffness: 100  }}
          exit={{ opacity: 0, x: -100 }}
          key="slide1"
          className="slide"
        >
          <p className="lg:text-[12px] text-[10px] tracking-wider">New Arrivals, now dropping Shop now!</p> 
        </motion.div>,
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{type: "spring", duration: 0.3,  ease: "linear",stiffness: 100  }}
          exit={{ opacity: 0, x: -100 }}
          key="slide2"
          className="slide"
        >
         <p className="lg:text-[12px] text-[10px] tracking-wider">Deals up to 70% off Hurry now</p> 
       </motion.div>,
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{type: "spring", duration: 0.3,  ease: "linear",stiffness: 100  }}
            exit={{ opacity: 0, x: -100 }}
            key="slide3"
            className="slide"
        >
           <p className="lg:text-[12px] text-[10px] tracking-wider"> Exclsive wears for all age groups</p>
        </motion.div>
    ]);
    const [ amount, setAmount] = useState(0)
    const [currentIndex,setCurrentIndex] = useState(0)
 
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % slides.length )
        },3000)
        return () => clearInterval(intervalId);
    
        },[slides])
       
      
    const handlePreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        const loadWishlist = async () => {
            const storedWishlist = await localForage.getItem('cartlist');
            if (storedWishlist) {
                setAmount(storedWishlist);
            } 
            };
            loadWishlist();
        }, []);
    return(
        <header className="lg:h-[250px]  flex flex-col relative lg:gap-4  z-30">
            <AnimatePresence>
                <div className=" border-b bg-black  h-11 text-white grid place-items-center ">
                    <div className=" flex justify-between items-center w-[90%] lg:w-1/2 mx-auto ">
                        <i onClick={handlePreviousSlide} className="fa-solid fa-angle-left fa-xl" style={{color: "#f2f2f3"}}></i>
                        {slides[currentIndex]}
                        <i onClick={handleNextSlide} className="fa-solid fa-angle-right fa-xl" style={{color: "#f2f2f3"}}></i>
                    </div>
                </div>
            </AnimatePresence>
            <div className="h-[80%] relative">
                <Nav
                text={text}
                isStuck={isStuck}
                setIsStuck={setIsStuck}
                amount={amount}
                color={color}
                iconColor={iconColor}
                cartColor={cartColor}
                cartText={cartText}
                openNav={openNav}
                setOpenNav={setOpenNav}
                showCart={showCart}
                setShowCart={setShowCart}
                />
            </div>
           
        </header>
    )
}

export default Header