import addToCartIcon from "../assets/addTocart.svg"
import {useNavigate} from "react-router-dom"

const Variety = ({src,width,imgWidth,height,name,price,onSale,color,size,imgHeight,recommendations,swidth,sheight ,essentials, cartIconWidth="w-6", cartIconHeight="h-6", cartIcon="w-3" , bottom="bottom-[40px]",span="w-[40%]",margin, simgHeight}) => {
    const navigate = useNavigate()
    const handleNavigate = (e) => {
        navigate("/extraDetails/1",{state:{src:src,name:name,color:color,size:size,price:price,recommendations:recommendations,essentials:essentials}})
    }
    return(
            <div className={`flex flex-col lg:gap-7   ${width} ${height} ${swidth} ${sheight} relative z-10 ${margin}`}>
               {onSale ? <span className="bg-red-400 lg:text-sm text-[12px] p-2 w-auto  lg:min-w-[25%]  absolute z-30 text-white">On Sale</span> : null}
                <div className="relative top-2   h-[70%] grid place-items-center lg:w-full w-[95%] mx-auto">
                    <div  className={`${imgHeight} ${simgHeight}  lg:${imgWidth} flex items-center w-[90%]`}>
                     <img onClick={handleNavigate} className=" lg:w-[95%]  h-full"   src={src} alt={name} />
                    </div>
                    <div className={`absolute lg:bottom-[-10px] ${bottom} right-2 lg:right-0 bg-white rounded-full lg:w-9 lg:h-9 ${cartIconWidth} ${cartIconHeight} grid place-items-center shadow-md`}>
                      <img className={`lg:w-4 ${cartIcon}`} src={addToCartIcon} alt="add to cart icon" />
                    </div>
                </div>
                <div className="w-[85%] mx-auto h-[200px] flex  flex-col justify-center ">
                    <p className="text-[12px] w-[80%] lg:text-sm truncate">{name}</p>
                    <p className="text-[12px] text-red-500 lg:text-sm">{price} <span className="text-black line-through">₦240,000</span></p>
                </div>
            </div>
    )
}

export default Variety