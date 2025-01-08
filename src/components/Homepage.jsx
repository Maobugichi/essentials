import { useState,useEffect, useRef } from "react"
import Legends from "./Legends"
import hero from "../assets/mmd.jpg"
import SlideComponent from "./SlideComponent"
import Footer from "./Footer"
import Feature from "./Feature"
import bag6 from "../assets/laptop2.png"
import bag7 from "../assets/bag7.png"
import bag8 from "../assets/bag8.png"
import bag9 from "../assets/witch.png"
import bag10 from "../assets/crossbody.png"
import essential3  from "../assets/removed.png"
import essential2  from "../assets/check2.png"
import jerex from "../assets/check1.png"
import jerex2 from "../assets/jerexRe.png"
import jerex3 from "../assets/removed3.png"
import jerex4 from "../assets/jerex4Re.png"
import jerex6 from "../assets/jerexRe8.png"
import jerex7 from "../assets/jerexRe9.png"
import jerex11 from "../assets/jerex11Re.png"
import jerex12 from "../assets/jerex12Re.png"
import jerex13 from "../assets/jerex13Re.png"
import jerex14 from "../assets/jerex14Re.png"
import jerex20 from "../assets/jerex20Re.png"
import jerex15 from "../assets/jerex15Re.png"
import jerex16 from "../assets/jerex16Re.png"
import jerex17 from "../assets/jerex17Re.png"
import jerex18 from "../assets/jerex18Re.png"
import essential1 from "../assets/removed2.png"
import men from "../assets/men2.jpeg"
import women from "../assets/women.jpeg"
import SideCard from "./SideCard"
import olypiad from "../assets/olypiad.jpeg"
import olypiad2 from "../assets/olypiad2.jpeg"
import skim from "../assets/skim10.png"
import skim2 from "../assets/skim11.png"
import skim3 from "../assets/skim12.png"
import skim4 from "../assets/skim15.png"
import skim5 from "../assets/skim13.png"
import skim6 from "../assets/skim14.png"
import ski from "../assets/ski.png"
import ski2 from "../assets/ski2.png"
import ski3 from "../assets/ski3.png"
import ski4 from "../assets/ski4.png"
import ski5 from "../assets/ski5.png"
import ski6 from "../assets/ski6.png"
import ski7 from "../assets/ski7.png"
import ski8 from "../assets/ski8.png"
import ski9 from "../assets/ski9.png"
import ski10 from "../assets/ski10.png"
import ski11 from "../assets/ski11.png"
import ski12 from "../assets/ski12.png"
import ski13 from "../assets/ski13.png"
import ski14 from "../assets/ski14.png"
import shirt from "../assets/shirt.png"
import shirt2 from "../assets/shirt2.png"
import shirt3 from "../assets/shirt3.png"
import shirt4 from "../assets/shirt4.png"
import shirt5 from "../assets/shirt5.png"
import shirt6 from "../assets/shirt6.png"
import shirt7 from "../assets/hellstar.png"
import shirt8 from "../assets/shirt8.png"
import shirt9 from "../assets/god.png"
import shirt10 from "../assets/eye.png"
import shirt11 from "../assets/mad.png"
import shirt12 from "../assets/sexy.png"
import shirt13 from "../assets/shirt13.png"
import shirt14 from "../assets/shirt14.png"
import shirt15 from "../assets/shirt15.png"
import shirt16 from "../assets/shirt16.png"
import shirt17 from "../assets/rock.png"
import shirt18 from "../assets/evil.png"
import jacket from "../assets/jacket1.png"
import jacket2 from "../assets/jacket2.png"
import jacket3 from "../assets/jacket3.png"
import jacket4 from "../assets/jacket4.png"
import jacket5 from "../assets/jacket5.png"
import jacket6 from "../assets/jacket11.jpeg"
import jacket7 from "../assets/jj1.png"
import jacket8 from "../assets/jj2.png"
import jacket9 from "../assets/jj3.png"
import jacket10 from "../assets/jj4.png"
import jacket11 from "../assets/jj5.png"
import jacket12 from "../assets/jj6.png"
import jacket13 from "../assets/jj7.png"
import jacket14 from "../assets/jj8.png"
import jacket15 from "../assets/jj9.png"
import jacket16 from "../assets/jj10.png"
import jacket17 from "../assets/jj11.png"
import jacket18 from "../assets/jj12.png"
import pant from "../assets/short.png"
import pant2 from "../assets/short1.png"
import pant3 from "../assets/pants2.png"
import pant4 from "../assets/pants3.png"
import pant5 from "../assets/pants4.png"
import pant6 from "../assets/pants5.png"
import pant7 from "../assets/pants6.png"
import pant8 from "../assets/pants7.png"
import pant9 from "../assets/pants8.png"
import pant10 from "../assets/pants9.png"
import pant11 from "../assets/pants10.png"
import pant12 from "../assets/pants11.png"
import pant13 from "../assets/pants12.png"
import pant14 from "../assets/pants13.png"
import pant15 from "../assets/pants14.png"
import pant16 from "../assets/pants15.png"
import pant17 from "../assets/pants17.png"
import pant18 from "../assets/pants18.png"
import slides from "../assets/slides.png"
import slides2 from "../assets/slides2.png"
import slides3 from "../assets/slides3.png"
import slides4 from "../assets/slides4.png"
import slides5 from "../assets/slides5.png"
import slides6 from "../assets/slides6.png"
import slidd from "../assets/slidd.png"
import slidd2 from "../assets/slidd2.png"
import slidd3 from "../assets/slidd3.png"
import slidd4 from "../assets/slidd4.png"
import slidd5 from "../assets/slidd5.png"
import slidd6 from "../assets/slidd6.png"
import slidd7 from "../assets/slidd7.png"
import slidd8 from "../assets/slidd8.png"
import slidd9 from "../assets/slidd9.png"
import slidd10 from "../assets/slidd10.png"
import slidd11 from "../assets/slidd11.png"
import slidd12 from "../assets/slidd12.png"
import NewLook from "./NewLook"
import check from "../assets/check.svg"
import gift from  "../assets/gift.svg"
import chat from "../assets/chat.svg"
import cart from "../assets/cart.svg"
import exhibit from "../assets/exhibit.jpeg"
import exhibit2 from "../assets/exhibit2.jpeg"
import exhibit3 from "../assets/exhibit3.jpeg"
import exhibit4 from "../assets/exhibit4.jpeg"
import tops5 from "../assets/cherry.png"
import tops6 from "../assets/speed.png"
import tops7 from "../assets/laba.png"
import tops8 from "../assets/checkW.png"
import dress11 from "../assets/dress11.png"
import dress12 from "../assets/dress12.png"
import dress13 from "../assets/dress13.png"
import dress14 from "../assets/dress14.png"
import wbag12 from "../assets/wbag12.png"
import wbag13 from "../assets/wbag13.png"
import wbag14 from "../assets/wbag14.png"
import skirt7 from "../assets/wskr3.png"
import skirt9 from "../assets/wskr2.png"
import skirt10 from "../assets/wskr4.png"
import mor from "../assets/mor1.png"
import mor2 from "../assets/mor2.png"
import mor3 from "../assets/mor3.png"
import mor4 from "../assets/mor4.png"
import mor5 from "../assets/mor5.png"
import mor6 from "../assets/mor6.png"
import mor7 from "../assets/mor7.png"
import mor8 from "../assets/mor8.png"
import mor9 from "../assets/mor9.png"
import mor10 from "../assets/mor10.png"
import mor11 from "../assets/mor11.png"
import mor12 from "../assets/mor12.png"
import mor13 from "../assets/mor13.png"
import mor14 from "../assets/mor14.png"
import mor15 from "../assets/mor15.png"
import mor16 from "../assets/mor16.png"
import mor17 from "../assets/mor17.png"
import mor18 from "../assets/mor18.png"
import mor19 from "../assets/mor19.png"
import Header from "./Header"
import NewsLetterComponent from "./NewsLetterComponent"
import SideNav from "./SideNav"
import Cart from "./Cart"
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const [isStuck, setIsStuck] = useState(false);
    const [openNav,setOpenNav] = useState(false);
    const [showCart,setShowCart] =useState(false);
    const [cartItems, setCartItems] = useState([])
    const [data,setData] = useState([])
    const mens = [
        {name: "Essentials Button Down Shirt", src: jacket16, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
        {name: "Essentials Button Down Shirt", src: jacket17, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
        {name: "Essentials Button Down Shirt", src: jacket18, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
        {name: "Essentials Heat Jersey", src: jerex7, bestSelling: true, price: 190000, date: "2024-12-05", size: ["S", "M", "L", "XL"], onSale: false,color: "white and black",amount: 1, count:1},
        {name: "Essentials Wave Jersey", src: jerex18, bestSelling: false, price: 100000, date: "2024-07-15", size: ["M", "L"], onSale: true,color: "black and brown",amount: 11, count:1},
        {name: "Essentials Surge Jersey", src: jerex11, bestSelling: false, price: 140000, date: "2024-09-25", size: ["S", "M", "L"], onSale: false,color: "light blue",amount: 1, count:1},
        {name: "Essentials Water Pants", src: pant12, bestSelling: false, price: 60000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Blue", "Red"], amount: 25, count:1},
        {name: "Essentials Yoga Pants", src: pant13, bestSelling: true, price: 50000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "Grey"], amount: 45, count:1},
        {name: "Essentials Leggings", src: pant14, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45, count:1},
        {name: "Essentials Messenger Bag", src: bag8, bestSelling: false, price: 70000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "20L", material: "Polyester", color: ["Brown", "Tan"], amount: 35, count:1},
        {name: "Essentials Travel Bag", src: bag7, bestSelling: true, price: 100000, date: "2024-10-01", size: ["One Size"], onSale: false, capacity: "40L", material: "Nylon", color: ["Black", "Grey"], amount: 45, count:1},
        {name: "Essentials Laptop Bag", src: bag6, bestSelling: false, price: 80000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, capacity: "10L", material: "Polyester", color: ["Grey", "Blue"], amount: 25, count:1},
        {name: "Essentials Shoulder Bag", src: bag9, bestSelling: true, price: 90000, date: "2024-09-25", size: ["One Size"], onSale: false, capacity: "20L", material: "Nylon", color: ["Black", "Brown"], amount: 50},
        {name: "Essentials Crossbody Bag", src: bag10, bestSelling: false, price: 60000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "10L", material: "Polyester", color: ["Red", "Pink"], amount: 30, count:1},
        {name: "Essentials Short Sleeve Shirt", src: slidd3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20, count:1},
        {name: "Essentials Button Down Shirt", src: slidd4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
        {name: "Essentials Button Down Shirt", src: slidd5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
        {name: "Essentials Button Down Shirt", src: slidd6, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
        {name: "Essentials T-Shirt", src:slidd7, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    ]

    const womens = [
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
    ]
    const Jerseys = [
              {name: "Essentials Maverick Jersey", src: essential3, bestSelling: false, price: 120000, date: "2024-08-15", size: ["S", "M", "L"], onSale: false,color:"blue and red", amount:1, count:1},
              {name: "Essentials Apex Jersey", src: jerex, bestSelling: true, price: 180000, date: "2024-12-05", size: ["S", "M", "L", "XL"], onSale: false, color: "white",amount: 1 , count:1},
              {name: "Essentials Storm Chaser Jersey", src: essential2, bestSelling: false, price: 90000, date: "2024-07-20", size: ["M", "L"], onSale: true,color: "green", amount: 1 , count:1},
              {name: "Essentials Vintage Edition Jersey", src: essential1, bestSelling: true, price: 150000, date: "2024-07-05", size: ["S", "M", "L"], onSale: false,color: "brown and pink",amount:1 , count:1},
              {name: "Essentials Fusion Jersey", src: jerex2, bestSelling: false, price: 100000, date: "2024-09-10", size: ["M", "L", "XL"], onSale: true,color: "red",amount: 3 , count:1},
              {name: "Essentials Velocity Jersey", src: jerex3, bestSelling: false, price: 140000, date: "2024-10-25", size: ["S", "M", "L"], onSale: false,color: "white,yellow and black", amount: 1 , count:1},
              {name: "Essentials Thunder Jersey", src: jerex4, bestSelling: false, price: 110000, date: "2024-08-15", size: ["M", "L"], onSale: true,color: "red and black", amount: 1 , count:1},
              {name: "Essentials Lightning Jersey", src: jerex16, bestSelling: true, price: 160000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color:"red and black",amount:1 , count:1},
              {name: "Essentials Blaze Jersey", src: jerex17, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "white and blue",amount: 9,amount: 1, count:1},
              {name: "Essentials Frost Jersey", src: jerex6, bestSelling: false, price: 120000, date: "2024-08-10", size: ["M", "L", "XL"], onSale: false,color: "white and red",amount: 2, count:1},
              {name: "Essentials Heat Jersey", src: jerex7, bestSelling: true, price: 190000, date: "2024-12-05", size: ["S", "M", "L", "XL"], onSale: false,color: "white and black",amount: 1, count:1},
              {name: "Essentials Wave Jersey", src: jerex18, bestSelling: false, price: 100000, date: "2024-07-15", size: ["M", "L"], onSale: true,color: "black and brown",amount: 11 , count:1},
              {name: "Essentials Surge Jersey", src: jerex11, bestSelling: false, price: 140000, date: "2024-09-25", size: ["S", "M", "L"], onSale: false,color: "light blue",amount: 1,count:1},
              {name: "Essentials Pulse Jersey", src: jerex12, bestSelling: true, price: 170000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color: "brown", amount:10,  count:1},
              {name: "Essentials Strike Jersey", src: jerex13, bestSelling: false, price: 110000, date: "2024-08-10", size: ["M", "L"], onSale: true,color: "light brown",amount:5,  count:1},
              {name: "Essentials Bolt Jersey", src: jerex14, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "ash",count:1},
              {name: "Essentials Utopia Jersey", src: jerex20, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "ash", count:1},
              {name: "Essentials Flux Jersey", src: jerex15, bestSelling: true, price: 160000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color: "white", amount:2, count:1}
    ]
    const skims = [ 
        {name: "Essentials pound skim", src: skim, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "dark purple", amount: 30, count:1},
        {name: "Essentials Lightening skim", src: skim2, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "light blue", amount: 40, count:1},
        {name: "Essentials rose skim", src: skim3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "light pink", amount: 20, count:1},
        {name: "Essentials saphhire skim", src: skim4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "dark pink", amount: 45, count:1},
        {name: "Essentials hue skim", src: skim5, bestSelling: true, price: 35000, date: "2024-10-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Light brown", amount: 45, count:1},
        {name: "Essentials body skim", src: skim6, bestSelling: true, price: 35000, date: "2024-01-23", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "dark brown", amount: 45, count:1},
        {name: "Essentials red crest", src: ski, bestSelling: true, price: 42000, date: "2024-09-30", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Red", amount: 50, count:1},
        {name: "Essentials diesel", src: ski2, bestSelling: false, price: 38000, date: "2024-08-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Black", amount: 30, count:1},
        {name: "Essentials snow skim", src: ski3, bestSelling: true, price: 32000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Grey", amount: 40, count:1},
        {name: "Essentials bloods", src: ski4, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Dark Red", amount: 25, count:1},
        {name: "Essentials shadows skim", src: ski5, bestSelling: true, price: 28000, date: "2024-09-08", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Smoke Black", amount: 45, count:1},
        {name: "Essentials Crop Lily", src: ski6, bestSelling: true, price: 28000, date: "2024-10-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "vios", amount: 45, count:1},
        {name: "Essentials Green Skim", src: ski11, bestSelling: true, price: 32000, date: "2024-06-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color:"Green", amount: 40, count:1},
        {name: "Essentials crop Lily", src: ski8, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Pink", amount: 25, count:1},
        {name: "Essentials peia crop", src: ski14, bestSelling: true, price: 28000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Blue", amount: 45, count:1},
        {name: "Essentials light skim", src: ski10, bestSelling: true, price: 28000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "White", amount: 45, count:1},
        {name: "Essentials birth", src: ski12, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Light Pink", amount: 25, count:1},
        {name: "Essentials rebirth", src: ski13, bestSelling: true, price: 28000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Pink", amount: 45, count:1},
        
    ]
   
   const shirts = [
        {name: "Essentials Fearless Tee", src: shirt16, bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Black", amount: 30, count:1},
        {name: "Essentials Grid", src: shirt17,bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Black", amount: 30, count:1},
        {name: "Essentials Reckless Tee", src: shirt12, bestSelling: false, price: 26000, date: "2024-08-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Cream and Black", amount: 20, count:1},
        {name: "Essentials BN Tee", src: shirt13, bestSelling: true, price: 38000, date: "2024-09-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black", amount: 50, count:1},
        {name: "Essentials Legacy Tee", src: shirt14, bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Light Green and Cream", amount: 30, count:1},
        {name: "Essentials Motive Tee", src: shirt, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials Polo Shirt", src: shirt2, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30, count:1},
        {name: "Essentials Virtual Tee", src: shirt3, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 40, count:1},
        {name: "Essentials Saint Tee", src: shirt4, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color:  "Black and White", amount: 20, count:1},
        {name: "Essentials Wrld Tee", src: shirt5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "White and Blue", amount: 45, count:1},
        {name: "Essentials Yahweh Tee", src: shirt6, bestSelling: false, price: 28000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "white", amount: 25, count:1},
        {name: "Essentials HellStar Tee", src: shirt7, bestSelling: true, price: 42000, date: "2024-09-30", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "White and Red", amount: 50, count:1},
        {name: "Essentials Fearless Tee", src: shirt8, bestSelling: false, price: 38000, date: "2024-08-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "White and Red", amount: 30, count:1},
        {name: "Essentials IGWT Tee", src: shirt9, bestSelling: true, price: 32000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "White and Red", amount: 40, count:1},
        {name: "Essentials Evil Eye", src: shirt10, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "White and Red", amount: 25, count:1},
        {name: "Essentials SNE Tee", src: shirt11, bestSelling: true, price: 28000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "White and Black", amount: 45, count:1},
        {name: "Essentials Fleece Tee", src: shirt15,bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Orange and Black", amount: 30, count:1},
        {name: "Essentials Maddness Tee", src: shirt18, bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Cream", amount: 30, count:1},
   ]
    const jackets = [ 
        {name: "Essentials Blackard", src:jacket, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Brown and Cream", amount: 50, count:1},
        {name: "Essentials Skel", src: jacket2, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Black and Red", amount: 30, count:1},
        {name: "Essentials V half", src: jacket3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Brown and Cream", amount: 20, count:1},
        {name: "Essentials PRC", src: jacket4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Brown", amount: 45, count:1},
        {name: "Essentials Pattern", src: jacket5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Grey and White", amount: 45, count:1},
        {name: "Essentials Escape", src: jacket6, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black", amount: 45, count:1},
        {name: "Essentials Bowine", src:jacket7, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color:"Black", amount: 50, count:1},
        {name: "Essentials AMRT", src: jacket8, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Green and Black", amount: 30, count:1},
        {name: "Essentials WorldWide", src: jacket9, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Black", amount: 20, count:1},
        {name: "Essentials Starsigns", src: jacket10, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black and Light Blue", amount: 45, count:1},
        {name: "Essentials Spiderverse", src: jacket11, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black and Red", amount: 45, count:1},
        {name: "Essentials Wutang", src: jacket12, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black and Pink", amount: 45, count:1},
        {name: "Essentials Supremes", src:jacket13, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Blue", amount: 50, count:1},
        {name: "Essentials PlainJs", src: jacket14, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Blue", amount: 30, count:1},
        {name: "Essentials MeToYou", src: jacket15, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Light Blue with black paterns", amount: 20, count:1},
        {name: "Camoflague Jacket", src: jacket16, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Camo", amount: 45, count:1},
        {name: "Essentials Northface Jacket", src: jacket17, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Red and black with white patterns", amount: 45, count:1},
       
    ]

   const jorts = [
       {name: "Essentials Plain Jean", src: pant, bestSelling: true, price: 50000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color:  "Black", amount: 50, count:1},
       {name: "Essentials Plain Jean", src: pant2, bestSelling: false, price: 60000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Black", amount: 30, count:1},
       {name: "Essentials StarBoy Shorts", src: pant3, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black", amount: 40, count:1},
       {name: "Essentials Bottegrri Shorts", src: pant4, bestSelling: false, price: 55000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Black and Grey", amount: 25, count:1},
       {name: "Essentials Palms Shorts", src: pant5, bestSelling: true, price: 65000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black", amount: 45, count:1},
       {name: "Essentials Sismus Shorts", src: pant6, bestSelling: false, price: 70000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Black", amount: 30, count:1},
       {name: "Essentials Wildin Shorts", src: pant7, bestSelling: true, price: 60000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: "Black", amount: 40, count:1},
       {name: "Essentials Plain Jean", src: pant8, bestSelling: false, price: 45000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Black", amount: 25, count:1},
       {name: "Essentials Plain Jean", src: pant9, bestSelling: true, price: 55000, date: "2024-09-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: "Black", amount: 45, count:1},
       {name: "Essentials Plain Blues Jean", src: pant10, bestSelling: false, price: 70000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Blue", amount: 30, count:1},
       {name: "Essentials Skel Jean", src: pant11, bestSelling: true, price: 80000, date: "2024-10-01", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: "Black", amount: 40, count:1},
       {name: "Essentials Spade Jean", src: pant12, bestSelling: false, price: 60000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Black", amount: 25, count:1},
       {name: "Essentials SWagged Jean", src: pant13, bestSelling: true, price: 50000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: "Black", amount: 45, count:1},
       {name: "Essentials Washed Jean", src: pant14, bestSelling: false, price: 40000, date: "2024-08-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Washed Blue", amount: 45, count:1},
       {name: "Essentials Astro Jean", src: pant15, bestSelling: false, price: 40000, date: "2024-06-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Black", amount: 45, count:1},
       {name: "Essentials STears", src: pant16, bestSelling: false, price: 40000, date: "2024-10-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Black", amount: 45, count:1},
       {name: "Essentials Plain Black Jean", src: pant17, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Black", amount: 45, count:1},
       {name: "Essentials Plain Ash Jean", src: pant18, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Grey", amount: 45, count:1},
   ]

   const browse = [
        {name: "Essentials Velocity Jersey", src: jerex3, bestSelling: false, price: 140000, date: "2024-10-25", size: ["S", "M", "L"], onSale: false,color: "white,yellow and black", amount: 1 , count:1},
        {name: "Essentials Thunder Jersey", src: jerex4, bestSelling: false, price: 110000, date: "2024-08-15", size: ["M", "L"], onSale: true,color: "red and black", amount: 1 , count:1},
        {name: "Essentials Lightning Jersey", src: jerex16, bestSelling: true, price: 160000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color:"red and black",amount:1 , count:1},
        {name: "Essentials Blaze Jersey", src: jerex17, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "white and blue",amount: 9,amount: 1, count:1},
        {name: "Essentials Astro Jean", src: pant15, bestSelling: false, price: 40000, date: "2024-06-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Black", amount: 45, count:1},
        {name: "Essentials STears", src: pant16, bestSelling: false, price: 40000, date: "2024-10-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Black", amount: 45, count:1},
        {name: "Essentials Plain Black Jean", src: pant17, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Black", amount: 45, count:1},
        {name: "Essentials Plain Ash Jean", src: pant18, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: "Grey", amount: 45, count:1},
        {name: "Essentials bloods", src: ski4, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Dark Red", amount: 25, count:1},
        {name: "Essentials shadows skim", src: ski5, bestSelling: true, price: 28000, date: "2024-09-08", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Smoke Black", amount: 45, count:1},
        {name: "Essentials Crop Lily", src: ski6, bestSelling: true, price: 28000, date: "2024-10-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "vios", amount: 45, count:1},
        {name: "Essentials Green Skim", src: ski11, bestSelling: true, price: 32000, date: "2024-06-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color:"Green", amount: 40, count:1},
        {name: "Essentials Full Cloth Slide", src: slidd4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Light Green", amount: 45, count:1},
        {name: "Essentials Full Cover Birkin", src: slidd5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Smoke", amount: 45, count:1},
        {name: "Essentials FTP Slide", src: slidd6, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black", amount: 45, count:1},
        {name: "Essentials Cat Eyes Slide", src:slidd7, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "White", amount: 50, count:1},
        {name: "Essentials Messenger Bag", src: bag8, bestSelling: false, price: 70000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "20L", material: "Polyester", color: ["Brown", "Tan"], amount: 35, count:1},
        {name: "Essentials Travel Bag", src: bag7, bestSelling: true, price: 100000, date: "2024-10-01", size: ["One Size"], onSale: false, capacity: "40L", material: "Nylon", color: ["Black", "Grey"], amount: 45, count:1},
        {name: "Essentials Laptop Bag", src: bag6, bestSelling: false, price: 80000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, capacity: "10L", material: "Polyester", color: ["Grey", "Blue"], amount: 25, count:1},
        {name: "Essentials Shoulder Bag", src: bag9, bestSelling: true, price: 90000, date: "2024-09-25", size: ["One Size"], onSale: false, capacity: "20L", material: "Nylon", color: ["Black", "Brown"], amount: 50},
        {name: "Essentials T-Shirt", src: wbag12, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
   ]

    const slide = [ 
        {name: "Essentials WorldWide Slide", src:slides, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Cream", amount: 50, count:1},
        {name: "Essentials Yeezy Slide", src: slides2, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Smoke", amount: 30, count:1},
        {name: "Essentials Yeezy Slide", src: slides3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Light Green", amount: 20, count:1},
        {name: "Essentials Yeezy Slide", src: slides4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black", amount: 45, count:1},
        {name: "Essentials Yeezy Slide", src: slides5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Cream", amount: 45, count:1},
        {name: "Essentials Yeezy Slide", src: slides6, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black", amount: 45, count:1},
        {name: "Essentials 0 Fucks Slide", src:slidd, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black", amount: 50, count:1},
        {name: "Essentials Puma Slide", src: slidd2, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Black", amount: 30, count:1},
        {name: "Essentials Swivle Slide", src: slidd3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Black", amount: 20, count:1},
        {name: "Essentials Full Cloth Slide", src: slidd4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Light Green", amount: 45, count:1},
        {name: "Essentials Full Cover Birkin", src: slidd5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Smoke", amount: 45, count:1},
        {name: "Essentials FTP Slide", src: slidd6, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black", amount: 45, count:1},
        {name: "Essentials Cat Eyes Slide", src:slidd7, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "White", amount: 50, count:1},
        {name: "Essentials Belong Slide", src: slidd8, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "White", amount: 30, count:1},
        {name: "Essentials Comfort Slide", src: slidd9, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Green", amount: 20, count:1},
        {name: "Essentials PalmSprings Slide", src: slidd10, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black", amount: 45, count:1},
        {name: "Essentials SeeMe? Slide", src: slidd11, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black with White Patterns", amount: 45, count:1},
        {name: "Essentials WorldMap", src: slidd12, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Green", amount: 45, count:1},
    ]
    const content = [
        {
        src:check, 
        header: "Secured payment",
        text: "Enjoy peace of mind with our secured payment options!"
       },
       {
        src:gift,
        header:"Shipping",
        text:"Get your order fast with our speedy shipping options!"
       },
       {
        src:chat,
        header: "Live chat",
        text: "Need help? Our live chat is here for instant support!"
       },
       {
        src:cart,
        header:"Checkout",
        text:"Easy checkout – complete your order in seconds!"
       }
    ]
    const olypiadCollection = [
        {name: "Essentials Ryhopm Tee", src: mor, bestSelling: false, price: 120000, date: "2024-08-15", size: ["S", "M", "L"], onSale: false,color:"blue and red", amount:1, count:1},
        {name: "Essentials ChainedUp Sweatshirt", src: mor2, bestSelling: true, price: 180000, date: "2024-12-05", size: ["S", "M", "L", "XL"], onSale: false, color: "white",amount: 1 , count:1},
        {name: "Essentials BoyDevil Tee", src: mor3, bestSelling: false, price: 90000, date: "2024-07-20", size: ["M", "L"], onSale: true,color: "green", amount: 1 , count:1},
        {name: "Essentials NO f*cks Tee", src:mor4, bestSelling: true, price: 150000, date: "2024-07-05", size: ["S", "M", "L"], onSale: false,color: "brown and pink",amount:1 , count:1},
        {name: "Essentials Love eye Tee", src: mor5, bestSelling: false, price: 100000, date: "2024-09-10", size: ["M", "L", "XL"], onSale: true,color: "red",amount: 3 , count:1},
        {name: "Essentials Jeff Tee", src: mor6, bestSelling: false, price: 140000, date: "2024-10-25", size: ["S", "M", "L"], onSale: false,color: "Black", amount: 1 , count:1},
        {name: "Essentials Trust Tee", src: mor19, bestSelling: false, price: 110000, date: "2024-08-15", size: ["M", "L"], onSale: true,color: "Black", amount: 1 , count:1},
        {name: "Essentials Jeff Tee", src:mor8, bestSelling: true, price: 160000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color:"Cream",amount:1 , count:1},
        {name: "Essentials Risk Tee", src: mor9, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "light yellow",amount: 9,amount: 1, count:1},
        {name: "Essentials Nas Tee", src: mor10, bestSelling: false, price: 120000, date: "2024-08-10", size: ["M", "L", "XL"], onSale: false,color: "white",amount: 2, count:1},
        {name: "Essentials HomeSurge Jersey", src: mor11, bestSelling: true, price: 190000, date: "2024-12-05", size: ["S", "M", "L", "XL"], onSale: false,color: "Red",amount: 1, count:1},
        {name: "Essentials FlameSkull Longsleeve", src: mor12, bestSelling: false, price: 100000, date: "2024-07-15", size: ["M", "L"], onSale: true,color: "brown",amount: 11 , count:1},
        {name: "Essentials Side Pocket Cargo", src: mor13, bestSelling: false, price: 140000, date: "2024-09-25", size: ["S", "M", "L"], onSale: false,color: "Black",amount: 1,count:1},
        {name: "Essentials Covered up Pants", src: mor14, bestSelling: true, price: 170000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color: "Grey", amount:10,  count:1},
        {name: "Essentials Flame Pants", src: mor15, bestSelling: false, price: 110000, date: "2024-08-10", size: ["M", "L"], onSale: true,color: "Blue",amount:5,  count:1},
        {name: "Essentials 99Sleeves", src: mor16, bestSelling: false, price: 110000, date: "2024-08-10", size: ["M", "L"], onSale: true,color: "Black",amount:5,  count:1},
        {name: "Essentials Emotion Tee", src: mor17, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "Black", count:1},
        {name: "Essentials BD Tee", src: mor18, bestSelling: true, price: 160000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color: "Black", amount:2, count:1}
]

    
    const exhibits = [exhibit,exhibit2,exhibit3,exhibit4]
    const navigate = useNavigate()
    const handleNavigate = (e) => {
        setData(browse);
    }

    useEffect(() => {
        if (data.length !== 0) {
        navigate("/essentials/essentialSection/1",{state:{data:data}})
        }
    },[data])
    return(
        <div className="h-auto">
           <Header
             isStuck={isStuck}
             setIsStuck={setIsStuck}
             text= "white"
             color="bg-transparent"
             iconColor={isStuck ? "#000" : "#fff"}
             caveatColor={isStuck ? "#000" : "#fff"}
             cartColor={isStuck ? "bg-black" : "bg-white"}
             cartText={isStuck ? "text-white" : "text-black"}
             openNav={openNav}
             setOpenNav={setOpenNav}
             setShowCart={setShowCart}
             showCart={showCart}
           />

          <Cart
           showCart={showCart}
           setShowCart={setShowCart}
           cartItems={cartItems}
           setCartItems={setCartItems}
           />

           <SideNav
            openNav={openNav}
            setOpenNav={setOpenNav}
           />
            <section className={`lg:h-[120vh] relative lg:top-[-262px] h-[80vh] top-[-200px] flex w-full items-end`} 
                style={{
                    height: "100vh",
                    backgroundImage: `url(${hero})`,
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "left",
                   }}
            >
                <div className="lg:h-[40%] ml-10 flex flex-col lg:gap-5 gap-7 h-[25%]">
                    <h2 className="lg:text-3xl text-2xl text-white lg:w-[60%] w-[90%]">Essentials, style like no other. Swag like no other</h2>
                    <button onClick={handleNavigate} className="border bg-black text-white h-[50px] w-[110px]">Browse Now</button>
                </div>
            </section>
            
            <SlideComponent
             top="lg:top-[-230px]"
             essentials={Jerseys}
             simgHeight="h-[200px]"
             stop="top-[-180px]"
             width="lg:w-[280px]"
             height="lg:h-[400px]"
             imgHeight="lg:h-[330px]"
             imgWidth="w-[95%]"
             swidth="w-[210px]"
             sheight="h-[250px]"
            />

            <SideCard
              men={men}
              women={women}
              essential={olypiadCollection}
              essential2={womens}
            />

            <SlideComponent
             top="lg:top-[-200px]"
              stop="top-[-160px]"
             essentials={skims}
             simgHeight="h-[200px]"
             width="lg:w-[280px]"
             height="lg:h-[400px]"
             imgHeight="lg:h-[330px]"
             imgWidth="w-full"
             swidth="w-[210px]"
             sheight="h-[250px]"
            />

            <SlideComponent
             essentials={shirts}
             top="lg:top-[-230px]"
             stop="top-[-170px]"
             simgHeight="h-[200px]"
             width="lg:w-[280px]"
             height="lg:h-[400px]"
             imgHeight="lg:h-[330px]"
             imgWidth="w-full"
             swidth="w-[210px]"
             sheight="h-[250px]"
            />

        

            <SlideComponent
             essentials={jackets}
             top="lg:top-[-200px]"
              stop="top-[-175px]"
             simgHeight="h-[200px]"
             width="lg:w-[280px]"
             height="lg:h-[400px]"
             imgHeight="lg:h-[320px]"
             imgWidth="w-[95%]"
             swidth="w-[210px]"
             sheight="h-[250px]"
            />

            <section className=" h-[75vh] relative top-[-200px]">
                <Legends/>
            </section>

            <SlideComponent
             essentials={jorts}
             top="lg:top-[-200px]"
             stop="top-[-100px]"
             simgHeight="h-[200px]"
             width="lg:w-[280px]"
             height="lg:h-[400px]"
             imgHeight="lg:h-[310px]"
             imgWidth="w-[95%]"
             swidth="w-[210px]"
             sheight="h-[250px]"
            />
             <section className="relative lg:top-[-180px] top-[-70px] lg:min-h-[50vh]  h-auto min-h-[100vh]">
              <div className="flex lg:flex-row flex-col w-[95%] mx-auto items-center gap-5">
                    {exhibits.map(item => {
                        return(
                            <NewLook
                            src={item}
                            />
                        )
                    })}
              
              </div>
             
             </section>

             <SlideComponent
              essentials={slide}
              top="lg:top-[-170px]"
              simgHeight="h-[200px]"
              stop="top-[15px]"
              width="lg:w-[280px]"
              height="lg:h-[400px]"
              imgHeight="lg:h-[330px]"
              imgWidth="w-[95%]"
              swidth="w-[210px]"
              sheight="h-[250px]"
            />

            <section className="lg:h-[40vh] h-[100vh] border-t flex items-center border-[#ccc] border-b relative lg:top-[-180px]">
                <div className="flex lg:flex-row flex-col lg:h-full h-[90%] w-[95%] mx-auto items-center">
                    {content.map(item => {
                        return(
                            <Feature
                                src={item.src}
                                header={item.header}
                                text={item.text}
                            />
                        )
                    })}
                </div>
            </section>

            <NewsLetterComponent
             top="lg:top-[-160px]"
             sTop="top-[100px]"
            />

            <Footer/>
        </div>
        
    )
}

export default Homepage