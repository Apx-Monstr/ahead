const SecButton = (props)=>{
    return (
        <div className="hover:bg-lightPurple hover:text-primary p-3 rounded-full py-1 text-base cursor-pointer">
            {props.text}
        </div>
    )
}

export default SecButton;