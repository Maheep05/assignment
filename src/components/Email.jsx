export function Email() {
    return (
        <div className="bg-[#C15627]">
            <div className="flex justify-between">
                <div className="flex p-28 text-white flex-col gap-8">
                    <h1 className=" font-caslon text-6xl text-white">Endless Inspiration</h1>
                    <p className=" font-futura text-white text-sm">Sign up to our newsletter for fresh updates, encouragement, and exclusive insights.</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <input type="text" placeholder="Enter Your Email" className="px-10 py-2 rounded-3xl w-80" />
                            <button className="px-4 py-2 hover:bg-orange-500 text-white bg-orange-700 border-2 border-orange-700 rounded-3xl relative overflow-hidden">

                                <div className="flex items-center gap-2 group">
                                    <span className="group transition-transform ">SIGN UP</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform group  hover:translate-x-3 duration-300">
                                        <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <p>
                            By clicking Sign Up you’re confirming that you agree with our Terms and Conditions.</p>
                    </div>
                </div>
                <img src="https://24carrots.com/wp-content/uploads/2023/08/signup.png" alt="" className="h-[500px]"/>
            </div>
        </div>
    )
}