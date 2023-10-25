import miniGhost from "/public/minighost.png"

const Meet = ()=>{
    return (
        <div className="bg-white p-12 z-10">
            <div className="bg-lightCream rounded-2xl p-12 relative overflow-hidden z-10">
                <div className="h-96 bg-red-500 absolute bottom-8 -left-8 aspect-square rounded-full -z-10"></div>
                <div className="my-24 z-10">
                    <div className="text-2xl px-8">
                        Built out of Frustation 
                        <p className="text-7xl font-semibold pt-4">
                            Meet the ahead app
                        </p>
                    </div>
                    <div className="flex gap-8 py-16">
                        <div className="flex-1  flex items-center justify-center">
                            <div className="bg-white aspect-square rounded-full h-72 flex items-center justify-center border-[16px] border-gray-100">
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