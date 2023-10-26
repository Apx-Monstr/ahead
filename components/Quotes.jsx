import Card from "./root/Card";
import redGhost from "/public/redGhost.svg"
const Quotes = () =>{
    return (
        <div className=" py-12">
            <div className="text-6xl font-semibold px-16 pb-16 relative w-fit">
                Does this sound familiar...
                <img src = {redGhost.src} className="absolute top-0 -right-4 -rotate-6 h-16"/>
            </div>
            <div className="flex bg-red-500 overflow-hidden gap-12 items-center py-12" >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Quotes;