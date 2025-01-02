import RangeSlider from "./RangeSliders"
import { useEffect,useState } from "react";
import Radio from "./Radio";
import cancel from "../assets/cancel.svg"
import { AnimatePresence, motion } from "framer-motion";
const Filter = ({isOpen,setOpen, data, setPage1}) => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1000);
    const [animateX,setAnimateX] = useState()
    const screenWidth = window.innerWidth;
    useEffect(() => {
        if (screenWidth < 500) { 
            setAnimateX({
                x:10,
                inView:20
            })
        } else {
           setAnimateX( {
            x:-500,
            inView:350
        })
        }
       
    },[screenWidth])
    
    const [show,setShow] = useState({
        show1:false,
        show2:false,
        show3:false,
        show4:false
    })
    const [isRotated, setIsRotated] = useState({
        isRotated1:false,
        isRotated2:false,
        isRotated3:false,
        isRotated4:false
    });
    
    const products = [
        {
        item:"Trunks",
        amount:4
        }
        ,{
            item:" Tshirts",
            amount: 6
        }
        ,
        {
            item:"Vest",
            amount: 1 
        } ,
        {
            item: "Black Gold Red",
            amount: 1
        }
        ,
        {
            item:"Black Red",
            amount:1 
        },
            {
        item: "Black White",
        amount: 3
        },
        {
            item: " Tank Top",
            amount: 1
        },
        {
            item:"Tank & Bralets",
            amount:1
        },
        {
            item:" T-Shirts",
            amount: 42
        },
        {
            item: "T-Shirt",
            amount:5
        },
        {
            item: "T- Shirts",
            amount: 2
        },

        {
            item: " Sweatshirts",
            amount: 1
        },

        {
            item: "Sweatpants",
            amount: 9
        },
    
        {
            item: "Sports wears",
            amount: 1
        },
        {
            item: "Socks",
            amount: 6
        },
        {
            item: "Slides",
            amount: 10
        },
        {
            item: "Short",
            amount: 1
        },
        {
            item: "Shirts",
            amount: 4
        },
        {
            item: "Jacket Blue",
            amount: 1
        },
        {
            item:"Jean Blue",
            amount: 1
        },
        {
            item:"Multi Black",
            amount: 1
        },
        {
            item:"Shirts and Pants",
            amount : 1
        },
        {
            item:"Scarves",
            amount: 1
        },
        {
        item:"Polos",
        amount:2
        },
        {
            item:"Pants",
            amount:1
        },
        {
            item:"Long Sleeve Shirt",
            amount:1
        },
        {
            item:"Jerseys",
            amount:4
        },
        {
            item:"Jackets",
            amount:10
        },
        {
            item:"HOODIE",
            amount:1
        },
        {
            item:"Glasses",
            amount:8
        },
            {
                item:"Denim Shorts",
                amount:2
            },
            {
                item:" Denim",
                amount:1
            },
            {
                item:"Denim Jackets",
                amount:1
            },
            {
                item:"Bucket Hats",
                amount:3
            },
            {
                item:" Belt",
                amount:1
            },
            {
                item:"Beanies",
                amount:3
            },
            {
                item:"Bathing Robe",
            amount:1
            },
            {
            item:"Bags",
            amount:2
    }]
            
    const size = [
        {
        item:"OS",
        amount:31
        }
        ,{
            item:"2X",
            amount: 1
        }
        ,
        {
            item:"110mm",
            amount: 1 
        } ,
        {
            item: "105mm",
            amount: 1
        }
        ,
        {
            item:"100mm",
            amount:1 
        },
        {
            item: "95mm",
            amount: 1
        },
        {
            item: "90mm",
            amount: 1
        },
        {
            item:"60cm",
            amount:1
        },
        {
            item:"60CM",
            amount: 1
        },
        {
            item: "58cm",
            amount:1
        },
        {
            item: "58CM",
            amount: 1
        },

        {
            item: "3XL",
            amount: 99
        },

        {
            item: "28",
            amount: 1
        },
    
        {
            item: "30",
            amount: 1
        },
        {
            item: "47",
            amount: 2
        },
        {
            item: "32",
            amount: 1
        },
        {
            item: "46",
            amount: 10
        },
        {
            item: "45",
            amount: 10
        },
        {
            item: "34",
            amount: 1
        },
        {
            item:"44",
            amount: 10
        },
        {
            item:"43",
            amount: 10
        },
        {
            item:"42",
            amount : 10
        },
        {
            item:"36",
            amount: 1
        },
        {
        item:"41",
        amount:8
        },
        {
            item:"37",
            amount:4
        },
        {
            item:" 38",
            amount:7
        },
        {
            item:"39",
            amount:9
        },
        {
            item:"40",
            amount:8
        },
        {
            item:"HOODIE",
            amount:1
        },
        {
            item:"XXXL",
            amount:5
        },
            {
                item:" 2XL",
                amount:102
            },
            {
                item:"XXL",
                amount:18
            },
            {
                item:"XL",
                amount:129
            },
            {
                item:"L",
                amount:133
            },
            {
                item:"M",
                amount:132
            },
            {
             item:"S",
             amount:132
            },
            {
              item:"XS",
              amount:76
            },
            {
              item:"XXS",
              amount:2
     }]                 
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        }, [isOpen]);
        
       
    function filter(e) {
     let newPage;
      if (e.target.value == "bestSelling") {
         newPage = data.filter(item => {
             return item.bestSelling == true
         })
      } else if (e.target.value == "alphabetically") {
        newPage =  data.sort((a,b) => {
            return a.name.localeCompare(b.name)
         })
      } else if (e.target.value == "reverse") {
        newPage =  data.sort((a,b) => {
            return b.name.localeCompare(a.name)
         })
      } else if (e.target.value == "high") {
        newPage =  data.sort((a,b) => {
            return b.price - a.price
         })
      } else if (e.target.value == "low") {
        
         newPage =  data.sort((a,b) => {
            return a.price - b.price
         })
      } else if (e.target.value == "currentDate") {
        console.log("hi")
        newPage = data.sort((a, b) => new Date(a.date) - new Date(b.date));

      } else if (e.target.value == "oldDate") {
        newPage = data.sort((a, b) => new Date(b.date) - new Date(a.date));

      } 
       
      setPage1(newPage)
      setOpen(false)
    }

    
    return(
        <AnimatePresence>
           {isOpen ? <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            exit={{opacity:0}}
            className={`${isOpen ? "block" : "hidden"}  bg-opacity-50 fixed bg-gray-500 h-full z-50 w-full overlay-div`}>
                <motion.div 
                initial={{x:animateX.x}}
                animate={{x:-350}}
                whileInView={{x:0}}
                exit={{x:-500}}
                className="lg:h-[95vh] h-[70%]  bg-white lg:w-[36%] w-[95%] mx-auto relative lg:mx-0 lg:left-6 rounded-xl lg:top-[20px] top-[10%] z-50 ">
                    <div className="p-3 h-full flex flex-col gap-3">
                        <div className="flex justify-between w-[90%] mt-5 mx-auto">
                            <p>Filter and sort</p>
                            <svg onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 2048 2048"><path fill="currentColor" d="m1115 1024l690 691l-90 90l-691-690l-691 690l-90-90l690-691l-690-691l90-90l691 690l691-690l90 90z"></path></svg>
                        </div>
                        <div>
                            <form className=" h-[400px] overflow-y-scroll w-full flex flex-col gap-7 scrollable-element" action="">
                                <fieldset className="mx-auto w-[85%] p-3 border">
                                    <legend className="bg-white">Sort by</legend>
                                    <select onChange={filter} className="w-full" name="cars" id="cars">
                                        <option value="volvo">Feaured</option>
                                        <option  value="bestSelling">Best selling</option>
                                        <option value="alphabetically">Alphabetically A - Z</option>
                                        <option value="reverse">Alphabetically Z - A</option>
                                        <option value="high">Price,high to low</option>
                                        <option value="low">Price,low to high</option>
                                        <option value="currentDate">Date,old to new</option>
                                        <option value="oldDate">Date,new to old</option>
                                    </select>
                                </fieldset>

                                <div className=" w-[85%] mx-auto  flex flex-col gap-2 ">
                                    <div className="flex justify-between">
                                        <p className="text-sm">Price</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="13px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7"></path></svg>
                                    </div>
                                    <div className="flex h-[40px]  w-full justify-between ">
                                        <div className="h-full w-[45%] relative border">
                                        <span className="absolute left-2 top-[5px]">₦</span>
                                        <input className="h-full w-full pl-7" value={minValue} type="text" />
                                        </div>
                                        <span className="mt-2">
                                            -
                                        </span>
                                    
                                        <div className="h-full w-[45%] relative border">
                                        <span className="absolute left-2 top-[5px]">₦</span>
                                        <input className="h-full w-full pl-7" value={maxValue} type="text" />
                                        </div>
                                    </div>
                                    <RangeSlider
                                        setMinValue={setMinValue}
                                        setMaxValue={setMaxValue}
                                        minValue={minValue}
                                        maxValue={maxValue}
                                    />
                                </div>

                                <div className="w-[85%]  mx-auto flex flex-col gap-3">
                                    <div  onClick={() => {
                                        setShow(prev => {
                                            return {
                                                ...prev,
                                                show1:!prev.show1
                                            }
                                        })

                                        setIsRotated(prev => {
                                            return {
                                                ...prev,
                                                isRotated1:!prev.isRotated1
                                            }
                                        })
                                    }} className="flex w-full ml-2 mx-auto justify-between">
                                        <span className="text-[13px] ">Availability</span>
                                        <motion.svg
                                            initial={{ rotate: 0 }}
                                            animate={isRotated.isRotated1 ? { rotate: 135 } : { rotate: 0 }}
                                            transition={{ duration: 1 }}
                                            className="w-5" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12 5.5a.5.5 0 0 1 .5.5v5.5H18a.5.5 0 0 1 0 1h-5.5V18a.5.5 0 0 1-1 0v-5.5H6a.5.5 0 0 1 0-1h5.5V6a.5.5 0 0 1 .5-.5"></path>
                                        </motion.svg>
                                    </div>
                                    <motion.div
                                      initial={{opacity:0}}
                                      whileInView={{opacity:1}}
                                      exit={{opacity:0}}
                                      className={show.show1 ? "text-[12px] block" : "text-0 hidden"}
                                    >
                                        <Radio
                                        name="Availability"
                                        value="In stock"
                                        number="59"
                                        />

                                        <Radio
                                        name="Availability"
                                        value="Out of stock"
                                        number="30"
                                        />
                                        
                                    </motion.div>
                                </div>
                                <div className="w-[85%]  mx-auto flex flex-col gap-3">
                                    <div  onClick={() => {
                                        setShow(prev => {
                                            return {
                                                ...prev,
                                                show2:!prev.show2
                                            }
                                        })
                                        setIsRotated(prev => {
                                            return {
                                                ...prev,
                                                isRotated2:!prev.isRotated2
                                            }
                                        })
                                    }}  className="flex w-full ml-2 mx-auto justify-between">
                                        <span className="text-[13px]">Colors</span>
                                            <motion.svg
                                                initial={{ rotate: 0 }}
                                                animate={isRotated.isRotated2 ? { rotate: 135 } : { rotate: 0 }}
                                                transition={{ duration: 1 }}
                                                className="w-5" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M12 5.5a.5.5 0 0 1 .5.5v5.5H18a.5.5 0 0 1 0 1h-5.5V18a.5.5 0 0 1-1 0v-5.5H6a.5.5 0 0 1 0-1h5.5V6a.5.5 0 0 1 .5-.5"></path>
                                            </motion.svg>
                                    
                                    </div>
                                    <motion.div
                                       initial={{opacity:0}}
                                       whileInView={{opacity:1}}
                                       exit={{opacity:0}}
                                       className={show.show2 ? "text-[12px] block" : "text-0 hidden"}
                                    >
                                        {data.map(item => {
                                            return(
                                                <Radio
                                                 name="colors"
                                                 value={item.color}
                                                 number={item.amount}
                                                 data={data}
                                                 setPage1={setPage1}
                                                />
                                            )
                                        })}
                                    </motion.div>
                                
                                </div>

                                <div className="w-[85%]  mx-auto grid gap-3">
                                    <div  onClick={() => {
                                        setShow(prev => {
                                            return {
                                                ...prev,
                                                show3:!prev.show3
                                            }
                                        })
                                        setIsRotated(prev => {
                                            return {
                                                ...prev,
                                                isRotated3:!prev.isRotated3
                                            }
                                        })
                                    }} className="flex w-full ml-2 mx-auto justify-between">
                                        <span className="text-[13px] ">Product type</span>
                                        <motion.svg
                                            initial={{ rotate: 0 }}
                                            animate={isRotated.isRotated3 ? { rotate: 135 } : { rotate: 0 }}
                                            transition={{ duration: 1 }}
                                            className="w-5" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12 5.5a.5.5 0 0 1 .5.5v5.5H18a.5.5 0 0 1 0 1h-5.5V18a.5.5 0 0 1-1 0v-5.5H6a.5.5 0 0 1 0-1h5.5V6a.5.5 0 0 1 .5-.5"></path>
                                        </motion.svg>
                                        
                                    </div>
                                    <motion.div
                                        initial={{opacity:0}}
                                        whileInView={{opacity:1}}
                                        exit={{opacity:0}}
                                        className={show.show3 ? "text-[12px] block" : "text-0 hidden"}
                                    >
                                        {
                                        products.map(product => {
                                            return(
                                                <Radio
                                                name="Product"
                                                value={product.item}
                                                number={product.amount}
                                                />
                                            )
                                        })
                                        }
                                    </motion.div>
                                </div>

                                <div className="w-[85%]  mx-auto grid gap-3">
                                    <div onClick={() => {
                                        setShow(prev => {
                                            return {
                                                ...prev,
                                                show4:!prev.show4
                                            }
                                        })

                                        setIsRotated(prev => {
                                            return {
                                                ...prev,
                                                isRotated4:!prev.isRotated4
                                            }
                                        })
                                    }} className="flex w-full ml-2 mx-auto justify-between">
                                        <span className="text-[13px]">Size</span>
                                        <motion.svg
                                                initial={{ rotate: 0 }}
                                                animate={isRotated.isRotated4 ? { rotate: 135 } : { rotate: 0 }}
                                                transition={{ duration: 1 }}
                                                className="w-5" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M12 5.5a.5.5 0 0 1 .5.5v5.5H18a.5.5 0 0 1 0 1h-5.5V18a.5.5 0 0 1-1 0v-5.5H6a.5.5 0 0 1 0-1h5.5V6a.5.5 0 0 1 .5-.5"></path>
                                        </motion.svg>
                                    </div>
                                <motion.div
                                   initial={{opacity:0}}
                                   whileInView={{opacity:1}}
                                   exit={{opacity:0}}
                                   className={show.show4 ? "text-[12px] block" : "text-0 hidden"}
                                >
                                    {
                                    size.map(size => {
                                        return(
                                            <Radio
                                            name="Product"
                                            value={size.item}
                                            number={size.amount}
                                            />
                                        )
                                    })
                                    }
                                </motion.div>
                                </div>

                            </form>
                        </div>
                        <div className="flex justify-between w-[85%] mx-auto">
                            <button className="bg-transparent border border-black text-black h-[50px] w-[48%]">Clear All</button>
                            <button className="bg-black text-white h-[50px] w-[48%]">View</button>
                        </div>
                    </div>
                </motion.div>
            </motion.div> : null }
        </AnimatePresence>
     
    )
}
export default Filter