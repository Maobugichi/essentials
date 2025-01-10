import Category from "./Category"

const SideCard = ({men,women,essential,essential2}) => {
    return(
        <section className="h-[100vh] relative top-[-200px]">
            <div className="h-full flex lg:flex-row flex-col w-[95%] gap-7 mx-auto">
                <Category
                gender="Men"
                men={men}
                essential={essential}
                />
                <Category
                gender="Women"
                men={women}
                essential2={essential2}
                />
            </div>
        
        </section>
    )
}

export default SideCard