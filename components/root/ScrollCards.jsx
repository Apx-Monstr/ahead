const ScrollCards = (props) =>{
    return (
        <div className=" w-[420px] h-auto p-10 bg-white shadow-lg rounded-xl text-xl">
            <p className="text-2xl font-semibold pb-8">
                {props.title}
            </p>
            {props.desc}
        </div>
    )
}

export default ScrollCards