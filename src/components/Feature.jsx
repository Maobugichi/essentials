const Feature = ({src,header,text}) => {
    return(
        <div className=" lg:h-[60%] h-[30%] lg:w-[25%] w-[95%] text-center lg:grid  lg:place-items-center flex flex-col gap-4 items-center">
            <img className="w-8" src={src} alt="" />
            <h4 className="text-lg">{header}</h4>
            <p className="text-sm w-[70%] mx-auto">{text}</p>
        </div>
    )
}

export default Feature