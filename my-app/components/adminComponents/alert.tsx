import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertCard({ isSuccess, type }: { isSuccess: boolean , type: string}) {
    
    const iconColor = isSuccess ? "green" : "red";
    let titleText = ""; 
    let descriptionText = "";

    switch (type) {
        case "form":
            descriptionText = isSuccess
                ? "Objektet har lagts till/uppdaterats framgångsrikt."
                : "Fel vid tillägningen/uppateringen.";
            titleText = isSuccess ? "Objektet tillagt/uppdaterat." : "Något gick fel.";
            break;
        case "delete":
            descriptionText = isSuccess
                ? "Objektet har tagits bort framgångsrikt."
                : "Fel vid borttagningen.";
            titleText = isSuccess ? "Objektet bortaget ." : "Något gick fel.";
            break;
    }
    return (
        <div className="fixed bottom-0 right-0 m-10 w-96">
            <Alert className="shadow-lg">
                <div className="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={iconColor} className="w-12 h-12">
                        {isSuccess ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        )}
                    </svg>
                </div>
                <AlertTitle className={`text-right font-regular text-lg ${isSuccess ? "text-black" : "text-red"}`}>{titleText}</AlertTitle>
                <AlertDescription className="text-right font-regular text-sm">{descriptionText}</AlertDescription>
            </Alert>
        </div>
    );
}
