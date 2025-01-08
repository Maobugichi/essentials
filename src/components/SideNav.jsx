import { useNavigate , Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react"; 
import { useEffect , useState } from "react";
import bag3 from "../assets/badRe5.png"
import jerex6 from "../assets/jerexRe8.png"
import jerex7 from "../assets/jerexRe9.png"
import jerex11 from "../assets/jerex11Re.png"
import jerex12 from "../assets/jerex12Re.png"
import jerex13 from "../assets/jerex13Re.png"
import jerex16 from "../assets/jerex16Re.png"
import jerex17 from "../assets/jerex17Re.png"
import jerex18 from "../assets/jerex18Re.png"
import bag6 from "../assets/laptop2.png"
import bag7 from "../assets/bag7.png"
import bag8 from "../assets/bag8.png"
import bag9 from "../assets/witch.png"
import bag10 from "../assets/crossbody.png"
import bag20 from "../assets/bgaRe4.png"
import bag21 from "../assets/bagRe7.png"
import shirt3 from "../assets/shirt3.png"
import shirt4 from "../assets/shirt4.png"
import shirt5 from "../assets/shirt5.png"
import pant11 from "../assets/pants10.png"
import pant12 from "../assets/pants11.png"
import pant13 from "../assets/pants12.png"
import pant14 from "../assets/pants13.png"
import tops5 from "../assets/cherry.png"
import tops6 from "../assets/speed.png"
import tops7 from "../assets/laba.png"
import tops8 from "../assets/checkW.png"
import dress11 from "../assets/dress11.png"
import dress12 from "../assets/dress12.png"
import dress13 from "../assets/dress13.png"
import dress14 from "../assets/dress14.png"
import ski2 from "../assets/ski2.png"
import ski3 from "../assets/ski3.png"
import ski4 from "../assets/ski4.png"
import ski5 from "../assets/ski5.png"
import wbag12 from "../assets/wbag12.png"
import wbag13 from "../assets/wbag13.png"
import wbag14 from "../assets/wbag14.png"
import slidd3 from "../assets/slidd3.png"
import slidd4 from "../assets/slidd4.png"
import slidd5 from "../assets/slidd5.png"
import slidd6 from "../assets/slidd6.png"
import slidd7 from "../assets/slidd7.png"
import skirt7 from "../assets/wskr3.png"
import skirt9 from "../assets/wskr2.png"
import skirt10 from "../assets/wskr4.png"
import jacket16 from "../assets/jj10.png"
import jacket17 from "../assets/jj11.png"
import jacket18 from "../assets/jj12.png"
const SideNav = ({ openNav, setOpenNav }) => {
  const [data,setData] = useState([]) 

  const collections = {
  "New Arrivals":[
    {name: "Essentials Backpack", src: bag20, bestSelling: true, price: 80000, date: "2024-09-10", size: ["One Size"], onSale: false, capacity: "20L", material: "Nylon", color: ["Black", "Grey"], amount: 50, count:1},
    {name: "Essentials Duffel Bag", src: bag3, bestSelling: false, price: 60000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "30L", material: "Polyester", color: ["Navy Blue", "Red"], amount: 30, count:1},
    {name: "Essentials Gym Bag", src: bag21, bestSelling: true, price: 70000, date: "2024-08-20", size: ["One Size"], onSale: false, capacity: "25L", material: "Nylon", color: ["Black", "Green"], amount: 40, count:1},
    {name: "Essentials Lightning Jersey", src: jerex16, bestSelling: true, price: 160000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color:"red and black",amount:1, count:1},
    {name: "Essentials Blaze Jersey", src: jerex17, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "white and blue",amount: 9,amount: 1, count:1},
    {name: "Essentials Frost Jersey", src: jerex6, bestSelling: false, price: 120000, date: "2024-08-10", size: ["M", "L", "XL"], onSale: false,color: "white and red",amount: 2, count:1},
    {name: "Essentials Long Sleeve Shirt", src: shirt3, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 40, count:1},
    {name: "Essentials Short Sleeve Shirt", src: shirt4, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20, count:1},
    {name: "Essentials Button Down Shirt", src: shirt5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
    {name: "Essentials Snow Pants", src: pant11, bestSelling: true, price: 80000, date: "2024-10-01", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "White"], amount: 40, count:1},
    {name: "Essentials Water Pants", src: pant12, bestSelling: false, price: 60000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Blue", "Red"], amount: 25, count:1},
    {name: "Essentials Yoga Pants", src: pant13, bestSelling: true, price: 50000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "Grey"], amount: 45, count:1},
    {name: "Essentials Leggings", src: pant14, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45, count:1},
    {name: "Essentials Surge Jersey", src: jerex11, bestSelling: false, price: 140000, date: "2024-09-25", size: ["S", "M", "L"], onSale: false,color: "light blue",amount: 1, count:1},
    {name: "Essentials Pulse Jersey", src: jerex12, bestSelling: true, price: 170000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color: "brown", amount:10, count:1},
    {name: "Essentials Strike Jersey", src: jerex13, bestSelling: false, price: 110000, date: "2024-08-10", size: ["M", "L"], onSale: true,color: "light brown",amount:5, count:1},
    {name: "Essentials Laptop Bag", src: bag6, bestSelling: false, price: 80000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, capacity: "10L", material: "Polyester", color: ["Grey", "Blue"], amount: 25, count:1},
    {name: "Essentials Shoulder Bag", src: bag9, bestSelling: true, price: 90000, date: "2024-09-25", size: ["One Size"], onSale: false, capacity: "20L", material: "Nylon", color: ["Black", "Brown"], amount: 50, count:1},
          
  ],
    "Men": [
            {name: "Essentials camo jacket", src: jacket16, bestSelling: true, price: 102000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
            {name: "Essentials NorthFace", src: jacket17, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
            {name: "Essentials Swag Jacket", src: jacket18, bestSelling: true, price: 180000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
            {name: "Essentials Heat Jersey", src: jerex7, bestSelling: true, price: 190000, date: "2024-12-05", size: ["S", "M", "L", "XL"], onSale: false,color: "white and black",amount: 1, count:1},
            {name: "Essentials Wave Jersey", src: jerex18, bestSelling: false, price: 100000, date: "2024-07-15", size: ["M", "L"], onSale: true,color: "black and brown",amount: 11, count:1},
            {name: "Essentials Surge Jersey", src: jerex11, bestSelling: false, price: 140000, date: "2024-09-25", size: ["S", "M", "L"], onSale: false,color: "light blue",amount: 1, count:1},
            {name: "Essentials Criss Jean", src: pant12, bestSelling: false, price: 60000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Blue", "Red"], amount: 25, count:1},
            {name: "Essentials Silent Jean", src: pant13, bestSelling: true, price: 50000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "Grey"], amount: 45, count:1},
            {name: "Essentials BrownSwap Jean", src: pant14, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45, count:1},
            {name: "Essentials Travel Bag", src: bag8, bestSelling: false, price: 70000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "20L", material: "Polyester", color: ["Brown", "Tan"], amount: 35, count:1},
            {name: "Essentials Messenger Bag", src: bag7, bestSelling: true, price: 100000, date: "2024-10-01", size: ["One Size"], onSale: false, capacity: "40L", material: "Nylon", color: ["Black", "Grey"], amount: 45, count:1},
            {name: "Essentials Camping Bag", src: bag6, bestSelling: false, price: 80000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, capacity: "10L", material: "Polyester", color: ["Grey", "Blue"], amount: 25, count:1},
            {name: "Essentials Witch Bag", src: bag9, bestSelling: true, price: 90000, date: "2024-09-25", size: ["One Size"], onSale: false, capacity: "20L", material: "Nylon", color: ["Black", "Brown"], amount: 50, count:1},
            {name: "Essentials Crossbody Bag", src: bag10, bestSelling: false, price: 60000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "10L", material: "Polyester", color: ["Red", "Pink"], amount: 30, count:1},
            {name: "Essentials Sofi Slides", src: slidd3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20, count:1},
            {name: "Essentials Surt Slides", src: slidd4, bestSelling: true, price: 38000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
            {name: "Essentials FullOn", src: slidd5, bestSelling: true, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 30, count:1},
            {name: "Essentials FTP", src: slidd6, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
          
        
    ],
    "Women": 
    [
            {name: "Essentials Tank Top", src: tops5, bestSelling: true, price: 25000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45, count:1},
            {name: "Essentials Polo Shirt", src: tops6, bestSelling: false, price: 32000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30, count:1},
            {name: "Essentials Tank Top", src: tops7, bestSelling: true, price: 25000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45, count:1},
            {name: "Essentials Polo Shirt", src: tops8, bestSelling: false, price: 32000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30, count:1},
            {name: "Essentials Dress Shirt", src: ski2, bestSelling: false, price: 38000, date: "2024-08-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["White", "Light Blue"], amount: 30, count:1},
            {name: "Essentials Thermal Shirt", src: ski3, bestSelling: true, price: 32000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Grey"], amount: 40, count:1},
            {name: "Essentials Raglan Shirt", src: ski4, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25, count:1},
            {name: "Essentials Crew Neck Shirt", src: ski5, bestSelling: true, price: 28000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45, count:1},
            {name: "Essentials Short Sleeve Shirt", src: dress11, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20, count:1},
            {name: "Essentials Button Down Shirt", src: dress12, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
            {name: "Essentials Henley Shirt", src: dress13, bestSelling: false, price: 28000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25, count:1},
            {name: "Essentials Henley Shirt", src: dress14, bestSelling: false, price: 28000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25, count:1},
            {name: "Essentials T-Shirt", src: wbag12, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
            {name: "Essentials T-Shirt", src: wbag13, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
            {name: "Essentials T-Shirt", src: wbag14, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
            {name: "Essentials T-Shirt", src: skirt9, bestSelling: false, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
            {name: "Essentials T-Shirt", src: skirt7, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
            {name: "Essentials T-Shirt", src: skirt10, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    ],
  };  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const navigate = useNavigate()
  const handleNavigate = (e) => {
      console.log("hello")
      const arrayName = e.target.innerText
      const dataArray = collections[arrayName]
      setData(dataArray);
      setOpenNav(!openNav)
  }

  useEffect(() => {
    if (data.length !== 0) {
      navigate("/essentials/essentialSection/1",{state:{data:data}})
    }
  },[data])
  
    return(
      <AnimatePresence>
        {
          openNav ? 
            <motion.div 
            initial={{scale:0}}
            whileInView={{scale:1}}
            exit={{scale:0}}
            className={`${openNav ? "fixed" : "hidden"} bg-white h-[95vh]  top-5 z-50 w-[95%] left-[10px] rounded-lg `}>
            <div className="w-[90%] flex flex-col gap-5 h-1/2  mt-5 mx-auto">
              <div className="flex justify-between">
                <button onClick={() => setOpenNav(!openNav)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={40} viewBox="0 0 2048 2048">
                    <path fill="#000" d="m1115 1024l690 691l-90 90l-691-690l-691 690l-90-90l690-691l-690-691l90-90l691 690l691-690l90 90z"></path>
                  </svg>
                </button>
                
                <Link className="block" to="/logins/1">
                  <button className="flex text-sm items-center">
                    
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={30} viewBox="0 0 48 48">
                        <g fill="#000" fillRule="evenodd" clipRule="evenodd">
                          <path d="M24 27a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></path>
                          <path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20M33.63 39.21A17.9 17.9 0 0 1 24 42a17.9 17.9 0 0 1-9.831-2.92q-.36-.45-.73-.93A2.14 2.14 0 0 1 13 36.845c0-1.077.774-1.98 1.809-2.131c6.845-1 11.558-.914 18.412.035A2.08 2.08 0 0 1 35 36.818c0 .48-.165.946-.463 1.31q-.461.561-.907 1.082m3.355-2.744c-.16-1.872-1.581-3.434-3.49-3.698c-7.016-.971-11.92-1.064-18.975-.033c-1.92.28-3.335 1.856-3.503 3.733A17.94 17.94 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.015 12.466"></path>
                        </g>
                      </svg>
                    login
                </button>
                </Link>
              </div>

              <div className="grid gap-4">
                  <ul>
                    <motion.li
                      onClick={handleNavigate}
                      className="text-[13px] rounded-sm p-1"
                      whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                      variants={item}
                    >
                      New Arrivals
                    </motion.li>
                  
                    <motion.li
                      onClick={handleNavigate}
                      className="text-[13px] rounded-sm p-1"
                      whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                      variants={item}
                    >
                      Men
                    </motion.li>
                    <motion.li
                      onClick={handleNavigate}
                      className="text-[13px] rounded-sm p-1"
                      whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                      variants={item}
                    >
                      Women
                    </motion.li>
                    
                  </ul>

                  <div className="grid gap-1">
                    <button className="flex items-center text-[12px] tracking-wider">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                            <path fill="#ccc" d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-3 19h-2v-1h2zm3-2H8V5h8z"></path>
                      </svg> +234703057078
                    </button>
                      
                    <button className="flex items-center text-[12px] gap-1 tracking-wider">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                        <path fill="#ccc" fillRule="evenodd" d="M11.27 8.188c-1.7 0-2.801 1.44-2.801 3.656c0 2.203 1.09 3.633 2.789 3.633c1.734 0 2.847-1.454 2.847-3.692c0-2.203-1.09-3.598-2.835-3.598zM11.645 2c5.135 0 9.375 3.527 9.375 8.719c0 3.726-1.547 6.117-4.125 6.117c-1.395 0-2.497-.844-2.672-2.156h-.082c-.528 1.336-1.618 2.074-3.07 2.074c-2.415 0-4.055-1.992-4.055-4.945c0-2.883 1.664-4.875 4.054-4.875c1.36 0 2.543.738 2.977 1.886h.082V7.168h1.36v6.703c0 1.066.562 1.77 1.628 1.77c1.559 0 2.625-1.793 2.625-4.946c0-4.476-3.504-7.52-8.097-7.52c-4.594 0-8.356 3.35-8.356 8.598c0 4.875 4.014 8.59 8.484 8.59c1.582 0 3.094-.199 3.891-.515v1.16c-.95.328-2.332.515-3.902.515C6.198 21.523 2 17.326 2 11.727A9.66 9.66 0 0 1 11.645 2"></path>
                      </svg>
                      immansamuel846@gmail.com
                    </button>
                  </div>
        
                  <div className="flex gap-2">
                      <button>
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                              <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5}></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                              </g>
                          </svg>
                      </button>
                      <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                          <path fill="#000" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"></path>
                      </svg>
                      </button>
                  </div>
              </div>
            </div>
            </motion.div> 
        
         : null
        }
          
      </AnimatePresence>
        
    )
}


export default SideNav
