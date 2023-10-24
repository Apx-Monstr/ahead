import MainButton from "./root/MainButton";
import SecButton from "./root/SecButton";

const button = ["Emotions", "Manifesto","Self-awareness test","Work with us"]

const Header = () =>{
    return (
        <div className="px-16 py-2 flex justify-between items-center sticky top-0 left-0 bg-white">
            <div className="h-16 bg-blue-500 w-16">
                Hello
            </div>
            <div className="flex gap-8 bg-primary">
                {
                    button.map((text, index)=>(
                        <SecButton key = {index} text = {text}/>
                    ))
                }
            </div>
            <MainButton text = "Download app"/>
        </div>
    )
}

export default Header;