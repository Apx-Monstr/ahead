const MainButton = (props)=>{
    return (
        <div className="bg-black rounded-full p-6 py-3 text-white text-sm cursor-pointer">
            {props.text}
        </div>
    )
}

export default MainButton;