const NewsLetter = () => {
    return(
        <div className=" flex lg:flex-row flex-col h-1/2 w-full gap-5">
            <div className="lg:w-1/2 w-full grid">
                <h3 className="text-2xl">Join Our Community</h3>
                <p className="w-[70%] lg:text-sm text-[12px]">Be the first to get the latest updates on our promotion campaigns, products and services.</p>
            </div>
            <form className="lg:w-1/2 flex gap-5">
                <input  placeholder="email@eample.com" className="w-[70%] h-12 pl-7 border-2 border-[#ccc]" type="email" />
                <button className="w-[160px] text-white bg-black h-12" type="submit">
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default NewsLetter