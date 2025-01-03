import NewsLetter from "./NewsLetter"

const NewsLetterComponent = ({top , stop}) => {
    return(
        <section className={`h-[35vh] w-full ${top} ${stop} relative`}>
            <div className="h-full grid place-items-center w-[95%] mx-auto">
                <NewsLetter/>
            </div> 
        </section>
    )
}

export default NewsLetterComponent