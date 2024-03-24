import { ChatBubbleLeftRightIcon, UserCircleIcon } from "@heroicons/react/20/solid";

const Blog = () => {
    return(
        <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[4rem]" id="blog">
            <h1 className="heading">
                My <span className="text-yellow-400">Blog</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
                <div data-aos="fade-right">
                    <div className="w-[100%] relative h-[400px]">
                        <img src="/images/blog3.jpg" alt="blog" className="object-cover h-[400px] w-[500px]"/>
                    </div>
                    <div className="w-[95%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                        <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                            January 1, 2024
                        </div>
                        <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                            <div className="flex items-center space-x-3">
                                <UserCircleIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5] cursor-pointer"/>
                                <p className="text-white text-[13px] cursor-pointer">By Kukaas</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <ChatBubbleLeftRightIcon  className="w-[1.5rem] h-[1.5rem] text-[#55e7a5] mx-auto cursor-pointer"/>
                                <p className="text-white text-[13px] cursor-pointer">Comments(2)</p>
                            </div>
                        </div>
                        <p className="mt-[1rem] text-white font-semibold text-[18px]">React Js Fullstack Developer</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                    <div className="w-[100%] relative h-[400px]">
                        <img src="/images/blog2.jpg" alt="blog" className="object-cover h-[400px] w-[500px]"/>
                    </div>
                    <div className="w-[95%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                        <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                            February 1, 2024
                        </div>
                        <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                            <div className="flex items-center space-x-3">
                                <UserCircleIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5] cursor-pointer"/>
                                <p className="text-white text-[13px] cursor-pointer">By Pep</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <ChatBubbleLeftRightIcon  className="w-[1.5rem] h-[1.5rem] text-[#55e7a5] mx-auto cursor-pointer"/>
                                <p className="text-white text-[13px] cursor-pointer">Comments(5)</p>
                            </div>
                        </div>
                        <p className="mt-[1rem] text-white font-semibold text-[18px]">Next Js Fullstack Developer</p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="500">
                    <div className="w-[100%] relative h-[400px]">
                        <img src="/images/blog1.jpg" alt="blog" className="object-cover h-[400px] w-[500px]"/>
                    </div>
                    <div className="w-[95%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                        <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                            January 7, 2024
                        </div>
                        <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                            <div className="flex items-center space-x-3">
                                <UserCircleIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5] cursor-pointer"/>
                                <p className="text-white text-[13px] cursor-pointer">By Ngungi</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <ChatBubbleLeftRightIcon  className="w-[1.5rem] h-[1.5rem] text-[#55e7a5] mx-auto cursor-pointer"/>
                                <p className="text-white text-[13px] cursor-pointer">Comments(3)</p>
                            </div>
                        </div>
                        <p className="mt-[1rem] text-white font-semibold text-[18px]">Angular Js Fullstack Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;