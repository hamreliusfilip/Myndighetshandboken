import React from 'react';

export default function MobileInfo() {
    return (
        <div>
            <div className="flex justify-left ml-5 mt-20" >
                <h1 className="font-bold text-left text-5xl">
                    <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1'>Upptäck Sveriges <br></br> byråkrati från <br></br>en ny vinkel</span>
                </h1>
            </div>
            <div className="flex justify-left ml-5 mt-3 w-2/3" >
                <p className='font-sm text-slate-600 text-base'>
                Utforska Sveriges byråkratiska landskap, knäck koden till svenska myndigheters värld och upptäck klarhet i den svenska förvaltningens snårskog.
                </p>
            </div>
        </div>
    );
}