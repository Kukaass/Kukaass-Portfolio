import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/20/solid";

const Footer = () => {
    return(
        <div className="pt-[8rem] pb-[4rem] bg-[#02050a]" id="contact">
            <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem] cursor-pointer">
                <div className="flex items-center space-x-6">
                    <div className="md:w-[6.6rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <MapIcon className="w-[3.4rem] h-[3.5rem] md:h-[4rem] md:w-[4rem] text-black"/>
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                            Address
                        </h1>
                        <p className="text-[14px] w-[90%] text-white opacity-80">
                            Libtangin, Gasan, Marinduque
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="md:w-[6.6rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <DevicePhoneMobileIcon className="w-[3.4rem] h-[3.5rem] md:h-[4rem] md:w-[4rem] text-black"/>
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                            Contact
                        </h1>
                        <p className="text-[18px] w-[90%] text-white opacity-80 footer-link">
                            +639701294465
                        </p>
                        <p className="text-[18px] w-[90%] text-white opacity-80 footer-link">
                            +639641783807
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="md:w-[6.6rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <EnvelopeIcon className="w-[3.4rem] h-[3.5rem] md:h-[4rem] md:w-[4rem] text-black"/>
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                            Email
                        </h1>
                        <p className="text-[18px] w-[90%] text-white opacity-80 footer-link">
                            Kukas@example.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between">
                <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20 cursor-pointer">
                    Kukaass - Dev 2024 | All Rights Reserved
                </div>
                <div className="flex items-center space-x-10">
                    <p className="text-[16px] text-white opacity-20 hover:opacity-45 cursor-pointer">Terms & Conditions</p>
                    <p className="text-[16px] text-white opacity-20 hover:opacity-45 cursor-pointer">Privacy Policy</p>
                    <p className="text-[16px] text-white opacity-20 hover:opacity-45 cursor-pointer">Sitemap</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;