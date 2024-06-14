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
                        <Image
                            src={logo}
                            alt="Svenska Myndigheter"
                            height={0}
                            width={0}
                            style={{ width: '250px', height: "auto" }}
                            priority={true}
                        />
                    </Link>
                </div>
            ) : (
                <div className="flex items-center ml-1 mt-1">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Svenska Myndigheter"
                            height={0}
                            width={0}
                            style={{ width: '350px', height: "auto" }}
                            priority={true}
                        />
                    </Link>
                </div>
            )}
        </div>
    );
}



