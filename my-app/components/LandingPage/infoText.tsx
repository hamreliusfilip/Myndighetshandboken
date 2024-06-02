import React from 'react';

export default function Info() {
    return (
        <div className="flex justify-center pt-20 lg:px-64 sm:px-16 xs:px-12 mt-8" >
            <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl font-bold text-center">
                Utforska <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1'>Sveriges byråkratiska landskap,</span> knäck koden till svenska myndigheters värld och upptäck klarhet i den svenska <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1'>förvaltningens snårskog.</span>
            </h1>
        </div>
    );
}