import addToCartIcon from "../assets/addTocart.svg"
import {useNavigate} from "react-router-dom"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from "react"
import { motion } from "motion/react"

const Variety = ({scrollLeft,src,width,imgWidth,height,name,price,onSale,color,size,count,imgHeight,recommendations,swidth,sheight ,essentials, cartIconWidth="w-6", cartIconHeight="h-6", cartIcon="w-3" , bottom="bottom-[40px]",span="w-[40%]",margin, simgHeight}) => {
    const navigate = useNavigate()
    const handleNavigate = (e) => {
        navigate("/essentials/extraDetails/1",{state:{src:src,name:name,color:color,size:size,price:price,recommendations:recommendations,essentials:essentials,count:count}})
    }
    const [imageLoaded, setImageLoaded] = useState(false)
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImageLoaded(true);
      }, [src]);
      
    return(
       
         <motion.div 
         initial={{opacity:0,y:-10}}
         whileInView={{opacity:1,y:0}}
         transition={{type:"tween",duration:0.5}}
         className={`flex flex-col lg:gap-7   ${width} ${height} ${swidth} ${sheight} relative z-10 ${margin}`} >
               {onSale ? <span className="bg-red-400 lg:text-sm text-[12px] p-2 w-auto  lg:min-w-[25%]  absolute z-30 text-white">On Sale</span> : null}
                <div className="relative top-2   h-[70%] grid place-items-center lg:w-full w-[95%] mx-auto">
                    <div  className={`${imgHeight} ${simgHeight}  lg:${imgWidth} flex items-center w-[90%]`}> 
                     {imageLoaded ? ( <img onClick={handleNavigate} className="lg:w-[95%] h-full" src={src} alt={name}
                    />) : (
                        <Skeleton height={200} width={200} />)}

                    </div>
                    <div className={`absolute lg:bottom-[-10px] ${bottom} right-2 lg:right-0 bg-white rounded-full lg:w-9 lg:h-9 ${cartIconWidth} ${cartIconHeight} grid place-items-center shadow-md`}>
                      <img className={`lg:w-4 ${cartIcon}`} src={addToCartIcon} alt="add to cart icon" />
                    </div>
                </div>
                <div className="w-[85%] mx-auto h-[200px] flex  flex-col justify-center ">
                    <p className="text-[12px] w-[80%] lg:text-sm truncate">{name}</p>
                    <p className="text-[12px] text-red-500 lg:text-sm">₦{price} {onSale ? <span className="text-black line-through">₦240,000</span> : null}</p>
                </div>
            </motion.div>
  
           
            
    )
}

export default Variety