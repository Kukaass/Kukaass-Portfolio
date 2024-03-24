import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/20/solid";

const Footer = () => {
    return(
        <div className="pt-[8rem] pb-[4rem] bg-[#02050a]" id="contact">
            <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem]">
                <div className="flex items-center space-x-6">
                    <div className="md:w-[6.6rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <MapIcon className="w-[3.4rem] h-[3.5rem] md:h-[4rem] md:w-[4rem] text-black"/>
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                            Address
                        </h1>
                        <p className="text-[18px] w-[90%] text-white opacity-80">
                            Lorem ipsum dolor
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
                        <p className="text-[18px] w-[90%] text-white opacity-80">
                            +639123456789 <br />
                            +639987654321
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
                        <p className="text-[18px] w-[90%] text-white opacity-80">
                            info@example.com <br />
                            info@example.edu.ph
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between">
                <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-0">
                    Kukaass - Dev 2024 | All Rights Reserved
                </div>
                <div className="flex items-center space-x-10">
                    <p className="text-[16px] text-white opacity-20">Terms & Conditions</p>
                    <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
                    <p className="text-[16px] text-white opacity-20">Sitemap</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;