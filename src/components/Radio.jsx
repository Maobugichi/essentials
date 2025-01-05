import { useRef } from "react"

const Radio = ({name,value,number,data,setPage1,setOpen,isOpen}) => {
    const refSpan = useRef(null)
    //console.log(data)
    function filterColors(e) { 
     
     const newData = data.filter(item => {
            if (item.color.toLowerCase().includes(e.target.innerText.toLowerCase())) {
                refSpan.current.classList.add("bg-black")
                return item
            }
            setOpen(!isOpen)
      })
      
      setPage1(newData)
    }
    return(
        <div className="flex mb-3  justify-between w-full mx-auto">
            <div  className="flex items-center gap-1">
                <input className="hidden" type="radio" name={name} value={value}/>
                <span ref={refSpan} className="ml-2 text-gray-700 flex items-center justify-center w-4 h-4 border border-black hover:bg-black transition-colors duration-700 ease-out rounded-full"/>
                <label onClick={filterColors} className="text-[13px]" htmlFor="in stock">{value}</label>
            </div>
            <span className="text-[12px]">{number}</span>
        </div>   
    )
}

export default Radio