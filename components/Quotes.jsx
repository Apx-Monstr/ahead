import Card from "./root/Card";

const Quotes = () =>{
    return (
        <div className=" py-12">
            <div className="text-6xl font-semibold px-16 pb-16">
                Does this sound familiar...
            </div>
            <div className="flex bg-red-500 overflow-hidden gap-12 items-center" >
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