import { useState } from 'react';

export function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (event) => {
        setCurrentSlide(parseInt(event.target.value));
    };

    const images = [
        "https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg",
        "https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg",
        "https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg",
        "https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg",
        // Add more image URLs here
    ];

    return (
        <div className='flex gap-20 items-center flex-col '>
            <div className="mt-40  pt-96 flex gap-10 items-center justify-center relative">
                <div className="overflow-hidden">
                    <div className="flex gap-20 transition-transform" style={{ transform: `translateX(-${currentSlide * 400}px)` }}>
                        {images.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} className="h-[600px] w-[600px]" alt={`Slide ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </div>

            <input
                type="range"
                min="0"
                max={images.length - 1}
                value={currentSlide}
                onChange={handleSlideChange}
                className="w-64 bg-green-200 "
            />
        </div>
    );
}
