import Roles from "./root/Roles";

const Vacancy = () =>{
    return (
        <div className="bg-white p-16">
            <p className="text-6xl font-semibold">
                Open vacancies
            </p>
            <div className="py-12 px-8 flex gap-8">
                <Roles/>
                <Roles/>
                <Roles/>
            </div>
        </div>
    )
}

export default Vacancy;