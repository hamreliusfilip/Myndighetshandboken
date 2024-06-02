import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '/Assets/Icons/logga_svart.svg';

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex items-center ml-1 mt-1">
                <div>
                    <Image src={logo} alt="Svenska Myndigheter" width={350} height={350}/>
                </div>
            </div>
        </Link>
    );
}