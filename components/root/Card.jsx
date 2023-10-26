const Card = (props) =>{
    return (
        <div className={" min-w-[410px] max-h-fit max-w-min rounded-xl p-12 " + (props.classes)}>
            <p className="text-3xl p-0">
                {props.emoji}
                {/* &#128512; */}
            </p>
            <p className="font-medium text-lg py-2">
                {props.title}
            </p>
            <p className="opacity-80">
                {props.desc}
            </p>
        </div>
    )
}

export default Card;