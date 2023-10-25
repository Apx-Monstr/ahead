import sunflower from "/public/sunflower.svg"
const Rate = ()=>{
    return (
        <div className="bg-white p-12">
            <div className="p-16 bg-lightBlue rounded-2xl flex flex-col items-center text-2xl gap-12 py-24">
                <div className="text-center">
                    Let your friends, family, and co-workers (anonymously) rate your social skills.
                    <p className="text-6xl font-semibold pt-4">
                        Ever wondered what others think of you?
                    </p>
                </div>
                <div className="w-full px-16 pt-4 flex justify-between text-base py-8">
                    <div className="flex-1 text-center px-4 relative pt-8">
                        <div className="border-t-4 left-1/2 -top-1 w-1/2 border-dashed border-Brown absolute"></div>
                        <div className=" w-12 h-12 left-[calc(50%-1.5rem)] -top-6 absolute flex items-center justify-center ">
                            <p className="z-10 text-white">
                                1
                            </p>
                            <img src={sunflower.src} alt="" className="h-full w-full absolute top-0 left-0"/>
                        </div>
                        Answer questions on your social skills
                    </div>
                    <div className="flex-1 text-center px-4 relative pt-8">
                        <div className="border-t-4 left-0 -top-1 w-full border-dashed border-Brown absolute"></div>
                        <div className=" w-12 h-12 left-[calc(50%-1.5rem)] -top-6 absolute flex items-center justify-center">
                            <p className="z-10 text-white">
                                2
                            </p>
                            <img src={sunflower.src} alt="" className="h-full w-full absolute top-0 left-0"/>
                        </div>
                        Let others anonymously answer the same questions about you
                    </div>
                    <div className="flex-1 text-center px-4 relative pt-8">
                        <div className="border-t-4 right-1/2 -top-1 w-1/2 border-dashed border-Brown absolute"></div>
                        <div className=" w-12 h-12 left-[calc(50%-1.5rem)] -top-6 absolute flex items-center justify-center">
                            <p className="z-10 text-white">
                                3
                            </p>
                            <img src={sunflower.src} alt="" className="h-full w-full absolute top-0 left-0"/>
                        </div>
                        Find out where you and others see things the same way - and where not!
                    </div>
                </div>
                <div className="w-[900px] h-[300px] bg-white rounded-2xl shadow-2xl p-8 flex items-center">
                    <div className="h-0.5 w-full bg-gray-200 flex items-center">
                        <div className="flex-1">
                            <div className="bg-primary h-5 w-5 rounded-full relative">
                                <div className="bg-primary text-base rounded-lg h-auto px-4 py-2 absolute right-0 bottom-full my-2 text-white">
                                    You
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="bg-skyBlue h-5 w-5 rounded-full relative">
                                <div className="bg-skyBlue text-base rounded-lg h-auto px-4 py-2 absolute top-full my-2 text-white">
                                    Anonymous&nbsp;1
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="bg-Yellow h-5 w-5 rounded-full relative">
                                <div className="bg-Yellow text-base rounded-lg h-auto px-4 py-2 absolute bottom-full my-2 text-white">
                                    Anonymous&nbsp;2
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-end">
                            <div className="bg-Green h-5 w-5 rounded-full relative">
                                <div className="bg-Green text-base rounded-lg h-auto px-4 py-2 absolute top-full my-2 text-white">
                                    Anonymous&nbsp;3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rate;