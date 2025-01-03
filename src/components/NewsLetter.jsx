const NewsLetter = () => {
    return(
        <div className=" flex lg:flex-row flex-col lg:h-1/2 h-[90%] w-full gap-5  text-center lg:text-left">
            <div className="lg:w-1/2 w-full grid">
                <h3 className="text-2xl">Join Our Community</h3>
                <p className="lg:w-[70%] w-[90%] mx-auto lg:text-sm text-[12px] text-[#212121cc] lg:mx-0">Be the first to get the latest updates on our promotion campaigns, products and services.</p>
            </div>
            <form className="lg:w-1/2 flex lg:flex-row gap-5 flex-col w-[90%] mx-auto">
                <input  placeholder="email@eample.com" className="lg:w-[70%] w-full h-12 pl-7 border-2 border-[#ccc]" type="email" />
                <button className="lg:w-[160px] w-full text-white bg-black h-12" type="submit">
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default NewsLetter