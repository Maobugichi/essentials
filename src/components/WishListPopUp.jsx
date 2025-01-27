import {motion, AnimatePresence } from "motion/react"
import { useEffect , useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import localForage from 'localforage';
const PopUp = ({pop,setShowPop,src,name,color,price}) => {
   const navigate = useNavigate()
   const [wishItems,setWishItems] = useState([])
   localForage.config({
    driver: localForage.INDEXEDDB,
    name: 'myApp', 
    version: 1.0, 
  });

  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 86400 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === name) {
        return value;
      }
    }
    return null;
  };

  useEffect(() => {
      const storedWishList = getCookie('wishlist');
      if (storedWishList) {
        setWishItems(JSON.parse(storedWishList));
      }
   
  }, []);

  
  useEffect(() => {
    if (wishItems.length > 0) {
      setCookie('wishlist', JSON.stringify(wishItems), 30);
    }
  }, [wishItems]);

  
  
const handleAddToWish = async () => {
    const newWishItem = { src, name, color, price };
    setWishItems((prevWishItems) => [...prevWishItems, newWishItem]);
    setCookie("wishlist", JSON.stringify(wishItems), 30);
    const storedWishList = getCookie('wishlist');
    if (storedWishList) {
      navigate("/wishlists/1");
    }
  };

    return(
       <AnimatePresence>
         {pop ? 
              <motion.div
                initial={{x:0}}
                animate={{x:-50}}
                whileInView={{x:0}}
                exit={{x:-500}}
                className="w-[300px]  fixed top-16 bg-white shadow-md rounded-md h-[130px] z-40 p-4"
            >
               
                <button className="absolute z-50 right-5 top-2" onClick={() => setShowPop(!pop)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"></path>
                    </svg>
                </button>
               
                    <div onClick={handleAddToWish} className="flex items-center w-[90%] mx-auto h-full ">
                        <img className="w-20 h-26" src={src} alt={name} />
                        <h4 className="lg:text-md text-sm">{name} {color} <span className="lg:text-[12px] text-sm">has been added to wishlist successfully</span></h4>
                    </div>
             
            </motion.div>
           
          : null }
       </AnimatePresence>
        
    )
}

export default PopUp