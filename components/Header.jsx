import MainButton from "./root/MainButton";
import SecButton from "./root/SecButton";
import Icon from "/public/icon.jpg"
const button = ["Emotions", "Manifesto","Self-awareness test","Work with us"]

const Header = () =>{
    return (
        <div className="px-16 py-4 flex justify-between items-center sticky top-0 left-0 bg-white z-50  ">
            <div className="h-16 bg-blue-500 w-16">
                <img src ={Icon.src} />
            </div>
            <div className="flex gap-8">
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