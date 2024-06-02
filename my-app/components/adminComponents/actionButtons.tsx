import React from "react";
import { Button } from "@/components/ui/button"

export default function ActionButtons() {

    return (
        <div className="flex justify-center mt-20 mb-20">
            <Button variant="outline" className="bg-green-500 text-white ml-5">Fortsätt</Button>
            <Button variant="outline" className="bg-red-500 text-white ml-5">Radera</Button>
        </div>
    );
}