import Quantity from "./Quantity";
import deleteIcon from "../assets/delete.svg"
import localForage from 'localforage';
import { useState } from 'react';

const CartItem = ({src,name,price,color,quantity,setQuantity,handleRemoveItem,setCartItems}) => {
    const setCookie = (name, value, days) => {
      const expires = new Date(Date.now() + days * 86400 * 1000).toUTCString();
      document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    };
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

    function increases(e) {
        const loadWishlist = async () => {
          const storedWishlist = getCookie("cartItems")
            if (storedWishlist) {
              const parsedWishlist = JSON.parse(storedWishlist);
              const updatedWishlist = parsedWishlist.map((item) => {
                if (item.name === e.target.parentNode.parentNode.parentNode.id) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item; 
              });
              setCookie("cartItems", JSON.stringify(updatedWishlist), 30);
              setCartItems(updatedWishlist);
            }
        };
        loadWishlist();
    }

    function decreases(e) {
      const loadWishlist = async () => {
        const storedWishlist = getCookie("cartItems")
          if (storedWishlist) {
            const parsedWishlist = JSON.parse(storedWishlist);
            const updatedWishlist = parsedWishlist.map((item) => {
              if (item.name === e.target.parentNode.parentNode.parentNode.id) {
                return { ...item, quantity: item.quantity !== 1 ?  item.quantity - 1 : 1 };
              }
              return item; 
            });
            setCookie("cartItems", JSON.stringify(updatedWishlist), 30);
            setCartItems(updatedWishlist);
          }
      };
      loadWishlist();
      
    }
    return(
        <div className="flex  w-[85%] mx-auto items-center">
            <div className="flex items-center gap-4">
                <img id={src} className="w-16 ww h-14" src={src} alt="" />
                <div className="grid gap-1">
                    <span className="text-[11px]">Ashluxe</span>
                    <p className="text-[14px] w-[60%]">{name}</p>
                    <span className="text-[11px]">M / {color} / AW24</span>
                    <div id={name} className="flex gap-2 items-center">
                        <Quantity
                          key={src}
                          quantity={quantity}
                          setQuantity={setQuantity}
                          increases={increases}
                          decreases={decreases}
                        />
                         <img className="w-3 h-3"  onClick={handleRemoveItem} src={deleteIcon} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <p>₦{price}</p>
            </div>
        </div>
    )
}

export default CartItem