import Icon from "/public/icon.jpg";
import DownloadApp from "/public/DownloadApp.svg"
const Footer = (props) =>{
    return (
        <div className="flex flex-col justify-center items-center p-12 border-t border-t-gray-200 gap-10 font-medium">
            <div>
                <img className="mx-auto" src = {Icon.src}/>
                <p className="text-4xl font-semibold text-primary py-2">
                    ahead
                </p>
            </div>
            <div className="flex gap-12">
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-skyBlue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span>Auguststraβe 26, 10117 Berlin</span>
                </div>
                <a href="mailto:hi@ahead-app.com">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="p-2 rounded-full bg-skyBlue">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <span>hi@ahead-app.com</span>
                    </div>
                </a>
            </div>
            <img className="h-12 cursor-pointer" src={DownloadApp.src}/>
            <div className="text-base text-gray-500">
                &copy; 2022 Ahead app. All right reserved
            </div>
        </div>
    )
}

export default Footer;