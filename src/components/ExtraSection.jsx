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
import ItemAlreadyAdded from "./ItemAlreadyAdded"
import SearchComponent from "./SearchComponent"
const ExtraSection = () => {
  const location = useLocation()
  const {src,name,color,size,price,essentials, count} = location.state
  const [showCart,setShowCart] =useState(false)
  const [quantity,setQuantity] = useState(count)
  const [pop , setShowPop] = useState(false)
  const [openNav,setOpenNav] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const [alreadyAdded,setAlreadyAdded] = useState({add:false,item:""})
  const [showComponent, setShowComponent] = useState(false)
  
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [essentials,name,src]);
    return(
        <div className="h-auto">
            <ItemAlreadyAdded
              alreadyAdded={alreadyAdded}
              setAlreadyAdded={setAlreadyAdded}
            />

            <SearchComponent
              showComponent={showComponent}
              setShowComponent={setShowComponent}
            />
            
            <PopUp
            pop={pop}
            setShowPop={setShowPop}
            src={src}
            name={name}
            color={color}
            size={size}
            price={price}
            cartItems={cartItems}
            setCartItems={setCartItems}
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
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
            <Header
              cartColor="bg-black"
              cartText="text-white"
              iconColor="#000"
              color="bg-[#f7f7f7]"
              openNav={openNav}
              setOpenNav={setOpenNav}
              setShowCart={setShowCart}
              showCart={showCart}
              setShowComponent={setShowComponent}
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
              essentials={essentials}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setAlreadyAdded={setAlreadyAdded}
            />
            
            <SlideComponent
              top="top-[0px]"
              recommendations={essentials.slice(6,12)}
              essentials={essentials}
              simgHeight="h-[200px]"
              width="lg:w-[280px]"
              height="lg:h-[400px]"
              imgHeight="lg:h-[330px]"
              imgWidth="w-[95%]"
              swidth="w-[250px]"
              sheight="h-[250px]"
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