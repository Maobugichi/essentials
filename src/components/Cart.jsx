
import { useEffect,useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import QuickShopSection from "./QuickShopSection";
import localForage from 'localforage';
import CartItem from "./CartItem";

const Cart = ({setQuantity,src,name,color,price,showCart,setShowCart}) => {
    const [show,setShow] = useState(false)
    const [isRotated, setIsRotated] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [animateX,setAnimateX] = useState()
    const handleShow1 = () => {
        setShow(!show);
        setIsRotated(!isRotated);
    };
    localForage.config({
        driver: localForage.INDEXEDDB,
        name: 'myApp', 
        version: 1.0, 
      });
    const screenWidth = window.innerWidth;
    useEffect(() => {
        if (screenWidth < 500) { 
            setAnimateX({
                x:10,
                inView:20
            })
        } else {
           setAnimateX( {
            x:800,
            inView:350
        })
        }
       
    },[screenWidth])
    useEffect(() => {
        if (showCart) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        }, [showCart]);
        
    useEffect(() => {
        const loadWishlist = async () => {
            const storedWishlist = await localForage.getItem('cartlist');
            if (storedWishlist) {
                setCartItems(storedWishlist);
            } 
        };
            loadWishlist();
    }, [cartItems]);

    
    const handleRemoveItem = async (e) => {
        const updatedList = cartItems.filter((item) => {
            return item.src !== e.target.parentNode.parentNode.parentNode.childNodes[0].id
        });
        setCartItems(updatedList);
        await localForage.setItem('cartlist', updatedList);
    };
    return(
        <AnimatePresence>
           {showCart ? <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            exit={{opacity:0}}
            className={`${showCart ? "block" : "hidden"}  bg-opacity-50 fixed bg-gray-500 h-full z-50 w-full overlay-div top-0`}>
                <motion.div 
                initial={{x:animateX.x}}
                animate={{x:350}}
                whileInView={{x:animateX.x}}
                exit={{x:-500}}
                className="lg:h-[95vh] h-[80%] bg-white lg:w-[36%] w-[95%] absolute  rounded-xl lg:top-[10px] top-[10%] z-[2500px] ">
                    <div className=" h-full flex flex-col relative z-[2000px]  gap-3">
                        <div className="flex justify-between w-[90%] mt-5 mx-auto ">
                            <p className="text-xl">Shopping Cart</p>
                            <svg onClick={() => setShowCart(false)} className="w-5" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 2048 2048"><path fill="currentColor" d="m1115 1024l690 691l-90 90l-691-690l-691 690l-90-90l690-691l-690-691l90-90l691 690l691-690l90 90z"></path></svg>
                        </div>
                        <div className="h-[450px] overflow-y-scroll w-full  flex flex-col gap-7 ">
                             {
                                cartItems.map((item,i) => {
                                    
                                    return(
                                        <CartItem
                                          id={i}
                                          src={item.src}
                                          name={item.name}
                                          price={item.price}
                                          quantity={item.quantity}
                                          setQuantity={setQuantity}
                                          
                                          handleRemoveItem={handleRemoveItem}
                                        />
                                    )
                                })
                             }
                            <QuickShopSection
                             setShowCart={setShowCart}
                            />
                            <div className="h-auto min-h-300px w-[85%] mx-auto grid gap-3">
                                <div className="border-t  h-auto min-h-[20px] ">
                                <div id="1" onClick={handleShow1} className="flex w-[85%] mx-auto justify-between">
                                    <div className="flex items-center gap-3">
                                        <p className="text-[12px]">order notes</p> 
                                    </div>
                                    <motion.svg
                                    initial={{ rotate: 0 }}
                                    animate={isRotated ? { rotate: 135 } : { rotate: 0 }}
                                    transition={{ duration: 1 }}
                                    className="w-5" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 5.5a.5.5 0 0 1 .5.5v5.5H18a.5.5 0 0 1 0 1h-5.5V18a.5.5 0 0 1-1 0v-5.5H6a.5.5 0 0 1 0-1h5.5V6a.5.5 0 0 1 .5-.5"></path>
                                    </motion.svg>

                                </div> 
                                <motion.textarea
                                rows="5"
                                cols="60"
                                initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                exit={{opacity:0}}
                                className={show  ? "text-[12px] block border" : "text-0 hidden"}/>
                            
                                </div>
                                <div className=" w-full  grid gap-2 border-t">
                                    <div className="flex justify-between">
                                        <p>Subtotal</p>
                                        <span>₦1,344,000</span>
                                    </div>
                                    <p className="text-[12px]">Tax included. Shipping calculated at checkout.</p>
                                    <div className="flex gap-3 w-full">
                                        <button className="bg-transparent text-black border border-black h-[45px] w-1/2">
                                            View Cart
                                        </button>
                                        <button className="bg-black text-white h-[45px] w-1/2 flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                            <path fill="#fff" d="M6.616 21q-.672 0-1.144-.472T5 19.385v-8.77q0-.67.472-1.143Q5.944 9 6.616 9H8V7q0-1.671 1.165-2.835Q10.329 3 12 3t2.836 1.165T16 7v2h1.385q.67 0 1.143.472q.472.472.472 1.144v8.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h10.769q.269 0 .442-.173t.173-.442v-8.77q0-.269-.173-.442T17.385 10H6.615q-.269 0-.442.173T6 10.616v8.769q0 .269.173.442t.443.173M12 16.5q.633 0 1.066-.434q.434-.433.434-1.066t-.434-1.066T12 13.5t-1.066.434Q10.5 14.367 10.5 15t.434 1.066q.433.434 1.066.434M9 9h6V7q0-1.25-.875-2.125T12 4t-2.125.875T9 7zM6 20V10z"></path>
                                        </svg>
                                            Check Out
                                        </button>
                                    </div>
                                </div>

                                <button className="flex items-center text-sm  ml-10"><svg className="w-5" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4.24 12.25a4.2 4.2 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.24 4.24 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.22 5.22 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z"></path>
                                </svg>
                                  Add to wishlist
                                </button>
                            </div>
                           
                        </div>
                      
                    </div>
                </motion.div>
            </motion.div> : "hello" }
        </AnimatePresence>
     
    )
}
export default Cart