import blueGhost from "/public/blueGhost.svg"

const SelfImprove = ()=>{
    return (
        <div className="bg-white p-24 text-2xl">
            Wrong with self imporovement and how we are fixing it
            <p className="text-7xl font-semibold leading-loose pb-16 relative w-fit">
                Self Improvement. Ugh...
                <img src = {blueGhost.src} className="absolute top-8 -right-16 rotate-12 h-16"/>
            </p>
            <div className="w-full relative">
                <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#fffffffb] via-[#ffffffc9] to-transparent z-30"></div>
                <div className="w-[70%] mx-auto border-l-2 border-primary z-10">
                    <div className=" px-12 text-2xl relative font-normal pb-12">
                        <div className="absolute h-8 w-8 bg-lightPurple rounded-full flex items-center justify-center top-0 -left-4 animate-ping">
                        </div>
                        <div className="absolute h-8 w-8 bg-lightPurple rounded-full flex items-center justify-center top-0 -left-4">
                            <div className="h-4 w-4 rounded-full bg-primary animate-none"></div>
                        </div>
                        <p className="text-4xl font-semibold pb-4">
                            It`s not as easy as 1-2-3.
                        </p>
                        The journey of change may be long, but our sessions are quick. We get
                        to the point and tell you what you want to know (and nothing else).
                    </div>
                    <div className=" px-12 text-2xl relative font-normal pb-12">
                        <div className="absolute h-4 w-4 bg-primary rounded-full flex items-center justify-center top-3 -left-2">
                        </div>
                        <p className="text-4xl font-semibold pb-4">
                            Old habits are hard to break.
                        </p>
                        And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.
                    </div>
                    <div className=" px-12 text-2xl relative font-normal pb-12">
                        <div className="absolute h-4 w-4 bg-primary rounded-full flex items-center justify-center top-3 -left-2">
                        </div>
                        <p className="text-4xl font-semibold pb-4">
                        You and your motivation don`t have a long-term relationship.
                        </p>
                        Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals..
                    </div>
                    <div className=" px-12 text-2xl relative font-normal pb-12">
                        <div className="absolute h-4 w-4 bg-primary rounded-full flex items-center justify-center top-3 -left-2">
                        </div>
                        <p className="text-4xl font-semibold pb-4">
                            Books just don`t offer practical solution
                        </p>
                        The journey of change may be long, but our sessions are quick. We get
                        to the point and tell you what you want to know (and nothing else).
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelfImprove;