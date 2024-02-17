import { Slider } from "./Slider";

export function MiddleSection() {
    return (
        <div>
            <div className="flex items-center justify-between mx-10 my-36 ">
                {/* text */}
                <div className="flex items-center flex-col max-w-[600px] gap-6 my-20">
                    <h1 className="text-[#647B4E]  text-lg"> WELCOME TO 24 CARROTS</h1>
                    <h1 className="text-8xl text-[#1A4122] text-center font-caslon ">
                        Remarkable Catering & Events
                    </h1>
                    <p className="text-[#647B4E]  text-lg text-center">24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.</p>
                    <button className="px-4 py-3 hover:bg-orange-500 text-white bg-orange-700 rounded-3xl relative overflow-hidden">
                        <div className="flex items-center gap-2 group">
                            <span className="group transition-transform ">GET IN TOUCH</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform group  hover:translate-x-3 duration-300">
                                <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </button>




                </div>
                {/* image */}
                <div>
                    <div className="pl-20">
                        <img src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg" className=" rounded-tl-[300px] ml-10 w-[760px]" alt="" />
                    </div>
                </div>
                <div>

                </div>
            </div>

            <div className="flex my-40 justify-between ">
                {/* image */}
                <div className="flex justify-center ">
                    <img src="https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg" alt="" className="rounded-t-full ml-60 h-[800px] w-[600px]" />
                </div>
                {/* text */}
                <div className="flex flex-col gap-10 pl-10">
                    <h1 className="text-8xl pl-40    text-[#1A4122] font-caslon  font-semibold">Making Every Experience Magical</h1>
                    <div className="flex ">
                        <div className="flex  text-[#1A4122] flex-col gap-4 text-xl px-40 ">
                            <span className="">Weddings</span>
                            <span className="text-gray-400 hover:text-orange-700 cursor-pointer">Social</span>
                            <span className="text-gray-400 hover:text-orange-700 cursor-pointer">Corporate</span>
                            <span className="text-gray-400 cursor-pointer hover:text-orange-700">Venues</span>
                        </div>
                        <div className="flex flex-col w-[400px] gap-6">
                            <span>EXCEPTIONAL WEDDINGS
                                LEARN MORE
                            </span>
                            <p className="text-gray-400 ">The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.</p>
                            <button className="px-4 py-3 hover:bg-orange-500 text-white bg-orange-700 w-[180px] rounded-3xl relative overflow-hidden">
                                <div className="flex items-center gap-2 group">
                                    <span className="group transition-transform ">LEARN MORE</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform group  hover:translate-x-3 duration-300">
                                        <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pb-[10px]">
                {/* image */}
                <div className="relative flex items-center justify-center">
                    <img src="https://24carrots.com/wp-content/uploads/2023/10/unforegetable-banner.png" alt="" />
                    <div className="absolute bg-white rounded-full -bottom-[500px] w-[700px] h-[700px]">
                        <div className="flex flex-col justify-center items-center p-20 text-center gap-10 ">
                            <h1 className="text-gray-500 text-base">V E N U E S</h1>
                            <h1 className=" text-[#1A4122] font-caslon text-8xl ">Unforgettable Venues</h1>
                            <p>24 Carrots is the exclusive or preferred caterer at Southern California’s most spectacular properties. From intimate understated spaces to large and luxurious, we’ll help you find the event venue that makes your heart skip a beat.</p>
                            <button className="px-4 py-3 hover:bg-orange-500 text-white bg-orange-700 rounded-3xl relative overflow-hidden">
                                <div className="flex items-center gap-2 group">
                                    <span className="group transition-transform ">EXPLORE VENUES</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform group  hover:translate-x-3 duration-300">
                                        <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="  relative">
                <Slider />

                <div className="flex px-80 justify-center flex-col py-[400px]  gap-6 absolute -bottom-[600px] -z-10 items-center">
                    <h1 className=" text-7xl text-center">Far More Than Just Business</h1>
                    <p className="text-center text-lg">The way you do anything is the way you do everything. We haven’t cracked the code on catering; we simply care unreasonably about every aspect of what we do. We care about people as much as we care about details, and we absolutely refuse to compromise on making your day anything but the best. We’ve got your back from the initial idea to the final farewell!</p>
                </div>

                <div className="z-10">
                    <video src="https://i.ytimg.com/vi/7gPP9hsV4a0/maxresdefault.jpg" ></video>
                </div>

            </div>

            <div className="flex items-center justify-center px-10 gap-20 mt-96">
                {/* text */}
                <div className="flex text-md justify-center items-center flex-col gap-4">
                    <div className="px-10">
                        <h1 className="text-2xl py-4">Gourmet Catering</h1>
                        <p className="text-gray-600 py-4 ">Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.</p>

                        <button className="px-4 py-2 hover:text-orange-500 text-orange-700 border-2 border-orange-700 rounded-3xl relative overflow-hidden">
                            <div className="flex items-center gap-2 group">
                                <span className="group transition-transform ">LEARN MORE</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform group  hover:translate-x-3 duration-300">
                                    <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </button>

                    </div>
                    <div className="px-10">
                        <h1 className="text-3xl py-4">Bar Service</h1>
                        <p className="text-gray-600 py-4">Our sophisticated flavor expertise enables us to create inventive concoctions that generate buzz in more ways than one!</p>
                        <button className="px-4 py-2 hover:text-orange-500 text-orange-700 border-2 border-orange-700 rounded-3xl relative overflow-hidden">
                            <div className="flex items-center gap-2 group">
                                <span className="group transition-transform ">LEARN MORE</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform group  hover:translate-x-3 duration-300">
                                    <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>




                {/* img */}
                <div>
                    <img src="https://24carrots.com/wp-content/uploads/2023/10/Home_Services_GIF_R3.gif" alt="" className="rounded-t-full" />
                </div>

                {/* text */}
                <div className="flex text-md items-center flex-col gap-4">
                    <div className="flex px-10 items-center flex-col gap-4">
                        <div className="px-10">
                            <h1 className="text-3xl py-4">Staffing</h1>
                            <p className="text-gray-600 py-4">The hand-selected team at 24 Carrots are just as important to our reputation as our gourmet food. Our staff is certainly the best at what they do, and you’ll work with professionals who genuinely care about the success of your event!</p>

                            <button className="px-4 py-2 hover:text-orange-500 text-orange-700 border-2 border-orange-700 rounded-3xl relative overflow-hidden">
                                <div className="flex items-center gap-2 group">
                                    <span className="group transition-transform ">LEARN MORE</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform group  hover:translate-x-3 duration-300">
                                        <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </button>

                        </div>
                        <div className="px-10">
                            <h1 className="text-3xl py-4">Event Production</h1>
                            <p className="text-gray-600 py-4">
                                If mind-blowing spectacles and immersive guest experiences are what you’re after, the specialists at 24 Carrots can pull it off on an epic scale!</p>
                            <button className="px-4 py-2 hover:text-orange-500 text-orange-700 border-2 border-orange-700 rounded-3xl relative overflow-hidden">
                                <div className="flex items-center gap-2 group">
                                    <span className="group transition-transform ">LEARN MORE</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform group  hover:translate-x-3 duration-300">
                                        <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}