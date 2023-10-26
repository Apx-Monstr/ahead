import fonts from "@/app/fonts";

const BeatsText = () =>{
    return (
        <div className=" p-16 flex gap-12 text-2xl py-24 my-8">
            <div className={"text-4xl flex-1 " + (fonts.outfitSemi.className)}>
                EQ beats IQ
            </div>
            <div className=" flex-1">
                People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships
            </div>
            <div className=" flex-1">
                They are more successful in their pursuits and making for inspiring leaders. According to science, they earn $29k a year
            </div>
        </div>
    )
}

export default BeatsText;