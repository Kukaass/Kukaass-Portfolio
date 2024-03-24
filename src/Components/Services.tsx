import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";

const Services = () => {
    return(
        <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]" id="services">
            <p className="heading">
                My <span className="text-yellow-400">Services</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] text-white">
                <div data-aos="fade-right">
                    <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
                        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Frontend
                        </h1>
                        <p className="text-[13px] text-[#d3d2d2] font-normal">
                            Our front-end development services are designed to elevate your online presence by focusing on three key pillars: stunning visual design, seamless user experience, and robust functionality. 
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                    <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
                        <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Backend
                        </h1>
                        <p className="text-[13px] text-[#d3d2d2] font-normal">
                            Developing server-side logic and functionality using languages like Node JS, PHP Laravel, MySQL, MongoDB, and Javascript to handle requests, process data, and interact with databases.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="500">
                    <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
                        <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Fullstack
                        </h1>
                        <p className="text-[13px] text-[#d3d2d2] font-normal">
                            Full-stack development using the programming languages including JavaScript frameworks like React and Node.js for frontend and backend development, MongoDB and MySQL for Database.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;