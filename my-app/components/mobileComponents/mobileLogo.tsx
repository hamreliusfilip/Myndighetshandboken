import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '/Assets/Icons/logga_svart.svg';

export default function MobileLogo() {
    return (
        <Link href="/">
            <div className="flex items-center justify-center">
                <div>
                    <Image src={logo} alt="Svenska Myndigheter" width={300} height={300}/>
                </div>
            </div>
        </Link>
    );
}