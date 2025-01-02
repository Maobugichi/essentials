const Footer = (top) => {
    return(
        <footer className={`lg:h-[70vh] h-[80vh]  bg-black text-white flex flex-col justify-center items-center lg:gap-10 relative ${top}`}>
            <div className="w-full lg:h-[70%]  h-full p-4 border-b border-[#ccc]  ">
            <div className=" w-[85%] text-[#ccc] flex lg:flex-row flex-col  lg:mt-3 ml-7 justify-between h-full ">
                <ul className="flex flex-col gap-5 ">
                    <li className="text-white">About US</li>
                    <li className="text-[13px]">essentials</li>
                </ul>
                <ul className="flex flex-col gap-4">
                    <li className="text-white">Policies</li>
                    <li className="text-[13px]">Exchange Policy</li>
                    <li className="text-[13px]">Refund Policy</li>
                    <li className="text-[13px]">Return Policy</li>
                    <li className="text-[13px]">Privacy Policy</li>
                </ul>
                 <ul className="flex flex-col gap-4">
                    <li className="text-white">Categories</li>
                    <li className="text-[13px]">kalakuta Republic</li>
                    <li className="text-[13px]">Olympiad</li>
                    <li className="text-[13px]">Summer Essentials</li>
                    <li className="text-[13px]">Heritage</li>
                    <li className="text-[13px]">Harmonious Discord</li>
                    <li className="text-[13px]">Chrome</li>
                 </ul>

                 <ul className="flex flex-col gap-4">
                     <li className="text-white"> Need Help?</li>
                     <li className="text-[13px]">FAQ</li>
                     <li className="text-[13px]">Contact Us</li> 
                 </ul>
            </div>
            </div>
           
            <ul className="flex text-[10px] ">
                <li>Powered by essentials</li>
                <li>© 2024, essentials</li>
            </ul>
        </footer>
    )
}

export default Footer