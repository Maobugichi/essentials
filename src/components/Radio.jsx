import { useRef } from "react"

const Radio = ({name,value,number,data,setPage1}) => {
    const refSpan = useRef(null)
    function filterColors(e) { 
     refSpan.current.classList.add("bg-black")
     const newData = data.filter(item => {
            console.log(e.target)
            if (item.color.toLowerCase().includes(e.target.innerText.toLowerCase())) {
                return item
            }
      })

      setPage1(newData)
    }
    return(
        <div className="flex mb-3  justify-between w-full mx-auto">
            <div onClick={filterColors} className="flex items-center gap-1">
                <input className="hidden" type="radio" name={name} value={value}/>
                <span ref={refSpan} className="ml-2 text-gray-700 flex items-center justify-center w-4 h-4 border border-black hover:bg-black transition-colors duration-700 ease-out rounded-full"/>
                <label className="text-[13px]" htmlFor="in stock">{value}</label>
            </div>
            <span className="text-[12px]">{number}</span>
        </div>   
    )
}

export default Radio