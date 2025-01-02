import { useEffect } from "react"

const Quantity = ({quantity,setQuantity}) => {
    useEffect(() => {
        console.log(quantity)
    },[quantity])
    function increase() {
        setQuantity(quantity + 1)
    }

    function decrease() {
        if (quantity == 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }
       
    }

    return(
        <div className="border flex w-20 justify-around text-[10px] h-8 items-center bg-white">
                             <button onClick={decrease}>
                               <span className="font-black" aria-hidden="true">−</span>
                             </button>
                            
                             <p>{quantity}</p>
                             <button onClick={increase}>
                               <span className="font-bold" aria-hidden="true">+</span>
                             </button>
                            
            </div>
    )
}


export default Quantity