import { motion , useScroll, useTransform ,useAnimation} from "motion/react"
import Variety from "./Variety"
import { useState,useEffect, useLayoutEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

const SlideComponent = ({essentials,top,recommendations,simgHeight,stop,width="lg:w-[380px]",height,imgHeight,imgWidth,swidth,sheight}) => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const [data,setData] = useState([])
    const sliderRef = useRef(null)
    const maxScrollLeft = -780
    const smMax = -1100
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const progressTrackerRef = useRef(null);
    
    const navigate = useNavigate()
    const handleNavigate = (e) => {
        setData(essentials);
    }
    const handleScrollLeft = () => {
        setScrollPosition((prevPosition) => prevPosition - 300);

    };

    const handleScrollRight = () => {
      setScrollPosition((prevPosition) => prevPosition + 300);
      
    };

    useLayoutEffect(() => {
        const handleScroll = () => {
          setScrollPosition(containerRef.current.scrollLeft);
        };
        containerRef.current.addEventListener('scroll', handleScroll);
        return () => {
          containerRef.current.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    useLayoutEffect(() => {
    containerRef.current.scrollTo({
        left:scrollPosition,
        behaviour:"smooth"
    })
    }, [scrollPosition]);

    useLayoutEffect(() => {
        const handleScroll = () => {
            const containerWidth = containerRef.current.offsetWidth;
            const scrollLeft = containerRef.current.scrollLeft;
            const totalScrollableWidth = containerRef.current.scrollWidth - containerWidth;
            const progressPercentage = (scrollLeft / totalScrollableWidth) * 100;
            setScrollProgress(progressPercentage);
          };
          containerRef.current.addEventListener('scroll', handleScroll);
          return () => {
            containerRef.current.removeEventListener('scroll', handleScroll);
          };
      
    },[])
      
     useEffect(() => {
        if (data.length !== 0) {
        navigate("/essentials/essentialSection/1",{state:{data:data}})
        }
     },[data])
        
    return(
        <section className={`w-full lg:mt-9 h-auto min-h-[35vh] mb-10 lg:min-h-[80vh] flex flex-col lg:gap-4 gap-3 justify-center relative ${top}  ${stop}`}>
            <div onClick={handleScrollLeft} className="bg-white w-[40px] h-[40px] rounded-full shadow-xl absolute left-2 lg:left-8 z-30  top-[45%] grid  place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 40 40">
                    <path fill="#000" d="M24.96 32.601L12.371 19.997l.088-.088l12.507-12.52a.66.66 0 0 0-.01-.921a.65.65 0 0 0-.458-.182a.65.65 0 0 0-.465.186l-13.004 13.02a.63.63 0 0 0-.176.49a.66.66 0 0 0 .18.523l13.014 13.031c.244.23.659.233.921-.02a.66.66 0 0 0-.008-.915"></path>
                </svg>
            </div>
            <div  className={` w-[90%]  mx-auto  flex flex-col gap-4  h-[95%] no-scrollbar no-scrollbar::webkit-scrollbar`} style={{ overflowX: "scroll"}}>
                
                <motion.div 
                    id="slide"
                    ref={containerRef}
                    transition={{ duration: 0.3, type:"tween", ease: "linear" }}
                    className=" no-scrollbar  w-auto no-scrollbar::webkit-scrollbar flex"
                    style={{overflowX:"scroll",overflowY:"hidden"}}
                    
                    >  
                    <motion.div
                        ref={sliderRef}
                        className="overflow-x  flex gap-4 w-auto   justify-center"
                        >
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
                                    count={item.count}
                                    width={width}
                                    height={height}
                                    imgHeight={imgHeight}
                                    imgWidth={imgWidth}
                                    swidth={swidth}
                                    sheight={sheight}
                                    essentials={essentials}
                                    simgHeight={simgHeight}
                                    scrollLeft={scrollLeft}
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
                                    count={item.count}
                                    size={item.size}
                                    width={width}
                                    height={height}
                                    imgHeight={imgHeight}
                                    imgWidth={imgWidth}
                                    swidth={swidth}
                                    sheight={sheight}
                                    essentials={essentials}
                                    bottom="bottom-0"
                                    simgHeight={simgHeight}
                                    scrollLeft={scrollLeft}
                                />
                            ))}
                    </motion.div>
                </motion.div>
              
            </div>
            <div onClick={handleScrollRight} className=" bg-white w-[40px] h-[40px] rounded-full shadow-md absolute right-2 lg:right-8 z-10  top-[45%] grid  place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                    <g fill="#000">
                        <path d="M7.116 4.32a.5.5 0 1 1 .768-.64l5 6a.5.5 0 0 1-.768.64z"></path>
                        <path d="M7.884 16.32a.5.5 0 0 1-.768-.64l5-6a.5.5 0 1 1 .768.64z"></path>
                    </g>
                </svg>
            </div>
            <div className="flex flex-col gap-3  h-auto">
                <div class=" bg-gray-200 grid gap-1  h-1 rounded-full w-1/2 mx-auto">
                    <motion.div 
                        className="bg-[#333] h-1 rounded "
                        style={{ width: `${scrollProgress}%` }}
                        >
                    </motion.div>
                
                </div>
                <button  onClick={handleNavigate}>
                            View All
                </button>
            </div>
            
         
        </section>
    )
}

export default SlideComponent