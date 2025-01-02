import { useState,useEffect, useRef } from "react"
import Legends from "./Legends"
import hero from "../assets/gimp.jpg"
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
import Header from "./Header"
import NewsLetterComponent from "./NewsLetterComponent"
import SideNav from "./SideNav"
import Cart from "./Cart"

const Homepage = () => {
    const [isStuck, setIsStuck] = useState(false);
    const [openNav,setOpenNav] = useState(false);
    const [showCart,setShowCart] =useState(false);
    const mens = [
        {name: "Essentials Button Down Shirt", src: jacket16, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: jacket17, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: jacket18, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Heat Jersey", src: jerex7, bestSelling: true, price: 190000, date: "2024-12-05", size: ["S", "M", "L", "XL"], onSale: false,color: "white and black",amount: 1},
        {name: "Essentials Wave Jersey", src: jerex18, bestSelling: false, price: 100000, date: "2024-07-15", size: ["M", "L"], onSale: true,color: "black and brown",amount: 11},
        {name: "Essentials Surge Jersey", src: jerex11, bestSelling: false, price: 140000, date: "2024-09-25", size: ["S", "M", "L"], onSale: false,color: "light blue",amount: 1},
        {name: "Essentials Water Pants", src: pant12, bestSelling: false, price: 60000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Blue", "Red"], amount: 25},
        {name: "Essentials Yoga Pants", src: pant13, bestSelling: true, price: 50000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "Grey"], amount: 45},
        {name: "Essentials Leggings", src: pant14, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45},
        {name: "Essentials Messenger Bag", src: bag8, bestSelling: false, price: 70000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "20L", material: "Polyester", color: ["Brown", "Tan"], amount: 35},
        {name: "Essentials Travel Bag", src: bag7, bestSelling: true, price: 100000, date: "2024-10-01", size: ["One Size"], onSale: false, capacity: "40L", material: "Nylon", color: ["Black", "Grey"], amount: 45},
        {name: "Essentials Laptop Bag", src: bag6, bestSelling: false, price: 80000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, capacity: "10L", material: "Polyester", color: ["Grey", "Blue"], amount: 25},
        {name: "Essentials Shoulder Bag", src: bag9, bestSelling: true, price: 90000, date: "2024-09-25", size: ["One Size"], onSale: false, capacity: "20L", material: "Nylon", color: ["Black", "Brown"], amount: 50},
        {name: "Essentials Crossbody Bag", src: bag10, bestSelling: false, price: 60000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "10L", material: "Polyester", color: ["Red", "Pink"], amount: 30},
        {name: "Essentials Short Sleeve Shirt", src: slidd3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20},
        {name: "Essentials Button Down Shirt", src: slidd4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: slidd5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: slidd6, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials T-Shirt", src:slidd7, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
    ]

    const womens = [
        {name: "Essentials Tank Top", src: tops5, bestSelling: true, price: 25000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45},
        {name: "Essentials Polo Shirt", src: tops6, bestSelling: false, price: 32000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30},
        {name: "Essentials Tank Top", src: tops7, bestSelling: true, price: 25000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45},
        {name: "Essentials Polo Shirt", src: tops8, bestSelling: false, price: 32000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30},
        {name: "Essentials Dress Shirt", src: ski2, bestSelling: false, price: 38000, date: "2024-08-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["White", "Light Blue"], amount: 30},
        {name: "Essentials Thermal Shirt", src: ski3, bestSelling: true, price: 32000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Grey"], amount: 40},
        {name: "Essentials Raglan Shirt", src: ski4, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25},
        {name: "Essentials Crew Neck Shirt", src: ski5, bestSelling: true, price: 28000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45},
        {name: "Essentials Short Sleeve Shirt", src: dress11, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20},
        {name: "Essentials Button Down Shirt", src: dress12, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Henley Shirt", src: dress13, bestSelling: false, price: 28000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25},
        {name: "Essentials Henley Shirt", src: dress14, bestSelling: false, price: 28000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25},
        {name: "Essentials T-Shirt", src: wbag12, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
        {name: "Essentials T-Shirt", src: wbag13, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
        {name: "Essentials T-Shirt", src: wbag14, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
        {name: "Essentials T-Shirt", src: skirt9, bestSelling: false, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
        {name: "Essentials T-Shirt", src: skirt7, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
        {name: "Essentials T-Shirt", src: skirt10, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
    ]
    const Jerseys = [
              {name: "Essentials Maverick Jersey", src: essential3, bestSelling: false, price: 120000, date: "2024-08-15", size: ["S", "M", "L"], onSale: false,color:"blue and red", amount:1},
              {name: "Essentials Apex Jersey", src: jerex, bestSelling: true, price: 180000, date: "2024-12-05", size: ["S", "M", "L", "XL"], onSale: false, color: "white",amount: 1 },
              {name: "Essentials Storm Chaser Jersey", src: essential2, bestSelling: false, price: 90000, date: "2024-07-20", size: ["M", "L"], onSale: true,color: "green", amount: 1},
              {name: "Essentials Vintage Edition Jersey", src: essential1, bestSelling: true, price: 150000, date: "2024-07-05", size: ["S", "M", "L"], onSale: false,color: "brown and pink",amount:1 },
              {name: "Essentials Fusion Jersey", src: jerex2, bestSelling: false, price: 100000, date: "2024-09-10", size: ["M", "L", "XL"], onSale: true,color: "red",amount: 3},
              {name: "Essentials Velocity Jersey", src: jerex3, bestSelling: false, price: 140000, date: "2024-10-25", size: ["S", "M", "L"], onSale: false,color: "white,yellow and black", amount: 1},
              {name: "Essentials Thunder Jersey", src: jerex4, bestSelling: false, price: 110000, date: "2024-08-15", size: ["M", "L"], onSale: true,color: "red and black", amount: 1},
              {name: "Essentials Lightning Jersey", src: jerex16, bestSelling: true, price: 160000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color:"red and black",amount:1},
              {name: "Essentials Blaze Jersey", src: jerex17, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "white and blue",amount: 9,amount: 1},
              {name: "Essentials Frost Jersey", src: jerex6, bestSelling: false, price: 120000, date: "2024-08-10", size: ["M", "L", "XL"], onSale: false,color: "white and red",amount: 2},
              {name: "Essentials Heat Jersey", src: jerex7, bestSelling: true, price: 190000, date: "2024-12-05", size: ["S", "M", "L", "XL"], onSale: false,color: "white and black",amount: 1},
              {name: "Essentials Wave Jersey", src: jerex18, bestSelling: false, price: 100000, date: "2024-07-15", size: ["M", "L"], onSale: true,color: "black and brown",amount: 11},
              {name: "Essentials Surge Jersey", src: jerex11, bestSelling: false, price: 140000, date: "2024-09-25", size: ["S", "M", "L"], onSale: false,color: "light blue",amount: 1},
              {name: "Essentials Pulse Jersey", src: jerex12, bestSelling: true, price: 170000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color: "brown", amount:10},
              {name: "Essentials Strike Jersey", src: jerex13, bestSelling: false, price: 110000, date: "2024-08-10", size: ["M", "L"], onSale: true,color: "light brown",amount:5},
              {name: "Essentials Bolt Jersey", src: jerex14, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "ash"},
              {name: "Essentials Utopia Jersey", src: jerex20, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "ash"},
              {name: "Essentials Flux Jersey", src: jerex15, bestSelling: true, price: 160000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color: "white", amount:2}
    ]
    const skims = [ 
        {name: "Essentials Polo Shirt", src: skim, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30},
        {name: "Essentials Long Sleeve Shirt", src: skim2, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 40},
        {name: "Essentials Short Sleeve Shirt", src: skim3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20},
        {name: "Essentials Button Down Shirt", src: skim4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: skim5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: skim6, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Flannel Shirt", src: ski, bestSelling: true, price: 42000, date: "2024-09-30", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["Red", "Black"], amount: 50},
        {name: "Essentials Dress Shirt", src: ski2, bestSelling: false, price: 38000, date: "2024-08-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["White", "Light Blue"], amount: 30},
        {name: "Essentials Thermal Shirt", src: ski3, bestSelling: true, price: 32000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Grey"], amount: 40},
        {name: "Essentials Raglan Shirt", src: ski4, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25},
        {name: "Essentials Crew Neck Shirt", src: ski5, bestSelling: true, price: 28000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45},
        {name: "Essentials Crew Neck Shirt", src: ski6, bestSelling: true, price: 28000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45},
        {name: "Essentials Thermal Shirt", src: ski11, bestSelling: true, price: 32000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Grey"], amount: 40},
        {name: "Essentials Raglan Shirt", src: ski8, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25},
        {name: "Essentials Crew Neck Shirt", src: ski14, bestSelling: true, price: 28000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45},
        {name: "Essentials Crew Neck Shirt", src: ski10, bestSelling: true, price: 28000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45},
        {name: "Essentials Raglan Shirt", src: ski12, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25},
        {name: "Essentials Crew Neck Shirt", src: ski13, bestSelling: true, price: 28000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45},
        
    ]
   
   const shirts = [
        {name: "Essentials T-Shirt", src: shirt, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
        {name: "Essentials Polo Shirt", src: shirt2, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30},
        {name: "Essentials Long Sleeve Shirt", src: shirt3, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 40},
        {name: "Essentials Short Sleeve Shirt", src: shirt4, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20},
        {name: "Essentials Button Down Shirt", src: shirt5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Henley Shirt", src: shirt6, bestSelling: false, price: 28000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25},
        {name: "Essentials Flannel Shirt", src: shirt7, bestSelling: true, price: 42000, date: "2024-09-30", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["Red", "Black"], amount: 50},
        {name: "Essentials Dress Shirt", src: shirt8, bestSelling: false, price: 38000, date: "2024-08-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["White", "Light Blue"], amount: 30},
        {name: "Essentials Thermal Shirt", src: shirt9, bestSelling: true, price: 32000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Grey"], amount: 40},
        {name: "Essentials Raglan Shirt", src: shirt10, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25},
        {name: "Essentials Crew Neck Shirt", src: shirt11, bestSelling: true, price: 28000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45},
        {name: "Essentials V-Neck Shirt", src: shirt12, bestSelling: false, price: 26000, date: "2024-08-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20},
        {name: "Essentials Sweatshirt", src: shirt13, bestSelling: true, price: 38000, date: "2024-09-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Grey"], amount: 50},
        {name: "Essentials Hoodie", src: shirt14, bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 30},
        {name: "Essentials Fleece Shirt", src: shirt15,bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 30},
        {name: "Essentials Hoodie", src: shirt16, bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 30},
        {name: "Essentials Fleece Shirt", src: shirt17,bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 30},
        {name: "Essentials Hoodie", src: shirt18, bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 30},
       ]
    const jackets = [ 
        {name: "Essentials T-Shirt", src:jacket, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
        {name: "Essentials Polo Shirt", src: jacket2, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30},
        {name: "Essentials Short Sleeve Shirt", src: jacket3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20},
        {name: "Essentials Button Down Shirt", src: jacket4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: jacket5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: jacket6, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials T-Shirt", src:jacket7, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
        {name: "Essentials Polo Shirt", src: jacket8, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30},
        {name: "Essentials Short Sleeve Shirt", src: jacket9, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20},
        {name: "Essentials Button Down Shirt", src: jacket10, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: jacket11, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: jacket12, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials T-Shirt", src:jacket13, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
        {name: "Essentials Polo Shirt", src: jacket14, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30},
        {name: "Essentials Short Sleeve Shirt", src: jacket15, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20},
        {name: "Essentials Button Down Shirt", src: jacket16, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: jacket17, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
        {name: "Essentials Button Down Shirt", src: jacket18, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
    ]

   const jorts = [
       {name: "Essentials Jeans", src: pant, bestSelling: true, price: 50000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["Blue", "Black"], amount: 50},
       {name: "Essentials Trousers", src: pant2, bestSelling: false, price: 60000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30},
       {name: "Essentials Sweatpants", src: pant3, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Grey"], amount: 40},
       {name: "Essentials Joggers", src: pant4, bestSelling: false, price: 55000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 25},
       {name: "Essentials Chinos", src: pant5, bestSelling: true, price: 65000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["Beige", "Navy Blue"], amount: 45},
       {name: "Essentials Corduroy Pants", src: pant6, bestSelling: false, price: 70000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Brown", "Green"], amount: 30},
       {name: "Essentials Cargo Pants", src: pant7, bestSelling: true, price: 60000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "Grey"], amount: 40},
       {name: "Essentials Drawstring Pants", src: pant8, bestSelling: false, price: 45000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["White", "Grey"], amount: 25},
       {name: "Essentials Zipper Pants", src: pant9, bestSelling: true, price: 55000, date: "2024-09-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "Navy Blue"], amount: 45},
       {name: "Essentials Hiking Pants", src: pant10, bestSelling: false, price: 70000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Brown", "Green"], amount: 30},
       {name: "Essentials Snow Pants", src: pant11, bestSelling: true, price: 80000, date: "2024-10-01", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "White"], amount: 40},
       {name: "Essentials Water Pants", src: pant12, bestSelling: false, price: 60000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Blue", "Red"], amount: 25},
       {name: "Essentials Yoga Pants", src: pant13, bestSelling: true, price: 50000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "Grey"], amount: 45},
       {name: "Essentials Leggings", src: pant14, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45},
       {name: "Essentials Leggings", src: pant15, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45},
       {name: "Essentials Leggings", src: pant16, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45},
       {name: "Essentials Leggings", src: pant17, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45},
       {name: "Essentials Leggings", src: pant18, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45},
    ]

    const slide = [ 
    {name: "Essentials T-Shirt", src:slides, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
    {name: "Essentials Polo Shirt", src: slides2, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30},
    {name: "Essentials Short Sleeve Shirt", src: slides3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20},
    {name: "Essentials Button Down Shirt", src: slides4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
    {name: "Essentials Button Down Shirt", src: slides5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
    {name: "Essentials Button Down Shirt", src: slides6, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
    {name: "Essentials T-Shirt", src:slidd, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
    {name: "Essentials Polo Shirt", src: slidd2, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30},
    {name: "Essentials Short Sleeve Shirt", src: slidd3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20},
    {name: "Essentials Button Down Shirt", src: slidd4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
    {name: "Essentials Button Down Shirt", src: slidd5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
    {name: "Essentials Button Down Shirt", src: slidd6, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
    {name: "Essentials T-Shirt", src:slidd7, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
    {name: "Essentials Polo Shirt", src: slidd8, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30},
    {name: "Essentials Short Sleeve Shirt", src: slidd9, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20},
    {name: "Essentials Button Down Shirt", src: slidd10, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
    {name: "Essentials Button Down Shirt", src: slidd11, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
    {name: "Essentials Button Down Shirt", src: slidd12, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45},
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
    const exhibits = [exhibit,exhibit2,exhibit3,exhibit4]
    
    return(
        <div className="overflow-x-hidden">
           <Header
             isStuck={isStuck}
             setIsStuck={setIsStuck}
             text= "white"
             color="bg-transparent"
             iconColor={isStuck ? "#000" : "#fff"}
             cartColor={isStuck ? "bg-black" : "bg-white"}
             cartText={isStuck ? "bg-black" : "bg-white"}
             openNav={openNav}
             setOpenNav={setOpenNav}
             setShowCart={setShowCart}
             showCart={showCart}
           />

          <Cart
           showCart={showCart}
           setShowCart={setShowCart}/>

           <SideNav
            openNav={openNav}
            setOpenNav={setOpenNav}
           />
            <section className={`lg:h-[120vh] relative lg:top-[-262px] h-[80vh] top-[-170px] flex w-full items-end`} 
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
                    <button className="border bg-black text-white h-[50px] w-[110px]">Browse Now</button>
                </div>
            </section>
            
            <SlideComponent
             top="top-[-230px]"
             essentials={Jerseys}
             simgHeight="h-[200px]"
            />

            <SideCard
              men={men}
              women={women}
              essential={mens}
              essential2={womens}
            />

            <SlideComponent
             top="top-[-200px]"
             essentials={skims}
           
            />

            <SlideComponent
             essentials={shirts}
             top="top-[-230px]"
             simgHeight="h-[200px]"
            />

            <SideCard
               men={olypiad}
               women={olypiad2}
            />

            <SlideComponent
             essentials={jackets}
             top="top-[-200px]"
             simgHeight="h-[200px]"
            />

            <section className=" h-[75vh] relative top-[-200px]">
                <Legends/>
            </section>

            <SlideComponent
             essentials={jorts}
             top="top-[-200px]"
             simgHeight="h-[200px]"
            />
             <section className="relative top-[-180px] lg:h-[80vh] h-[200vh]">
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
              top="top-[-230px]"
              simgHeight="h-[200px]"
            />

            <section className="lg:h-[40vh] h-[100vh]   border-t border-[#ccc] border-b relative top-[-180px]">
                <div className="flex lg:flex-row flex-col h-full w-[95%] mx-auto items-center">
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
             top="top-[-160px]"
            />

            <Footer/>
        </div>
        
    )
}

export default Homepage