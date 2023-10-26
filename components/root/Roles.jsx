import MainButton from "./MainButton";

const Roles =(props)=>{
    return (
        <div className="group rounded-xl bg-lightCream flex-1 p-8 h-min">
            <p className="text-2xl font-semibold pb-3">
                {props.role.title}
            </p>
            <ul role="list" className="flex flex-col gap-2 list-disc pl-4 text-lg">
                {props.role.desc.map((des, index) => (
                    <li key = {index}>{des}</li>
                ))}
            </ul>
            <div className="group-hover:block pt-8 hidden">
                <MainButton text = "See Details"/>
            </div>
        </div>
    )
}

export default Roles;