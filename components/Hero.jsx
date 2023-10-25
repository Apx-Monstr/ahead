import fonts from "@/app/fonts";
import downloadApp from "/public/DownloadApp.svg"
const Hero = (props) =>{
    return (
        <div className="bg-white p-12 pt-4">
            <div className="w-full h-screen max-h-[1080px] rounded-3xl bg-lightPurple">
                <div className="flex flex-col justify-center h-full p-12">
                    <p className="text-lg leading-loose">
                        Ahead app
                    </p>
                    <div className={"text-7xl max-w-[50%] " + fonts.outfitSemi.className}>
                        Master your Life <br /> by mastering <br />emotions
                    </div>
                    <div className="flex gap-8 py-8 items-center">
                        <img className="h-12 self-start cursor-pointer" src = {downloadApp.src}/>
                        <div className="text-sm">
                            <div className="flex gap-1 pb-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD134"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD134"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD134"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD134"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD134"/>
                                </svg>
                            </div>
                            100+ AppStore Reviews
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;