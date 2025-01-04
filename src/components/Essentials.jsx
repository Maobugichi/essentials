import { useState , useEffect} from "react"
import Variety from "./Variety"
import Header from "./Header"
import { useLocation } from "react-router-dom"
import Cart from "./Cart"
import SideNav from "./SideNav"
import Footer from "./Footer"
import NewsLetterComponent from "./NewsLetterComponent"
import Filter from "./Filter"

const Essentials = () => {
    const [isOpen,setOpen] = useState(false); 
    const [page,setPage] = useState(1); 
    const [pages1,setPage1] = useState([]); 
    const [isStuck, setIsStuck] = useState(false);
    const [openNav,setOpenNav] = useState(false);
    const [showCart,setShowCart] =useState(false);
    function open() {
      setOpen(true)
    } 
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [page]);
  
    function nextPage() {
      if (page < 3) {
        setPage(page + 1);
      }
    }

    function previousPage() {
      if (page > 1) {
        setPage(page - 1);
      }
  
    }
    const location = useLocation()
    const data = location.state.data

    useEffect(() => {
      setPage1(data)
    },[data])
    
    return(
        <div className="h-auto min-h-[250vh]  lg:min-h-[355vh]  flex flex-col gap-10 ">
          <Filter
           isOpen={isOpen}
           setOpen={setOpen}
           data={data}
           setPage1={setPage1}
          />

          <Cart
           showCart={showCart}
           setShowCart={setShowCart}/>

           <SideNav
            openNav={openNav}
            setOpenNav={setOpenNav}
           />
          <Header
           isStuck={isStuck}
           setIsStuck={setIsStuck}
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
          <section className="relative top-[-20px]  w-[95%] mx-auto h-auto min-[150vh]  grid gap-5">
            <div onClick={open}  className="flex gap-1  h-12 items-center relative z-[30]">
              <svg className="w-6 pointer-events-all" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" d="M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0ZM4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0Zm11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2Z" fill="currentColor"></path>
              </svg>
              <p className="text-[13px]">Filter and sort</p>
            </div>
            <div className="flex  flex-wrap w-full mx-auto lg:justify-between  justify-center h-auto">
            {
              page === 1 && (
                pages1.slice(0,6).map(item => {
                  return(
                    <Variety
                      recommendations={pages1.slice(5,9)}
                      name={item.name}
                      price={item.price}
                      bestSelling={item.bestselling}
                      onSale={item.onSale}
                      date={item.date}
                      src={item.src}
                      color={item.color}
                      count={item.count}
                      size={item.size}
                      width="lg:w-[400px]"
                      height="lg:h-[450px]"
                      imgHeight="lg:h-[350px]"
                      imgWidth="w-[95%]"
                      essentials={data}
                      swidth="w-1/2"
                      sheight="h-[250px]"
                      cartIconWidth="w-8"
                      cartIconHeight="h-8"
                      cartIcon="w-4"
                      bottom="bottom-0"
                      margin="mt-4"
                      simgHeight="h-[200px]"
                    />
                  )
                })
              )
              
            }

          {
              page === 2 && (
                pages1.slice(6,12).map(item => {
                  return(
                    <Variety
                      recommendations={pages1.slice(5,9)}
                      name={item.name}
                      price={item.price}
                      bestSelling={item.bestselling}
                      date={item.date}
                      src={item.src}
                      onSale={item.onSale}
                      color={item.color}
                      size={item.size}
                      width="lg:w-[400px]"
                      height="lg:h-[450px]"
                      imgHeight="lg:h-[350px]"
                      imgWidth="w-[95%]"
                      essentials={data}
                      swidth="w-1/2"
                      sheight="h-[250px]"
                      cartIconWidth="w-8"
                      cartIconHeight="h-8"
                      cartIcon="w-4"
                      bottom="bottom-0"
                       margin="mt-4"
                      simgHeight="h-[200px]"
                    />
                  )
                })
              )
              
            }

            {
              page === 3 && (
                pages1.slice(12,data.length).map(item => {
                  return(
                    <Variety
                      recommendations={pages1.slice(5,9)}
                      src={item.src}
                      name={item.name}
                      price={item.price}
                      bestSelling={item.bestselling}
                      onSale={item.onSale}
                      date={item.date}
                      color={item.color}
                      size={item.size}
                      width="lg:w-[400px]"
                      height="lg:h-[450px]"
                      imgHeight="lg:h-[350px]"
                      imgWidth="w-[95%]"
                      essentials={data}
                      swidth="w-1/2"
                      sheight="h-[250px]"
                      cartIconWidth="w-8"
                      cartIconHeight="h-8"
                      cartIcon="w-4"
                      bottom="bottom-0"
                       margin="mt-4"
                      simgHeight="h-[200px]"
                    />
                  )
                })
              )
              
            }
            </div>

              <div className="flex gap-4  h-10">
                <button className="w-[100px] h-full bg-black text-white" onClick={previousPage}>prev</button>
                <button className="w-[100px] h-full bg-black text-white" onClick={nextPage}>next</button>
              </div>
          </section>
           <NewsLetterComponent
            top="lg:top-[50px]"
            
           />
          <section className="relative lg:top-[90px]">
            <Footer/>
          </section>
        </div>
       
    )
}

export default Essentials