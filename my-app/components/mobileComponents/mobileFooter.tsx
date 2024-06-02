import React from 'react';

export default function MobileFooter() {
    return (
        <div className="mt-16">
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 p-16">
                <p className='text-white font-bold text-2xl mb-16'> Myndighetshandboken </p> 
                <div className="flex items-center">
                    <p className='font-bold text-white text-center mr-2 font-sm'> Kontakta oss </p>
                    <a href="mailto:hamreliusfilip@gmail.com" className="transition-all duration-300 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    );
}
