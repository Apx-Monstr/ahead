import fonts from "@/app/fonts";

const Hero = (props) =>{
    return (
        <div className="h-[calc(100vh-40px)] max-h-[1080px] bg-white p-12 pt-4">
            <div className="h-full w-full rounded-3xl bg-lightPurple">
                <div className={"text-7xl max-w-[50%] " + fonts.outfitSemi.className}>
                    Master your Life <br /> by mastering <br />emotions
                </div>
            </div>
        </div>
    )
}

export default Hero;