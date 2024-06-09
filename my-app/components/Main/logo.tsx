'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import logo from '/Assets/Icons/logga_svart.svg';

export default function Logo() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const userAgent = navigator.userAgent;
            const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            const isiPad = /iPad/i.test(userAgent);

            return isMobile && !isiPad;
        }
        setIsMobile(checkIfMobile());
    }, []);

    return (
        <div>
            {isMobile ? (
                <div className="flex justify-start ml-3">
                    <Link href="/">
                        <Image src={logo} alt="Svenska Myndigheter" width={250} height={250} />
                    </Link>
                </div>
            ) : (
                <div className="flex items-center ml-1 mt-1">
                    <Link href="/">
                        <Image src={logo} alt="Svenska Myndigheter" width={350} height={350} />
                    </Link >
                </div>
            )}
        </div>
    );
}



