import localForage from 'localforage';
import { useEffect , useState } from 'react';
const Quantity = ({quantity,setQuantity}) => {
    const [cartQuantity, setCartQuantity] = useState([])
    function increase() {
        setQuantity(quantity + 1)
    }

    localForage.config({
        driver: localForage.INDEXEDDB,
        name: 'myApp', 
        version: 1.0, 
      });

     useEffect(() => {
      
     },[quantity])

      useEffect(() => {
        const loadWishlist = async () => {
            const storedWishlist = await localForage.getItem('cartlist');
            if (storedWishlist) {
              setCartQuantity(storedWishlist);
              console.log(storedWishlist)
            } 
          };
          loadWishlist();
      }, []);
    
    function decrease() {
        if (quantity == 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }
       
    }

    console.log(cartQuantity)

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