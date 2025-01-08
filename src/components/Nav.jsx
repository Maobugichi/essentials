import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import essential2  from "../assets/check2.png"
import jacket4  from "../assets/jacket12.jpeg"
import jacket5  from "../assets/jacket7.jpeg"
import essential3  from "../assets/removed.png"
import cap from "../assets/cap.jpeg"
import cap2 from "../assets/cap2.jpeg"
import essential1 from "../assets/removed2.png"
import beanie from "../assets/beanie.jpeg"
import beanie2 from "../assets/beanie2.jpeg"
import beanie3 from "../assets/beanie3.jpeg"
import beanie4 from "../assets/beanie4.jpeg"
import beanie5 from "../assets/beanie5.jpeg"
import belt from "../assets/belt.jpeg"
import bag2 from "../assets/bag2.jpeg"
import bag3 from "../assets/badRe5.png"
import jerex from "../assets/check1.png"
import jerex2 from "../assets/jerexRe.png"
import jerex3 from "../assets/removed3.png"
import jerex4 from "../assets/jerex4Re.png"
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
import ski11 from "../assets/ski11.png"
import ski8 from "../assets/ski8.png"
import ski10 from "../assets/ski10.png"
import ski12 from "../assets/ski12.png"
import ski13 from "../assets/ski13.png"
import ski14 from "../assets/ski14.png"
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
import bag4 from "../assets/bag4Re2.png"
import bag5 from "../assets/bag5.png"
import bag6 from "../assets/laptop2.png"
import bag7 from "../assets/bag7.png"
import bag8 from "../assets/bag8.png"
import bag9 from "../assets/witch.png"
import bag10 from "../assets/crossbody.png"
import bag12 from "../assets/belt.png"
import bag13 from "../assets/clutch.png"
import bag14 from "../assets/wallet.png"
import bag15 from "../assets/cardholder.png"
import bag20 from "../assets/bgaRe4.png"
import bag21 from "../assets/bagRe7.png"
import bag22 from "../assets/free.png"
import bag23 from "../assets/skull.png"
import bag24 from "../assets/messenger.png"
import bag25 from "../assets/trapster.png"
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
import tops from "../assets/top11.png"
import tops2 from "../assets/strip.png"
import tops3 from "../assets/shoot.png"
import tops4 from "../assets/star.png"
import tops5 from "../assets/cherry.png"
import tops6 from "../assets/speed.png"
import tops7 from "../assets/laba.png"
import tops8 from "../assets/checkW.png"
import tops9 from "../assets/greenW.png"
import tops10 from "../assets/browns.png"
import tops11 from "../assets/pheebs.png"
import tops12 from "../assets/cider.png"
import dress from "../assets/dress.png"
import dress2 from "../assets/dress2.png"
import dress3 from "../assets/dress7.png"
import dress4 from "../assets/dress4.png"
import dress5 from "../assets/dress5.png"
import dress6 from "../assets/dress6.png"
import dress7 from "../assets/dress7.png"
import dress8 from "../assets/dress8.png"
import dress9 from "../assets/dress9.png"
import dress10 from "../assets/dress10.png"
import dress11 from "../assets/dress11.png"
import dress12 from "../assets/dress12.png"
import dress13 from "../assets/dress13.png"
import dress14 from "../assets/dress14.png"
import dress15 from "../assets/dress15.png"
import dress16 from "../assets/dress16.png"
import dress17 from "../assets/dress17.png"
import dress18 from "../assets/dress18.png"
import wbag2 from "../assets/wbag2.png"
import wbag3 from "../assets/wbag3.png"
import wbag4 from "../assets/wbag4.png"
import wbag5 from "../assets/wbag5.png"
import wbag6 from "../assets/wbag6.png"
import wbag7 from "../assets/wbag7.png"
import wbag8 from "../assets/wbag8.png"
import wbag9 from "../assets/wbag9.png"
import wbag10 from "../assets/wbag10.png"
import wbag11 from "../assets/wbag11.png"
import wbag12 from "../assets/wbag12.png"
import wbag13 from "../assets/wbag13.png"
import wbag14 from "../assets/wbag14.png"
import wbag15 from "../assets/wbag15.png"
import wbag16 from "../assets/wbag16.png"
import wbag17 from "../assets/wbag17.png"
import wbag18 from "../assets/wbag18.png"
import wbag19 from "../assets/wbag19.png"
import skirt from "../assets/skirt.png"
import skirt2 from "../assets/wskr.png"
import skirt3 from "../assets/skirt3.png"
import skirt4 from "../assets/skirt4.png"
import skirt5 from "../assets/skirt5.png"
import skirt6 from "../assets/skirt6.png"
import skirt7 from "../assets/wskr3.png"
import skirt8 from "../assets/skirt8.png"
import skirt9 from "../assets/wskr2.png"
import skirt10 from "../assets/wskr4.png"
import skirt11 from "../assets/wskr5.png"
import skirt12 from "../assets/wskr3.png"
import skirt13 from "../assets/wsk6.png"
import skirt14 from "../assets/wsk7.png"
import skirt15 from "../assets/wsk8.png"
import skirt16 from "../assets/wsk9.png"
import skirt17 from "../assets/wsk10.png"
import skirt18 from "../assets/wsk11.png"
import skirt19 from "../assets/wsk12.png"
import jacket from "../assets/jacket1.png"
import jacket2 from "../assets/jacket2.png"
import jacket3 from "../assets/jacket3.png"
import jacket6 from "../assets/jacket11.jpeg"
import jacket8 from "../assets/jj2.png"
import jacket7 from "../assets/jj1.png"
import jacket9 from "../assets/jj3.png"
import jacket16 from "../assets/jj10.png"
import jacket17 from "../assets/jj11.png"
import jacket10 from "../assets/jj4.png"
import jacket11 from "../assets/jj5.png"
import jacket12 from "../assets/jj6.png"
import jacket13 from "../assets/jj7.png"
import jacket14 from "../assets/jj8.png"
import jacket15 from "../assets/jj9.png"
import localForage from 'localforage';
const Nav = ({ text,isStuck,setIsStuck , amount , color, iconColor , cartColor,cartText , openNav, setOpenNav , showCart, setShowCart , caveatColor,setShowComponent}) => {
  const [data,setData] = useState([]) 
  const collections = {
  "All":[
        {name: "Essentials Backpack", src: bag20, bestSelling: true, price: 80000, date: "2024-09-10", size: ["One Size"], onSale: false, capacity: "20L", material: "Nylon", color: ["Black", "Grey"], amount: 50, count:1},
        {name: "Essentials Duffel Bag", src: bag3, bestSelling: false, price: 60000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "30L", material: "Polyester", color: ["Navy Blue", "Red"], amount: 30, count:1},
        {name: "Essentials Gym Bag", src: bag21, bestSelling: true, price: 70000, date: "2024-08-20", size: ["One Size"], onSale: false, capacity: "25L", material: "Nylon", color: ["Black", "Green"], amount: 40, count:1},
        {name: "Essentials Lightning Jersey", src: jerex16, bestSelling: true, price: 160000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color:"red and black",amount:1},
        {name: "Essentials Blaze Jersey", src: jerex17, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "white and blue",amount: 9,amount: 1},
        {name: "Essentials Frost Jersey", src: jerex6, bestSelling: false, price: 120000, date: "2024-08-10", size: ["M", "L", "XL"], onSale: false,color: "white and red",amount: 2},
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
   "Shirts": [
        {name: "Essentials T-Shirt", src: shirt, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials Polo Shirt", src: shirt2, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30, count:1},
        {name: "Essentials Long Sleeve Shirt", src: shirt3, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 40, count:1},
        {name: "Essentials Short Sleeve Shirt", src: shirt4, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20, count:1},
        {name: "Essentials Button Down Shirt", src: shirt5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
        {name: "Essentials Henley Shirt", src: shirt6, bestSelling: false, price: 28000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25, count:1},
        {name: "Essentials Flannel Shirt", src: shirt7, bestSelling: true, price: 42000, date: "2024-09-30", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["Red", "Black"], amount: 50, count:1},
        {name: "Essentials Dress Shirt", src: shirt8, bestSelling: false, price: 38000, date: "2024-08-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["White", "Light Blue"], amount: 30, count:1},
        {name: "Essentials Thermal Shirt", src: shirt9, bestSelling: true, price: 32000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Grey"], amount: 40, count:1},
        {name: "Essentials Raglan Shirt", src: shirt10, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25, count:1},
        {name: "Essentials Crew Neck Shirt", src: shirt11, bestSelling: true, price: 28000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45, count:1},
        {name: "Essentials V-Neck Shirt", src: shirt12, bestSelling: false, price: 26000, date: "2024-08-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20, count:1},
        {name: "Essentials Sweatshirt", src: shirt13, bestSelling: true, price: 38000, date: "2024-09-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Grey"], amount: 50, count:1},
        {name: "Essentials Hoodie", src: shirt14, bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 30, count:1},
        {name: "Essentials Fleece Shirt", src: shirt15,bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 30, count:1},
        {name: "Essentials Hoodie", src: shirt16, bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 30, count:1},
        {name: "Essentials Fleece Shirt", src: shirt17,bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 30, count:1},
        {name: "Essentials Hoodie", src: shirt18, bestSelling: false, price: 42000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 30, count:1},
   ],
   "Pants": [
      {name: "Essentials Jeans", src: pant, bestSelling: true, price: 50000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["Blue", "Black"], amount: 50, count:1},
      {name: "Essentials Trousers", src: pant2, bestSelling: false, price: 60000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30, count:1},
      {name: "Essentials Sweatpants", src: pant3, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Grey"], amount: 40, count:1},
      {name: "Essentials Joggers", src: pant4, bestSelling: false, price: 55000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Black", "Grey"], amount: 25, count:1},
      {name: "Essentials Chinos", src: pant5, bestSelling: true, price: 65000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["Beige", "Navy Blue"], amount: 45, count:1},
      {name: "Essentials Corduroy Pants", src: pant6, bestSelling: false, price: 70000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Brown", "Green"], amount: 30, count:1},
      {name: "Essentials Cargo Pants", src: pant7, bestSelling: true, price: 60000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "Grey"], amount: 40, count:1},
      {name: "Essentials Drawstring Pants", src: pant8, bestSelling: false, price: 45000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["White", "Grey"], amount: 25, count:1},
      {name: "Essentials Zipper Pants", src: pant9, bestSelling: true, price: 55000, date: "2024-09-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "Navy Blue"], amount: 45, count:1},
      {name: "Essentials Hiking Pants", src: pant10, bestSelling: false, price: 70000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Brown", "Green"], amount: 30, count:1},
      {name: "Essentials Snow Pants", src: pant11, bestSelling: true, price: 80000, date: "2024-10-01", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "White"], amount: 40, count:1},
      {name: "Essentials Water Pants", src: pant12, bestSelling: false, price: 60000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Blue", "Red"], amount: 25, count:1},
      {name: "Essentials Yoga Pants", src: pant13, bestSelling: true, price: 50000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Polyester", color: ["Black", "Grey"], amount: 45, count:1},
      {name: "Essentials Leggings", src: pant14, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45, count:1},
      {name: "Essentials Leggings", src: pant15, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45, count:1},
      {name: "Essentials Leggings", src: pant16, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45, count:1},
      {name: "Essentials Leggings", src: pant17, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45, count:1},
      {name: "Essentials Leggings", src: pant18, bestSelling: false, price: 40000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: true, material: "Cotton", color: ["Black", "Grey"], amount: 45, count:1},
   ],
   "Jerseys": [
          {name: "Essentials Maverick Jersey", src: essential3, bestSelling: false, price: 120000, date: "2024-08-15", size: ["S", "M", "L"], onSale: false,color:"blue and red", amount:1, count:1},
          {name: "Essentials Apex Jersey", src: jerex, bestSelling: true, price: 180000, date: "2024-12-05", size: ["S", "M", "L", "XL"], onSale: false, color: "white",amount: 1, count:1 },
          {name: "Essentials Storm Chaser Jersey", src: essential2, bestSelling: false, price: 90000, date: "2024-07-20", size: ["M", "L"], onSale: true,color: "green", amount: 1, count:1},
          {name: "Essentials Vintage Edition Jersey", src: essential1, bestSelling: true, price: 150000, date: "2024-07-05", size: ["S", "M", "L"], onSale: false,color: "brown and pink",amount:1 , count:1},
          {name: "Essentials Fusion Jersey", src: jerex2, bestSelling: false, price: 100000, date: "2024-09-10", size: ["M", "L", "XL"], onSale: true,color: "red",amount: 3},
          {name: "Essentials Velocity Jersey", src: jerex3, bestSelling: false, price: 140000, date: "2024-10-25", size: ["S", "M", "L"], onSale: false,color: "white,yellow and black", amount: 1, count:1},
          {name: "Essentials Thunder Jersey", src: jerex4, bestSelling: false, price: 110000, date: "2024-08-15", size: ["M", "L"], onSale: true,color: "red and black", amount: 1},
          {name: "Essentials Lightning Jersey", src: jerex16, bestSelling: true, price: 160000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color:"red and black",amount:1, count:1},
          {name: "Essentials Blaze Jersey", src: jerex17, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "white and blue",amount: 9,amount: 1, count:1},
          {name: "Essentials Frost Jersey", src: jerex6, bestSelling: false, price: 120000, date: "2024-08-10", size: ["M", "L", "XL"], onSale: false,color: "white and red",amount: 2, count:1},
          {name: "Essentials Heat Jersey", src: jerex7, bestSelling: true, price: 190000, date: "2024-12-05", size: ["S", "M", "L", "XL"], onSale: false,color: "white and black",amount: 1, count:1},
          {name: "Essentials Wave Jersey", src: jerex18, bestSelling: false, price: 100000, date: "2024-07-15", size: ["M", "L"], onSale: true,color: "black and brown",amount: 11, count:1},
          {name: "Essentials Surge Jersey", src: jerex11, bestSelling: false, price: 140000, date: "2024-09-25", size: ["S", "M", "L"], onSale: false,color: "light blue",amount: 1, count:1},
          {name: "Essentials Pulse Jersey", src: jerex12, bestSelling: true, price: 170000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color: "brown", amount:10, count:1},
          {name: "Essentials Strike Jersey", src: jerex13, bestSelling: false, price: 110000, date: "2024-08-10", size: ["M", "L"], onSale: true,color: "light brown",amount:5, count:1},
          {name: "Essentials Bolt Jersey", src: jerex14, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "ash", count:1},
          {name: "Essentials Utopia Jersey", src: jerex20, bestSelling: false, price: 130000, date: "2024-10-20", size: ["S", "M", "L"], onSale: true,color: "ash", count:1},
          {name: "Essentials Flux Jersey", src: jerex15, bestSelling: true, price: 160000, date: "2024-11-01", size: ["S", "M", "L", "XL"], onSale: false,color: "white", amount:2, count:1}
    ],
    "Bag": [
          {name: "Essentials Backpack", src: bag20, bestSelling: true, price: 80000, date: "2024-09-10", size: ["One Size"], onSale: false, capacity: "20L", material: "Nylon", color: ["Black", "Grey"], amount: 50, count:1},
          {name: "Essentials Duffel Bag", src: bag3, bestSelling: false, price: 60000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "30L", material: "Polyester", color: ["Navy Blue", "Red"], amount: 30, count:1},
          {name: "Essentials Gym Bag", src: bag21, bestSelling: true, price: 70000, date: "2024-08-20", size: ["One Size"], onSale: false, capacity: "25L", material: "Nylon", color: ["Black", "Green"], amount: 40, count:1},
          {name: "Essentials Tote Bag", src: bag4, bestSelling: false, price: 50000, date: "2024-06-10", size: ["Small", "Medium", "Large"], onSale: true, capacity: "10L", material: "Cotton", color: ["White", "Beige"], amount: 20, count:1},
          {name: "Essentials Sling Bag", src: bag5, bestSelling: true, price: 90000, date: "2024-09-25", size: ["One Size"], onSale: false, capacity: "15L", material: "Nylon", color: ["Black", "Grey"], amount: 60, count:1},
          {name: "Essentials Messenger Bag", src: bag8, bestSelling: false, price: 70000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "20L", material: "Polyester", color: ["Brown", "Tan"], amount: 35, count:1},
          {name: "Essentials Travel Bag", src: bag7, bestSelling: true, price: 100000, date: "2024-10-01", size: ["One Size"], onSale: false, capacity: "40L", material: "Nylon", color: ["Black", "Grey"], amount: 45, count:1},
          {name: "Essentials Laptop Bag", src: bag6, bestSelling: false, price: 80000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: true, capacity: "10L", material: "Polyester", color: ["Grey", "Blue"], amount: 25, count:1},
          {name: "Essentials Shoulder Bag", src: bag9, bestSelling: true, price: 90000, date: "2024-09-25", size: ["One Size"], onSale: false, capacity: "20L", material: "Nylon", color: ["Black", "Brown"], amount: 50, count:1},
          {name: "Essentials Crossbody Bag", src: bag10, bestSelling: false, price: 60000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, capacity: "10L", material: "Polyester", color: ["Red", "Pink"], amount: 30, count:1},
          {name: "Essentials Belt Bag", src: bag12, bestSelling: true, price: 70000, date: "2024-08-20", size: ["One Size"], onSale: false, capacity: "5L", material: "Nylon", color: ["Black", "Grey"], amount: 40},
          {name: "Essentials Clutch Bag", src: bag13, bestSelling: false, price: 50000, date: "2024-06-10", size: ["Small", "Medium", "Large"], onSale: true, capacity: "5L", material: "Cotton", color: ["White", "Beige"], amount: 20, count:1},
          {name: "Essentials Wallet Bag", src: bag14, bestSelling: true, price: 80000, date: "2024-09-10", size: ["One Size"], onSale: false, capacity: "5L", material: "Nylon", color: ["Black", "Brown"], amount: 50, count:1},
          {name: "Essentials Card Holder Bag", src: bag15, bestSelling: false, price: 60000, date: "2024-07-15", size: ["One Size"], onSale: false, capacity: "5L", material: "Nylon", color: ["Black", "Brown"], amount: 50, count:1},
          {name: "Essentials Card Holder Bag", src: bag22, bestSelling: false, price: 60000, date: "2024-07-15", size: ["One Size"], onSale: false, capacity: "5L", material: "Nylon", color: ["Black", "Brown"], amount: 50, count:1},
          {name: "Essentials Card Holder Bag", src: bag23, bestSelling: false, price: 60000, date: "2024-07-15", size: ["One Size"], onSale: false, capacity: "5L", material: "Nylon", color: ["Black", "Brown"], amount: 50, count:1},
          {name: "Essentials Card Holder Bag", src: bag24, bestSelling: false, price: 60000, date: "2024-07-15", size: ["One Size"], onSale: false, capacity: "5L", material: "Nylon", color: ["Black", "Brown"], amount: 50, count:1},
          {name: "Essentials Card Holder Bag", src: bag25, bestSelling: false, price: 60000, date: "2024-07-15", size: ["One Size"], onSale: false, capacity: "5L", material: "Nylon", color: ["Black", "Brown"], amount: 50, count:1},
    ],
    "Tops": [
        {name: "Essentials T-Shirt", src: tops, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50},
        {name: "Essentials Long Sleeve Shirt", src: tops4, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30},
        {name: "Essentials Hoodie", src: tops3, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Grey"], amount: 40},
        {name: "Essentials Sweater", src: tops2, bestSelling: false, price: 35000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Wool", color: ["Beige", "Navy Blue"], amount: 25},
        {name: "Essentials Tank Top", src: tops5, bestSelling: true, price: 25000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45},
        {name: "Essentials Polo Shirt", src: tops6, bestSelling: false, price: 32000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30},
        {name: "Essentials Tank Top", src: tops7, bestSelling: true, price: 25000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 45},
        {name: "Essentials Polo Shirt", src: tops8, bestSelling: false, price: 32000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30},
        {name: "Essentials Polo Shirt", src: tops9, bestSelling: false, price: 32000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30},
        {name: "Essentials Polo Shirt", src: tops10, bestSelling: false, price: 32000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30},
        {name: "Essentials Polo Shirt", src: tops11, bestSelling: false, price: 32000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30},
        {name: "Essentials Polo Shirt", src: tops12, bestSelling: false, price: 32000, date: "2024-09-05", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 30}
    ],
    "Dresses": [
    {name: "Essentials T-Shirt", src: dress, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials Polo Shirt", src: dress2, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30, count:1},
    {name: "Essentials Long Sleeve Shirt", src: dress3, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 40, count:1},
    {name: "Essentials Short Sleeve Shirt", src: dress4, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20, count:1},
    {name: "Essentials Button Down Shirt", src: dress5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
    {name: "Essentials Henley Shirt", src: dress6, bestSelling: false, price: 28000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25, count:1},
    {name: "Essentials Henley Shirt", src: dress7, bestSelling: false, price: 28000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25, count:1},
    {name: "Essentials T-Shirt", src: dress8, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials Polo Shirt", src: dress9, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30, count:1},
    {name: "Essentials Long Sleeve Shirt", src: dress10, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 40, count:1},
    {name: "Essentials Short Sleeve Shirt", src: dress11, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20, count:1},
    {name: "Essentials Button Down Shirt", src: dress12, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
    {name: "Essentials Henley Shirt", src: dress13, bestSelling: false, price: 28000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25, count:1},
    {name: "Essentials Henley Shirt", src: dress14, bestSelling: false, price: 28000, date: "2024-07-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Navy Blue"], amount: 25, count:1},
    {name: "Essentials Polo Shirt", src: dress15, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Navy Blue", "Red"], amount: 30, count:1},
    {name: "Essentials Long Sleeve Shirt", src: dress16, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 40, count:1},
    {name: "Essentials Short Sleeve Shirt", src: dress17, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: ["Grey", "Blue"], amount: 20, count:1},
    {name: "Essentials Button Down Shirt", src: dress18, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Light Blue"], amount: 45, count:1},
   
     ],
    "Bags":[
    {name: "Essentials T-Shirt", src: wbag19, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag2, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag3, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag4, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag5, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag6, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag7, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag8, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag9, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag10, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag11, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag12, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag13, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag14, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag15, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag16, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag17, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    {name: "Essentials T-Shirt", src: wbag18, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    ],
    "Bottoms":[
        {name: "Essentials T-Shirt", src: skirt, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt4, bestSelling: false, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt6, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt2, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt8, bestSelling: false, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt3, bestSelling: false, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt9, bestSelling: false, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt7, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt10, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt11, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt12, bestSelling: false, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt13, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt14, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt15, bestSelling: false, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt16, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt17, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt18, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
        {name: "Essentials T-Shirt", src: skirt19, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: ["White", "Black"], amount: 50, count:1},
    ],
    "New Arrivals": [ 
            {name: "Essentials Blackard", src:jacket, bestSelling: true, price: 20000, date: "2024-09-10", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Brown and Cream", amount: 50, count:1},
            {name: "Essentials Skel", src: jacket2, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Black and Red", amount: 30, count:1},
            {name: "Essentials V half", src: jacket3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Brown and Cream", amount: 20, count:1},
            {name: "Essentials PRC", src: jacket4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Brown", amount: 45, count:1},
            {name: "Essentials Pattern", src: jacket5, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Grey and White", amount: 45, count:1},
            {name: "Essentials light skim", src: ski10, bestSelling: true, price: 28000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "White", amount: 45, count:1},
            {name: "Essentials birth", src: ski12, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Light Pink", amount: 25, count:1},
            {name: "Essentials rebirth", src: ski13, bestSelling: true, price: 28000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Pink", amount: 45, count:1},
            {name: "Essentials WorldWide", src: jacket9, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Black", amount: 20, count:1},
            {name: "Essentials Starsigns", src: jacket10, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black and Light Blue", amount: 45, count:1},
            {name: "Essentials Spiderverse", src: jacket11, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Black and Red", amount: 45, count:1},
            {name: "Essentials pound skim", src: skim, bestSelling: false, price: 30000, date: "2024-08-15", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "dark purple", amount: 30, count:1},
            {name: "Essentials Lightening skim", src: skim2, bestSelling: true, price: 40000, date: "2024-09-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "light blue", amount: 40, count:1},
            {name: "Essentials rose skim", src: skim3, bestSelling: false, price: 25000, date: "2024-07-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "light pink", amount: 20, count:1},
            {name: "Essentials saphhire skim", src: skim4, bestSelling: true, price: 35000, date: "2024-08-20", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "dark pink", amount: 45, count:1},
            {name: "Essentials hue skim", src: skim5, bestSelling: true, price: 35000, date: "2024-10-25", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Light brown", amount: 45, count:1},       
            {name: "Essentials snow skim", src: ski3, bestSelling: true, price: 32000, date: "2024-09-15", size: ["Small", "Medium", "Large"], onSale: false, material: "Cotton", color: "Grey", amount: 40, count:1},
            {name: "Essentials bloods", src: ski4, bestSelling: false, price: 30000, date: "2024-08-10", size: ["Small", "Medium", "Large"], onSale: true, material: "Polyester", color: "Dark Red", amount: 25, count:1},        
        ],
    "Angels Speaks": [essential3, beanie4, beanie, jacket4],
    "Chrome": [jacket4, essential2, bag2, cap2]
  };
  const [cartCount, setCartCount] = useState(amount.length)

  localForage.config({
    driver: localForage.INDEXEDDB,
    name: 'myApp', 
    version: 1.0, 
  });
  const navigate = useNavigate()
  const handleNavigate = (e) => {
      const arrayName = e.target.innerText
      const dataArray = collections[arrayName]
      setData(dataArray);
  }

  useEffect(() => {
    if (data.length !== 0) {
      navigate("/essentials/essentialSection/1",{state:{data:data}})
    }
  },[data])

  
  useEffect(() => {
    const handleScroll = () => {
      const stickyElement = document.getElementById("sticky-element");
      const stickyOffset = stickyElement.offsetTop;
      if (window.scrollY  > stickyOffset) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    const loadWishlist = async () => {
      const storedCartlist = getCookie("cartItems");
      const parsedWishlist = JSON.parse(storedCartlist);
      if (storedCartlist) {
       setCartCount(parsedWishlist.length) 
      } 
    };
    loadWishlist();
    const intervalId = setInterval(loadWishlist, 1000); // Check for changes every 1 second
    return () => clearInterval(intervalId); 
  }, [])
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
 
  return (
    <nav
      id="sticky-element"
      className={`transition-all ${
        isStuck
          ? "sticky top-0  will-change-transform bg-white"
          : `${color}`
      } grid  lg:h-[105px] h-[60px]  w-[95%] mx-auto rounded-lg  z-30 relative top-[10px]`}
    >
      <div className="flex justify-center  lg:justify-end  w-full  border-b  h-full ">
        <div className="lg:w-[60%]  w-full flex flex-col justify-center  h-full">
          <div className="flex  lg:w-full lg:justify-end  w-[95%] mx-auto justify-between gap-6  lg:h-[80px] items-center  relative">
            <div className="lg:hidden" onClick={() => {
              setOpenNav(!openNav)
            }} >
              <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 32 32">
                <path fill="none" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h22M5 16h22M5 24h22"></path>
              </svg>
            </div>
            <h1
              className={`transition-all ${
                isStuck ? "text-black" : `text-${text}`
              } pl-4 text-[30px] lg:text-[60px] font-pacifico lg:mt-7 lg:absolute lg:top-[-40px] lg:left-0`}
            >
              essentials
            </h1>
            <ul className="flex lg:flex-row items-center gap-2 lg:pr-6">
              <Link className="hidden lg:block" to="/logins/1">
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 48 48">
                  <g fill={iconColor} fillRule="evenodd" clipRule="evenodd">
                    <path d="M24 27a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></path>
                    <path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20M33.63 39.21A17.9 17.9 0 0 1 24 42a17.9 17.9 0 0 1-9.831-2.92q-.36-.45-.73-.93A2.14 2.14 0 0 1 13 36.845c0-1.077.774-1.98 1.809-2.131c6.845-1 11.558-.914 18.412.035A2.08 2.08 0 0 1 35 36.818c0 .48-.165.946-.463 1.31q-.461.561-.907 1.082m3.355-2.744c-.16-1.872-1.581-3.434-3.49-3.698c-7.016-.971-11.92-1.064-18.975-.033c-1.92.28-3.335 1.856-3.503 3.733A17.94 17.94 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.015 12.466"></path>
                  </g>
                </svg>
                </li>
              </Link>
              
              <li onClick={() => setShowCart(!showCart)} className="relative">
                <div className={`${cartColor} top-[-3px]   grid place-content-center right-0 absolute rounded-full w-3 h-3`}>
                  <p className={`${cartText} text-[8px]`}>{cartCount ? cartCount : 0 }</p>  
                </div> 
                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24">
                  <path fill="none" stroke={iconColor} strokeLinecap="round" strokeWidth={1.5} d="M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.362 6h-.722c-3.175 0-4.763 0-5.874.922s-1.403 2.483-1.989 5.604c-.822 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555M9 6V5a3 3 0 1 1 6 0v1"></path>
                </svg>
              </li>
              <li onClick={() => setShowComponent(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                <path fill={iconColor} d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"></path>
              </svg>
              </li>
            </ul>
          </div>
          <div
            className={`transition-all lg:flex w-[40%] pb-2 justify-between text-sm hidden ${
              isStuck ? "text-black" : `text-${text}`
            }`}
          >
            <div>
              <p onClick={handleNavigate}>New Arrivals</p>
            </div>
            <div className="group relative ">
              <div className="flex gap-2 pointer items-center hover:underline">
                <p className={`text-[${text}]`}>Men</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 1024 1024">
                  <path fill={caveatColor} d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199"></path>
                </svg>
               
              </div>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={list}
                className="hidden group-hover:flex group-hover:absolute bg-white transition-all text-[#A9A9A9] duration-150 ease-out w-[150px] h-auto p-5 justify-around flex-col gap-3 rounded-md"
              >
                <motion.li
                  onClick={handleNavigate}
                  className="text-[13px] rounded-sm p-1"
                  whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                  variants={item}
                >
                  All
                </motion.li>
               
                <motion.li
                  onClick={handleNavigate}
                  className="text-[13px] rounded-sm p-1"
                  whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                  variants={item}
                >
                  Jerseys
                </motion.li>
                <motion.li
                  onClick={handleNavigate}
                  className="text-[13px] rounded-sm p-1"
                  whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                  variants={item}
                >
                  Bag
                </motion.li>
                <motion.li
                 onClick={handleNavigate}
                 className="text-[13px] rounded-sm p-1"
                 whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                 variants={item}
                >
                  Shirts
                </motion.li>
                 
                <motion.li
                  onClick={handleNavigate}
                  className="text-[13px] rounded-sm p-1"
                  whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                  variants={item}
                >
                  Pants
                </motion.li>
              </motion.ul>
            </div>
            <div className="group pointer relative">
              <div className="flex  gap-2 items-center hover:underline">
                <p className="">Women</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 1024 1024">
                  <path fill={caveatColor} d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199"></path>
                </svg>
              </div>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={list}
                className="hidden text-[#A9A9A9] group-hover:flex group-hover:absolute bg-white transition-all  duration-150 ease-out w-[150px] h-auto min-h-[180px] p-5 justify-around flex-col gap-2 rounded-md"
              >
                <motion.li
                  className="text-[13px] rounded-sm p-1"
                  whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                  variants={item}
                >
                  All
                </motion.li>
                <motion.li
                  onClick={handleNavigate}
                  className="text-[13px] rounded-sm p-1"
                  whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                  variants={item}
                >
                  Tops
                </motion.li>
                <motion.li
                  onClick={handleNavigate}
                  className="text-[13px] rounded-sm p-1"
                  whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                  variants={item}
                >
                  Bottoms
                </motion.li>
                <motion.li
                  onClick={handleNavigate}
                  className="text-[13px] rounded-sm p-1"
                  whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                  variants={item}
                >
                  Dresses
                </motion.li>
                <motion.li
                  onClick={handleNavigate}
                  className="text-[13px] rounded-sm p-1"
                  whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                  variants={item}
                >
                  Bags
                </motion.li>
                <motion.li
                  className="text-[13px] rounded-sm p-1"
                  whileHover={{ backgroundColor: "#ccc", color: "#000" }}
                  variants={item}
                >
                  Accesories
                </motion.li>
              </motion.ul>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
