import Option from "./Option";
import { useState , useEffect } from "react"
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import Quantity from "./Quantity";
import localForage from 'localforage';
const ExtraDetails = ({quantity,setQuantity,src,setShowCart,name,color,size,price,essentials,pop,setShowPop}) => {
    const [show,setShow] = useState(false)
    const [show2, setShow2] = useState(false);
    const [isRotated, setIsRotated] = useState(false);
    const [isRotated2, setIsRotated2] = useState(false);
    const [cartItems, setCartItems] = useState([])
    localForage.config({
          driver: localForage.INDEXEDDB,
          name: 'myApp', 
          version: 1.0, 
    });
    const handleShow1 = () => {
        setShow(!show);
        setIsRotated(!isRotated);
    };
    const handleShow2 = () => {
        setShow2(!show2);
        setIsRotated2(!isRotated2);
    };
   
    useEffect(() => {
        const loadWishlist = async () => {
            const storedWishlist = await localForage.getItem('cartlist');
            if (storedWishlist) {
              setCartItems(storedWishlist);
            } 
          };
          loadWishlist();
      }, []);
    
    useEffect(() => {
    if (cartItems.length > 0) {
        localForage.setItem('cartlist', cartItems);
    }
    }, [cartItems]);

   
      
      
    const handleAddToCart = async () => {
        const newWishItem = { src,name,color,price ,quantity};
        const storedWishlist = await localForage.getItem('cartlist');
        if (storedWishlist) {
            const heckIt = storedWishlist.some(item => item.src === newWishItem.src);
            console.log(heckIt)
            if (!heckIt) {
                setCartItems((prevWishItems) => [...prevWishItems, newWishItem]);
                setShowCart(true) 
            }
          await localForage.setItem('cartlist', cartItems);
        }
    };

    const checkWishList = async () => {
        console.log("hello")
        const newWishItem = {src,name,color,price ,quantity};
        setShowPop(true)

        const storedWishList = await localForage.getItem('wishlist');
        console.log(storedWishList)
        if (storedWishList) {
            const heckIt = storedWishList.some(item => item.src === newWishItem.src);
            console.log(heckIt)
            heckIt ? null : setShowPop(true)
        }
    }
      
     
    return(
    <section className="h-auto  min-h-[130vh] bg-purple-300 w-[95%] mx-auto">
            <div className="h-full  flex lg:flex-row flex-col w-full gap-4 justify-center">
                <div className="w-[80px]   h-[30%]  lg:flex lg:flex-col lg:gap-2 hidden">
                    <div className="rounded-md h-1/2 border border-black grid place-content-center">
                      <img className="w-16 h-20 rounded-sm" src={src} alt={name} />
                    </div>
                   
                    <div className="rounded-md h-1/2 border border-black grid place-content-center">
                      <img className="w-16 h-20 rounded-sm" src={src} alt={name} />
                    </div>
                </div>
                
                <div className="lg:w-[40%] w-full flex items-center lg:items-start justify-center h-1/2 lg:mt-5">   
                  <img className="w-[90%] lg:h-[550px]"  src={src} alt={name} />
                </div>
               
                <div className="lg:w-[35%] w-[95%] mx-auto grid gap-4">
                    <div className="border-b pb-4">
                        <span>Kalakuta</span>
                        <h3 className="text-3xl">{name}</h3>
                        <p>{price}</p>
                        <span className="text-[10px]">Tax included Shipping calculated at checkout</span>
                    </div>
                    

                    <div className=" flex flex-col gap-5 items-center">
                        <div className="grid gap-3 w-full">
                            <label htmlFor="Color">Color</label>
                            <select className="w-full h-12 border pl-5 " name="color" id="cars">
                                <option value="volvo">{color}</option>
                            </select>
                        </div>
                        <div className="grid gap-3 w-full">
                            <label htmlFor="size">Size</label>
                            <select className="w-full h-12 border pl-5" name="cars" id="cars">
                                {
                                    size.map(item => <Option sizeOption={item}/>
)
                                }
                            </select>
                        </div>
                        

                        <div className="w-full">
                            <p>Quantity</p>
                            <Quantity
                             quantity={quantity}
                             setQuantity={setQuantity}
                            />
                            
                        </div>

                        <div className="w-full flex flex-col gap-4">
                            <button onClick={handleAddToCart} className="hover:bg-black hover:text-white transition-colors duration-500 ease-out bg-transparent border border-black text-black h-[50px] w-full">Add to cart</button>
                            <button className="bg-black text-white h-[50px] w-full">Buy it now</button>
                        </div>

                        <div>
                            <button onClick={checkWishList} className="flex items-center text-sm"><svg className="w-5" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	                         <path fill="currentColor" d="M4.24 12.25a4.2 4.2 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.24 4.24 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.22 5.22 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z"></path>
                             </svg>
                             Add to wishlist
                            </button>
                            <div className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 72 72">
                                    <path fill="#61b2e4" d="M57 12H15a4 4 0 0 0-4 4v42a4 4 0 0 0 4 4h42a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4"></path>
                                    <path fill="none" stroke="#fff" strokeMiterlimit={10} strokeWidth={2} d="M36.935 62.009h9.5"></path>
                                    <path fill="#fff" d="M48.5 26.844h4.688v-7.031c-3.126 0-15.626-3.125-15.626 10.156v4.687h-6.25v7.813h6.25v18.564l7.813-.014V42.47h7.031l.781-7.813h-7.812V29.97c0-3.125 2.344-3.125 3.125-3.125"></path>
                                    <g fill="none" stroke="#000" strokeWidth={2}>
                                        <path strokeMiterlimit={10} d="M45.619 62h12.155A3.226 3.226 0 0 0 61 58.774V15.226A3.226 3.226 0 0 0 57.774 12H14.226A3.226 3.226 0 0 0 11 15.226v43.548A3.226 3.226 0 0 0 14.226 62h23.476"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M45.618 62V42.208h7.125l.792-7.917h-7.917v-4.75c0-3.167 2.375-3.167 3.167-3.167h4.75V19.25c-3.2-.324-15.834-3.166-15.834 10.292v4.75h-6.333v7.917h6.333V62"></path>
                                    </g>
                                </svg>
                                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 128 128">
                                    <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256">
                                    <g fill="none">
                                        <rect width={256} height={256} fill="#f4f2ed" rx={60}></rect>
                                        <path fill="#4285f4" d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636"></path>
                                        <path fill="#34a853" d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091"></path>
                                        <path fill="#fbbc04" d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363"></path>
                                        <path fill="#ea4335" d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675"></path>
                                        <path fill="#c5221f" d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <AnimatePresence>
                        <div className="w-full">
                            <div className="border-t p-4 h-auto">
                                <div id="1" onClick={handleShow1} className="flex justify-between">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-4" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none" style={{color: "#212121"}}><path d="M12,4.5h5a6.5,6.5,0,0,1,0,13H.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><polyline points="5.5 22.497 0.5 17.497 5.5 12.497" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>
                                        <h3>Return Policy</h3> 
                                    </div>
                                    <motion.svg
                                     initial={{ rotate: 0 }}
                                     animate={isRotated ? { rotate: 135 } : { rotate: 0 }}
                                     transition={{ duration: 1 }}
                                     className="w-5" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 5.5a.5.5 0 0 1 .5.5v5.5H18a.5.5 0 0 1 0 1h-5.5V18a.5.5 0 0 1-1 0v-5.5H6a.5.5 0 0 1 0-1h5.5V6a.5.5 0 0 1 .5-.5"></path>
                                    </motion.svg>

                                </div> 
                                <motion.p
                                 initial={{opacity:0}}
                                 whileInView={{opacity:1}}
                                 exit={{opacity:0}}
                                 className={show  ? "text-[12px] block" : "text-0 hidden"}>Click here to learn more about our return policy.</motion.p>
                            </div>
                            <div className="border-t p-4 h-auto">
                                <div onClick={handleShow2} id="2" className="flex justify-between">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-4" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none" style={{color: "#212121"}}><g><path d="M.5,23.43c2.45.52,4.5-2,4.5-2a4.28,4.28,0,0,0,3.49,2,4.11,4.11,0,0,0,3.51-2,4.08,4.08,0,0,0,3.49,2,4.32,4.32,0,0,0,3.51-2s2.05,2.52,4.5,2" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><line x1="12.49" y1="18.5" x2="12.49" y2="9.39" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></line><polyline points="22.99 11.39 12.49 9.39 1.99 11.39" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></polyline><line x1="21.98" y1="11.2" x2="19.76" y2="20.07" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></line><line x1="3" y1="11.2" x2="5.01" y2="19.33" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></line><path d="M18.49,10.54v-3a2,2,0,0,0-2-2h-8a2,2,0,0,0-2,2v3" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><line x1="14.99" y1="7.5" x2="9.99" y2="7.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></line><path d="M14.49,5.5V1A.5.5,0,0,0,14,.5H11a.5.5,0,0,0-.5.5V5.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><line x1="14.49" y1="3.5" x2="10.49" y2="3.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></line><polyline points="21.18 14.47 12.49 12.39 3.81 14.45" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></polyline></g></svg>
                                        <h3>Delivery Time</h3> 
                                    </div>
                                   
                                    <motion.svg
                                     initial={{ rotate: 0 }}
                                     animate={isRotated2 ? { rotate: 135 } : { rotate: 0 }}
                                     transition={{ duration: 1 }}
                                     className="w-5" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 5.5a.5.5 0 0 1 .5.5v5.5H18a.5.5 0 0 1 0 1h-5.5V18a.5.5 0 0 1-1 0v-5.5H6a.5.5 0 0 1 0-1h5.5V6a.5.5 0 0 1 .5-.5"></path>
                                    </motion.svg>

                                </div> 
                                <motion.p
                                  initial={{opacity:0}}
                                  whileInView={{opacity:1}}
                                  exit={{opacity:0}}
                                 className={show2 ? "text-[12px] block" : "text-0 hidden"}>Deliveries can take 3-14 days. Your confirmation email will provide delivery details. Click here to learn more about our delivery.</motion.p>
                            </div>
                        </div>
                        </AnimatePresence>
                        
                    </div>
                </div>
            </div>
    </section>
)
}


export default ExtraDetails