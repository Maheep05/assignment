import video from '../assets/video.mp4';

export function HeroSection() {
    return (
        <div className='relative'>
            <div >
                <video autoPlay muted playsInline poster='https://24carrots.com/wp-content/uploads/2023/08/chef.png' loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div>
                    <h1 className='absolute top-[360px] left-[380px] font-medium text-white text-8xl'>Simply the Finest</h1>
                </div>

                <div className='absolute bottom-8 left-[740px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-16 h-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
            </div>

            <div>
               
            </div>
        </div>
    );
}
