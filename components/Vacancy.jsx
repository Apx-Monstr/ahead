import Roles from "./root/Roles";
const roles = [
    {
        title:"Senior Full-Stack Engineer",
        desc:[
            "Full-time position",
            "Berlin or remote",
            "€65-85k, 0.5-1.50% equity share options",
        ]
    },
    {
        title:"Senior Designer",
        desc:[
            "Full-time position",
            "Berlin or remote",
            "€65-85k, 0.5-1.50% equity share options",
        ]
    },
    {
        title:"Superstar Intern",
        desc:[
            "Full-time position",
            "Berlin or remote",
            "€65-85k, 0.5-1.50% equity share options",
        ]
    },
]
const Vacancy = () =>{
    return (
        <div className="bg-white p-16">
            <p className="text-6xl font-semibold">
                Open vacancies
            </p>
            <div className="py-12 px-8 flex gap-8">
                {roles.map((role, index) => (
                    <Roles key={index} role={role} />
                ))}
            </div>
        </div>
    )
}

export default Vacancy;