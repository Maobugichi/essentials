import Header from "./Header"
import ExtraDetails from "./ExtraDetails"
import SlideComponent from "./SlideComponent"
import { useEffect,useState } from "react"
import NewsLetterComponent from "./NewsLetterComponent"
import Footer from "./Footer"
import SideNav from "./SideNav"
import { useLocation } from "react-router-dom"
import Cart from "./Cart"
import PopUp from "./WishListPopUp"
const ExtraSection = () => {
    const [showCart,setShowCart] =useState(false)
    const [quantity,setQuantity] = useState(1)
    const [pop , setShowPop] = useState(false)
    const [openNav,setOpenNav] = useState(false);
    const location = useLocation()
    const {src,name,color,size,price,recommendations,essentials} = location.state
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

    return(
        <div>
         <PopUp
          pop={pop}
          setShowPop={setShowPop}
          src={src}
          name={name}
          color={color}
          size={size}
          price={price}
          />

           <SideNav
            openNav={openNav}
            setOpenNav={setOpenNav}
           />
         <Cart
           showCart={showCart}
           src={src}
           quantity={quantity}
           setQuantity={setQuantity}
           setShowCart={setShowCart}
           name={name}
           color={color}
           price={price}
          />
          <Header
           cartColor="bg-black"
           cartText="text-white"
           iconColor="#000"
           openNav={openNav}
           setOpenNav={setOpenNav}
           setShowCart={setShowCart}
           showCart={showCart}
          />
         
          <ExtraDetails
           quantity={quantity}
           setQuantity={setQuantity}
           setShowCart={setShowCart}
           showCart={showCart}
           src={src}
           name={name}
           color={color}
           size={size}
           price={price}
           pop={pop}
           setShowPop={setShowPop}
          />
          
          <SlideComponent
            top="top-[0px]"
            recommendations={essentials.slice(6,12)}
            essentials={essentials}
            simgHeight="h-[118px]"
          />
          <NewsLetterComponent
             top="top-[0px]"
          />
          <Footer
            top="top-[0px]"
          />
        </div>
    )
}

export default ExtraSection