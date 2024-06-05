"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { AlertCard } from "./alert";

export default function FormVariant({ data, type }: any) {

    let EDITMODE = false;

    EDITMODE = data.Amyndighet._id !== "new";

    const router = useRouter();

    let defaultData = {
        Country: "",
        City: "",
        Phone: "",
        Email: "",
        Web: "",
    };

    if (EDITMODE) {
        defaultData = data.Amyndighet;
    }

    const [formData, setFormData] = useState(defaultData);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertFalse, setShowAlertFalse] = useState(false);

    useEffect(() => {
        let timerShowAlert: NodeJS.Timeout;

        if (showAlert) {
            timerShowAlert = setTimeout(() => {
                setShowAlert(false);
            }, 5000);
        }

        let timerShowAlertFalse: NodeJS.Timeout;

        if (showAlertFalse) {
            timerShowAlertFalse = setTimeout(() => {
                setShowAlertFalse(false);
            }, 5000);
        }

        return () => {
            clearTimeout(timerShowAlert);
            clearTimeout(timerShowAlertFalse);
        };
    }, [showAlert, showAlertFalse]);


    const handleChange = (e: any) => {
        const { name, value } = e.target;
    
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    }
    
    const validateFormData = (formData: any) => {
        return true;
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!validateFormData(formData)) {
            setShowAlertFalse(true);
            return;
        } else {
            setShowAlert(true);
            setFormData(defaultData);
        }


        if (EDITMODE) {
            const res = await fetch(`/api/Amyndigheter/${data._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ formData }),
            });
            if (!res.ok) {
                throw new Error("Failed to update ticket");
            }
            router.push("/admin/adminListPageA")
        } else {
            await fetch(`/api/Amyndigheter`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
    }


    return (
        <div className="w-full sm:w-2/3 ml-auto mr-auto">
            <Card className='p-5 shadow-md'>
                <CardTitle className="text-center mb-10">{EDITMODE ? `Uppdatera ${defaultData.Country}` : `Lägg till ${type === "Amyndighet" ? "myndighet" : "företag"}`}</CardTitle>

                <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-stretch">

                    {/* Country */}
                    <div className="m-5">
                        <CardDescription>Country</CardDescription>
                        <input
                            id="Country"
                            name="Country"
                            type="text"
                            onChange={handleChange}
                            required={false}
                            value={formData.Country}
                            placeholder={`${type === "Amyndighet" ? "Myndighetens" : "Företagets"} namn`}
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>

                    {/* City */}
                    <div className="m-5">
                        <CardDescription>City</CardDescription>
                        <input
                            id="City"
                            name="City"
                            type="text"
                            onChange={handleChange}
                            required={false}
                            value={formData.City}
                            placeholder="xxxx"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>

                    {/* Phone */}
                    <div className="m-5">
                        <CardDescription>Phone</CardDescription>
                        <input
                            id="Phone"
                            name="Phone"
                            type="number"
                            onChange={handleChange}
                            required={false}
                            value={formData.Phone}
                            placeholder="Telefonnummer"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>


                    {/* Email */}

                    <div className="m-5">
                        <CardDescription>Email</CardDescription>
                        <input
                            id="Email"
                            name="Email"
                            type="text"
                            onChange={handleChange}
                            required={false}
                            value={formData.Email}
                            placeholder="Mailadress"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>


                    {/* WEBBPLATS */}
                    <div className="m-5">
                        <CardDescription>Web</CardDescription>
                        <input
                            id="Web"
                            name="Web"
                            type="text"
                            onChange={handleChange}
                            required={false}
                            value={formData.Web}
                            placeholder="Fyll i myndighetens webbplats"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>
                </form>
            </Card>

            <div className="flex justify-center mt-20 mb-20">
                <Button variant="outline" className="bg-green-500 text-white ml-5" onClick={handleSubmit}>
                    {EDITMODE ? "Updatera" : "Lägg till"}
                    {showAlertFalse && <AlertCard isSuccess={false} type={'form'} />}
                    {showAlert && <AlertCard isSuccess={true} type={'form'} />}
                </Button>
            </div>

        </div>
    )
}
