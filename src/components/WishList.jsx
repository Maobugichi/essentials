import { useAuth0 } from "@auth0/auth0-react";
import Header from "./Header";
import NewsLetterComponent from "./NewsLetterComponent";
import Footer from "./Footer";
import WishItem from "./WishItem";
import { useLocation } from "react-router-dom";
import localForage from 'localforage';
import { useState , useEffect } from "react"
import SideNav from "./SideNav";

const WishList = () => {
    const location = useLocation();
    const [updatedWishlist, setUpdatedWishlist] = useState([]);
    const {user, isAuthenticated} = useAuth0();
    const [openNav,setOpenNav] = useState(false);
    const [showCart,setShowCart] =useState(false);
    localForage.config({
      driver: localForage.INDEXEDDB,
      name: 'myApp',
      version: 1.0,
      //storeName: 'myStore',
    });
    useEffect(() => {
      const loadWishlist = async () => {
        const storedWishlist = await localForage.getItem('wishlist');
        if (storedWishlist) {
          setUpdatedWishlist(storedWishlist);
        } 
      };
      loadWishlist();
    }, []);
  
  
    const handleRemoveItem = async (itemToRemove) => {
      const updatedList = updatedWishlist.filter((item) => {
        return item.src !== itemToRemove.src
      });
      setUpdatedWishlist(updatedList);
     await localForage.setItem('wishlist', updatedList);


    };
    return(
        <div >
          <SideNav
            openNav={openNav}
            setOpenNav={setOpenNav}
           />
          <Header
           text= "black"
           color="bg-[#f7f7f7]"
           iconColor="#000"
           cartColor="bg-black"
           cartText="text-white"
           openNav={openNav}
           setOpenNav={setOpenNav}
           setShowCart={setShowCart}
           showCart={showCart}
           />
           <section className=" relative lg:top-[-60px] top-5">
            <h3 className="text-center text-2xl">WishList</h3>
            <div className=" flex mt-5 h-12 lg:w-1/2 w-[90%] mx-auto justify-between items-center">
                <h4 className="text-xl ">My Wishlist</h4>
                <p><i className="fa-solid fa-user fa-lg" style={{color: "#161718"}}></i>  {isAuthenticated ? user?.email : "guest"}</p>

            </div>
            <div className="border-b-2 border-t border-black  lg:w-1/2 w-[90%] mx-auto h-20 flex items-center justify-end">
                <button className=" h-11 border border-black w-11 grid place-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                        <path fill="#000" d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22"></path>
                    </svg>
                </button>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                  <path fill="#000" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4m0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402"></path>
                </svg>
                </button>
            </div>

            <div className="flex flex-wrap  justify-center gap-8  h-auto min-h-[20vh]  lg:w-[60%]  w-[90%] mx-auto">
           
              {
                updatedWishlist.map(item => {
                    return(
                        <WishItem
                          src={item.src}
                          name={item.name}
                          price={item.price}
                          color={item.color}
                          handleRemoveItem={() => handleRemoveItem(item)}
                        />
                    )
                })
              }
           </div>
           </section>
           <NewsLetterComponent
           
           />
           <Footer/>
        </div>
    )
}

export default WishList