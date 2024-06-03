import React from "react";
import Link from 'next/link';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Relations() {
    return (
        <div className="text-center">
            <div className="mb-8">
                <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Internationella Relationer </h1>
                <p className='text-center font-normal text-l mt-5'> Data över ledningsform, verksamhetsområde <br></br> och antal myndigheter genom åren.</p>
                <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
            </div>
        </div>
    );
}