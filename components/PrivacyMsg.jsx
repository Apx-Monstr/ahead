import MainButton from "./root/MainButton"

const PrivacyMsg = () =>{
    return (
        <div className="bg-white p-32 flex items-center flex-col gap-4 text-2xl">
            We take privacy seriously
            <p className="text-4xl font-semibold">
                Before you get started
            </p>
            <p className="text-3xl text-center">
                We won`t share your answers with anyone (and won`t tell <br /> you which friend said what about you)
            </p>
            <MainButton text = "Start a test"/>
            <p className="text-base">
                Take only 5 mins
            </p>
        </div>
    )
}

export default PrivacyMsg