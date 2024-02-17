export function Testimonials() {
    return (
        <div className="">
        <div>
            <div className="py-40 my-40 bg-[#1A4122] relative" style={{ backgroundImage: 'url(https://24carrots.com/wp-content/themes/24carrots/img/happy_clients_carrot.svg)' }}>
                <div className="flex p-10 flex-col justify-between items-center gap-6">
                    <h1 className=" text-6xl  text-white font-caslon">Our Happy Clients</h1>
                    <p className="font-futura text-center w-[600px] text-[#B4C7A3]">Food may be our love language, but words of affirmation always make us ecstatic! Read what our happy clients have to say about how we made their day great.</p>
                </div>

                <div className="absolute -top-14 left-1/2">
                    <img src="https://24carrots.com/wp-content/themes/24carrots/img/24cemblem.svg" alt="" />
                </div>

                <div className="flex px-40 py-10 gap-10">
                    <img src="https://24carrots.com/wp-content/uploads/2023/10/4.3-Desert-Born-Studios.jpg" alt="" className="h-[400px] w-[600px]" />
                    <div className="flex flex-col justify-center  gap-6">
                        <h1 className="text-sm w-[590px] text-white">“From the moment we inquired with the venue, through all the planning, execution, and clean-up of the wedding day, we had an amazing experience working with the&nbsp;team.”</h1>
                        <p className="text-lg text-white px-20">Kellie &amp;&nbsp;Paul</p>
                        <p className="text-xl text-white px-20">Franciscan&nbsp;Gardens</p>
                    </div>


                </div>
                <div className="flex items-center justify-end px-40 gap-4">
                    <h1 className="text-white">NEXT TESTIMONIAL</h1>
                    <button className="border-2 border-white rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </button>
                </div>


                <h1 className="text-6xl font-caslon py-32 text-center text-white">What's Cookin'</h1>

                <div className="flex items-center justify-center flex-row absolute gap-20 px-40">
                    <div className="flex flex-col gap-4  w-[600px]">
                        <img src="https://24carrots.com/wp-content/uploads/2023/11/11.02.16-Foundsgiving-Studio-EMP-21-616x440.jpg" alt="" className="h-[300px] w-[600px]"/>
                        <h1 className="bg-orange-700 px-3 rounded-3xl text-sm text-white w-52">24 CARROTS CATERING
                            CATERING</h1>
                        <h1 className=" font-caslon text-gray-800">Setting Your Holiday Table</h1>
                        <p className="text-gray-500 text-sm">From the first inquiry to final details, we are proud to provide full-service catering, making you feel like a guest at your own event…</p>
                    </div>

                    <div className="flex flex-col gap-4  w-[600px]">
                        <img src="https://24carrots.com/wp-content/uploads/2023/09/11.13.19-ABC-Gala-2019-Villa-Visuals-7-scaled-1-616x411.jpg" alt="" className="h-[300px] w-[600px]"/>
                        <h1 className="bg-black px-3 rounded-3xl text-sm text-white w-52">24 CARROTS CATERING
                            CATERING</h1>
                        <h1 className=" font-caslon text-gray-800">The BEST Venues for Big Holiday Bashes</h1>
                        <p className="text-gray-500 text-sm">Make the most the holiday season by thinking BIG! Invite everyone from friends family, clients and the entire company to join in on the fun…</p>
                    </div>

                  
                </div>
               
            </div>


        </div>
      <div className="py-60 text-center">
      <button className="px-4 py-2 hover:text-orange-500 text-orange-700 border-2 border-orange-700 rounded-3xl relative overflow-hidden">
                                <div className="flex items-center gap-2 group">
                                    <span className="group transition-transform ">MORE FROM THE BLOG</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform group  hover:translate-x-3 duration-300">
                                        <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </button>
      </div>
        </div>

    )
}