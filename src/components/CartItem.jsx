import Quantity from "./Quantity";
import deleteIcon from "../assets/delete.svg"

const CartItem = ({id,src,name,price,color,quantity,setQuantity,handleRemoveItem}) => {
    return(
        <div className="flex  w-[85%] mx-auto items-center">
            <div className="flex items-center gap-4">
                <img id={src} className="w-16 ww h-14" src={src} alt="" />
                <div className="grid gap-1">
                    <span className="text-[11px]">Ashluxe</span>
                    <p className="text-[14px] w-[60%]">{name}</p>
                    <span className="text-[11px]">M / {color} / AW24</span>
                    <div className="flex gap-2 items-center">
                        <Quantity
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                       
                         <img className="w-3 h-3"  onClick={handleRemoveItem} src={deleteIcon} alt="" />
                    </div>
                
                </div>
            </div>
            <div>
                <p>₦{price}</p>
            </div>
        </div>
    )
}

export default CartItem