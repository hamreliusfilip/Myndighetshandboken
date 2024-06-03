import React from 'react';

export default function Info() {
    return (
        <div className="flex justify-center pt-32 lg:px-64 sm:px-16 xs:px-12 mt-8" >
            <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-center">
                Utforska <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1'>Sveriges byråkratiska landskap,</span> knäck koden till svenska myndigheters värld och upptäck klarhet i den svenska <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1'>förvaltningens snårskog.</span>
            </h1>
        </div>
    );
}