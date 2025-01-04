import Quantity from "./Quantity";
import deleteIcon from "../assets/delete.svg"
import localForage from 'localforage';
import { useEffect , useState } from 'react';

const CartItem = ({src,name,price,color,quantity,setQuantity,handleRemoveItem}) => {
    const [cartQuantity, setCartQuantity] = useState()
    localForage.config({
        driver: localForage.INDEXEDDB,
        name: 'myApp', 
        version: 1.0, 
    });

    function increases(e) {
        const loadWishlist = async () => {
            const storedWishlist = await localForage.getItem('cartlist');
            if (storedWishlist) {
               console.log(storedWishlist)
            } 
        };
            loadWishlist();
    }
      
    return(
        <div className="flex  w-[85%] mx-auto items-center">
            <div className="flex items-center gap-4">
                <img id={src} className="w-16 ww h-14" src={src} alt="" />
                <div className="grid gap-1">
                    <span className="text-[11px]">Ashluxe</span>
                    <p className="text-[14px] w-[60%]">{name}</p>
                    <span className="text-[11px]">M / {color} / AW24</span>
                    <div id={name} className="flex gap-2 items-center">
                        <Quantity
                            quantity={quantity}
                            setQuantity={setQuantity}
                            increases={increases}
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