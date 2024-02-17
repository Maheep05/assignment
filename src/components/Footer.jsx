export function Footer() {
    return (
        <div className="px-20 py-20 bg-[#E9E4E0]">
            <div className="flex  gap-40">
                <div className="flex flex-col w-96 gap-4">
                    <div className="flex items-center flex-col cursor-pointer">
                        <span className="text-4xl font-semibold">24 CARROTS</span>
                        <span className="text-gray-400">CATERING & EVENTS</span>
                    </div>
                    <p className=" font-futura">The event specialists at our Southern California headquarters are available to help with every aspect of your event.</p>
                    <hr className="border-t-2 h-[3px] bg-green-900" />
                </div>
                <div className="flex gap-10">
                    <div className="flex flex-col gap-2">
                        <h1 className="py-2 text-xl font-semibold font-caslon">About</h1>
                        <span className=" font-futura">About 24 Carrots </span>
                        <span className=" font-futura">Awards & Press</span>
                        <span className=" font-futura">Blog</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="py-2 text-xl font-semibold font-caslon">Services</h1>
                        <span className=" font-futura">Gourmet Catering</span>
                        <span className=" font-futura">Bar Service</span>
                        <span className=" font-futura">Staffing</span>
                        <span className=" font-futura">Production</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="py-2 text-xl font-semibold font-caslon">Events</h1>
                        <span className=" font-futura">Gourmet Catering</span>
                        <span className=" font-futura">Weddings</span>
                        <span className=" font-futura">Corporate</span>
                        <span className=" font-futura">Social</span>
                        <span className=" font-futura">Gallery</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="py-2 text-xl font-semibold font-caslon">Venues</h1>
                        <span className=" font-futura">Careers</span>
                        <span className=" font-futura">Contact</span>
                    </div>
                    <div className="flex items-center flex-col gap-2 ">
                        <h1 className="py-2 text-xl font-semibold font-caslon">Follow Us</h1>
                        <div className="flex items-center gap-2 font-futura">
                            <img src="https://24carrots.com/wp-content/themes/24carrots/img/icon/facebook.svg" alt="" />
                            <span>Facebook</span>
                        </div>
                        <div className="flex items-center gap-2 font-futura">
                            <img src="https://24carrots.com/wp-content/themes/24carrots/img/icon/instagram.svg" alt="" />
                            <span>Instagram</span>
                        </div>
                        <div className="flex items-center gap-2 font-futura">
                            <img src="https://24carrots.com/wp-content/themes/24carrots/img/icon/pinterest.svg" alt="" className="h-5 w-5" />
                            <span>Pinterest</span>
                        </div>
                        <div className="flex items-center gap-2 font-futura">
                            <img src="https://24carrots.com/wp-content/themes/24carrots/img/icon/linkedIn.svg" alt="" />
                            <span>Linkedin</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between gap-10">
                <div className="flex gap-10">
                <div className="flex flex-col gap-2">
                    <h1>CALL US</h1>
                    <h1>EMAIL US</h1>
                    <h1>FIND US</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <h1> 714.942.6000 • 800.717.1545</h1>
                    <h1> info@24carrots.com</h1>
                    <h1> 150 Baker Street East, Costa Mesa, CA 92626</h1>
                </div>
                </div>
                <div className="flex py-10 items-center justify-end gap-2">
                    <h1>Site & design by Dooley Creative Co. </h1>
                    <img src="https://24carrots.com/wp-content/themes/24carrots/img/icon/dcc-logo.svg" alt=""  className="h-16 w-16"/>
                </div>
              
            </div>
            <hr className="border-t-2 h-[3px] bg-green-900 my-8" />

            <div className="flex justify-between text-xs">
                <h1>© 2023 24 Carrot Catering & Events. All rights reserved.</h1>
                <h1>ADA Accessibility • Policy Privacy Policy</h1>
            </div>
        </div>
    )
}