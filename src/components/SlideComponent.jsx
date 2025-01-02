import { motion , useScroll, useTransform } from "motion/react"
import Variety from "./Variety"
import { useState,useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

const SlideComponent = ({essentials,top,recommendations,simgHeight}) => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const [data,setData] = useState([])
    const sliderRef = useRef(null)
    const maxScrollLeft = -1300
    const smMax = -1100
    const handleButtonClick = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 500) {
            const newScrollLeft = scrollLeft - (screenWidth * 0.5); ;
            if (newScrollLeft <= smMax ) {
                setScrollLeft(0);
              }  else {
                  setScrollLeft(newScrollLeft)
              }
        } else if (screenWidth > 500) {
            const newScrollLeft = scrollLeft - (screenWidth * 0.3); 
            if (newScrollLeft <= maxScrollLeft ) {
                setScrollLeft(0);
              }  else {
                  setScrollLeft(newScrollLeft)
            }
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
        const newScrollLeft = scrollLeft + 200;
        if (newScrollLeft >= 100) {
            setScrollLeft(0);
        }  else {
            setScrollLeft(newScrollLeft)
        }
    };

    const navigate = useNavigate()
    const handleNavigate = (e) => {
        setData(essentials);
    }

    useEffect(() => {
        if (data.length !== 0) {
        navigate("/essentials/1",{state:{data:data}})
        }
    },[data])
        
    return(
        <section className={`w-full lg:mt-9 h-auto min-h-[50vh] lg:min-h-[90vh] grid lg:gap-7 place-items-center  relative ${top} bg-red-300`}>
            <div onClick={handleButtonClickRight} className="bg-white w-[40px] h-[40px] rounded-full shadow-xl absolute left-2 lg:left-8 z-10  top-[45%] grid  place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 40 40">
                    <path fill="#000" d="M24.96 32.601L12.371 19.997l.088-.088l12.507-12.52a.66.66 0 0 0-.01-.921a.65.65 0 0 0-.458-.182a.65.65 0 0 0-.465.186l-13.004 13.02a.63.63 0 0 0-.176.49a.66.66 0 0 0 .18.523l13.014 13.031c.244.23.659.233.921-.02a.66.66 0 0 0-.008-.915"></path>
                </svg>
            </div>
            <div  ref={sliderRef}  className={` w-[90%]    mx-auto  flex flex-col gap-4 bg-yellow-300 h-[90%] no-scrollbar`} style={{ overflow: "scroll" }}>
                <ul className="flex  w-[18%] justify-between h-auto min-h-[35px]">
                    <li className="hover:border-[#000] hover:border-b-2 p-1 transition-all duration-200">Jerseys</li>
                    <li className="hover:border-[#000] hover:border-b-2 p-1 transition-all duration-200">Slides</li>
                    <li className="hover:border-[#000] hover:border-b-2 p-1 transition-all duration-200">Shorts</li>
                </ul>
                <motion.div 
                    id="slide"
                    initial={{ x: 0 }}
                    animate={{ x: scrollLeft }}
                    transition={{ duration: 0.3, type:"tween", ease: "linear" }}
                    className="w-full  grid gap-7"
                    > 
                        <div className="flex gap-4 w-full justify-center">
                        {recommendations && 
                            recommendations.map((item, index) => (
                                        <Variety
                                        key={index}
                                        recommendations={recommendations}
                                        name={item.name}
                                        price={item.price}
                                        bestSelling={item.bestselling}
                                        onSale={item.onSale}
                                        date={item.date}
                                        src={item.src}
                                        color={item.color}
                                        size={item.size}
                                        width="lg:w-[380px]"
                                        height="lg:h-[400px]"
                                        imgHeight="h-[330px]"
                                        imgWidth="w-[95%]"
                                        swidth="w-[200px]"
                                        sheight="h-[250px]"
                                        essentials={essentials}
                                        simgHeight={simgHeight}
                                        />
                            ))}

                            {!recommendations && essentials.slice(0, 6).map((item, index) => (
                                <Variety
                                key={index}
                                recommendations={recommendations}
                                name={item.name}
                                price={item.price}
                                bestSelling={item.bestselling}
                                onSale={item.onSale}
                                date={item.date}
                                src={item.src}
                                color={item.color}
                                size={item.size}
                                width="lg:w-[380px]"
                                height="lg:h-[400px]"
                                imgHeight="lg:h-[330px]"
                                imgWidth="w-[95%]"
                                swidth="w-[200px]"
                                sheight="h-[270px]"
                                essentials={essentials}
                                bottom="bottom-0"
                                simgHeight={simgHeight}
                                />
                            ))}

                        </div>
                </motion.div>
                <div class=" bg-gray-200 h-1 rounded-full w-1/2 mx-auto">
                <motion.div 
                    className="bg-blue-500 h-1 rounded"
                    style={{scaleX, originX: 0 }}
                    class="bg-[#333] h-1 rounded ">

                </motion.div>
                <button onClick={handleNavigate}>
                        View All
                </button>
            </div>
            </div>
            <div onClick={handleButtonClick} className="bg-white w-[40px] h-[40px] rounded-full shadow-md absolute right-2 lg:right-8 z-10  top-[45%] grid  place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                    <g fill="#000">
                        <path d="M7.116 4.32a.5.5 0 1 1 .768-.64l5 6a.5.5 0 0 1-.768.64z"></path>
                        <path d="M7.884 16.32a.5.5 0 0 1-.768-.64l5-6a.5.5 0 1 1 .768.64z"></path>
                    </g>
                </svg>
            </div>
           
         
    </section>
    )
}

export default SlideComponent