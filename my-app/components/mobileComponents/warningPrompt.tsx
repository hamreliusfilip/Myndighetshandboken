import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function MobileMenu() {

    return (
        <Card className="text-black text-center rounded-lg font-regular m-4 mb-28">
            <CardContent className="m-4">
                Den här hemsidan har begränsad funktionalitet på telefon. Vänligen besök oss på en större enhet för att nyttja samtliga funktioner.
                <br></br> <br></br>
                Hemsidan på en större enhet innehåller sökmotorer, interaktiva statisitk verktyg, kartor och mycket mer.
            </CardContent>
        </Card>
    );
}