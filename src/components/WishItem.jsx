import { useState } from "react";

const WishItem = ({src,name,price,color,handleRemoveItem}) => {
    
return(
        <div className="h-auto min-h-[400px] relative grid place-content-center  lg:w-[22%] w-[90%]">
            <button className="absolute z-50 right-2 top-3" onClick={handleRemoveItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"></path>
                </svg>
            </button>
               
            <div className="h-[250px]   grid place-content-center">
               <img className="w-full h-[250px]"  src={src} alt={name} />
            </div>
           
            <div className="w-full overflow-ellipsis grid gap-1">
                <p className="font-semibold text-md">{name}</p>
                <p className="text-sm">{color}</p>
                <p className="font-bold text-lg">₦{price}</p>
                <button className="lg:h-7 h-10 w-[90%]  rounded-md  bg-black text-white text-sm">ADD TO CART</button>
            </div>
           
        </div>
  

)

}

export default WishItem