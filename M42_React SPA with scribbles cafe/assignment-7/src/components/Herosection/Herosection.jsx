import React from 'react';

const Herosection = () => {
    return (
        <div className="relative w-full py-36 font-sans">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('Banner-min.jpg')",
                }}
                aria-hidden="true"
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
                <div className="max-w-xl text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                        Bid on Unique Items from Around the World
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 mb-8">
                        Discover rare collectibles, luxury goods, and vintage treasures in
                        our curated auctions
                    </p>
                    <button className="group flex items-center justify-center bg-white text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
                        Explore Auctions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Herosection;