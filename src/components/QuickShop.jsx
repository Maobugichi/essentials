import {useNavigate} from "react-router-dom"


const QuickShop = ({src,setShowCart}) => {
    const navigate = useNavigate()
    const handleNavigate = (e) => {
        navigate("/extraDetails/1",{state:{data:src}})
        setShowCart(false)
    }
    return(
        <div onClick={handleNavigate}  className="bg-white shadow-md w-[300px] h-[120px] flex items-center gap-5">
             <img className="h-[70%]" src={src} alt="" />
             <div>
                <div>
                    <p className="text-[12px]">Ashlexe Mens Varsity Jacket</p>
                    <span className="text-[13px]">₦1,280,000</span>
                </div>
                <span className="font-bold underline text-[12px]">Quick view</span>
             </div>
        </div>
       
    )
}

export default QuickShop