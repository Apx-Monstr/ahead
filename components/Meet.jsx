import miniGhost from "/public/minighost.png"
import sunflower from "/public/sunflower.svg"
import flower from "/public/Flower.svg"
import leaf from "/public/leaf.svg"
import ripple from "/public/Ripple.svg"
const Meet = ()=>{
    return (
        <div className="bg-white p-12 z-10 relative">
            <img src={flower.src} alt="" className="absolute top-2 right-32 z-30"/>
            <div className="bg-lightCream rounded-3xl p-12 relative overflow-hidden z-10">
                <div className="h-96 bg-lightRed absolute bottom-16 -left-32 aspect-square rounded-full -z-10"></div>
                <img src={leaf.src} alt="" className="absolute top-32 right-32 -rotate-12"/>
                <img src={leaf.src} alt="" className="absolute bottom-64 left-1/3 -rotate-12"/>
                <div className="my-24 z-10">
                    <div className="text-2xl px-8">
                        Built out of Frustation 
                        <p className="text-7xl font-semibold pt-4">
                            Meet the ahead app
                        </p>
                    </div>
                    <div className="flex gap-8 py-16">
                        <div className="flex-1  flex items-center justify-center">
                            <div className="bg-white aspect-square rounded-full h-72 flex items-center justify-center border-[16px] border-gray-100 relative">
                                <div className=" w-16 h-16 left-[calc(50%-2rem)] -top-8 absolute flex items-center justify-center ">
                                    <p className="z-10 text-white">
                                        1
                                    </p>
                                    <img src={sunflower.src} alt="" className="h-full w-full absolute top-0 left-0"/>
                                </div>
                                <img src = {miniGhost.src} className="h-36"/>
                            </div>
                        </div>
                        <div className=" flex-1 text-3xl p-12">
                            A personalised pocket coach that provides bite-sized, science driven tools to boost emotional intelligence.
                            <br /><br />Think of it as a pocket cheerleader towards a better, more fulfilling.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Meet;