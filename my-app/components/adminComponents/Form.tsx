"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { AlertCard } from "./alert";

export default function Form({ data, type }: any) {

    let EDITMODE = false;
    if (type === "myndighet") {
        EDITMODE = data.myndighet._id !== "new";
    } else {
        EDITMODE = data.company._id !== "new";
    }

    const router = useRouter();

    let defaultData = {
        name: "",
        created: "",
        info: "",
        org: "",
        web: "",

        ...(type === "myndighet" && {
            relation: "",
            rule: "",
            tele: "",
            epost: "",
            logo_url: "",
        }),

        ...(type === "company" && {
            owner: "",
            img: "",
        }),
    };

    if (EDITMODE) {
        if (type === "company") {
            defaultData = data.company;
        } else {
            defaultData = data.myndighet;
        }
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

        const requiredFields = ["name", "created", "info"];

        if (type === "myndighet") {
            requiredFields.push("relation", "rule", "tele");
        }
        if (type === "company") {
            requiredFields.push("owner");
        }

        for (let field of requiredFields) {
            if (!formData[field]) {
                return false;
            }
        }

        return !isNaN(formData.created) && (type !== "myndighet" || !isNaN(formData.tele));
    }

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const file = e.target.files?.[0];
        
        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result?.toString().replace(/^data:.+;base64,/, '');
            if (!base64String) return;


            if (type === "company") {
                setFormData((prevData: any) => ({
                    ...prevData,
                    img: `data:${file.type};base64,${base64String}`,
                }));
            }else{
                setFormData((prevData: any) => ({
                    ...prevData,
                    logo_url: `data:${file.type};base64,${base64String}`,
                }));
            }
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!validateFormData(formData)) {
            setShowAlertFalse(true);
            return;
        } else {
            setShowAlert(true);
            setFormData(defaultData);
        }

        if (type === "company") {
            if (EDITMODE) {
                const res = await fetch(`/api/companies/${data._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ formData }),
                });
                if (!res.ok) {
                    throw new Error("Failed to update ticket");
                }
                router.push("/admin/adminListPageComp")
            } else {
                await fetch(`/api/companies`, {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            }
        }
        else if (type === "myndighet") {
            if (EDITMODE) {
                const res = await fetch(`/api/myndigheter/${data._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ formData }),
                });
                if (!res.ok) {
                    throw new Error("Failed to update ticket");
                }
                router.push("/admin/adminListPage")
            } else {
                await fetch(`/api/myndigheter`, {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            }
        }
    }

    return (
        <div className="w-full sm:w-2/3 ml-auto mr-auto">
            <Card className='p-5 shadow-md'>
                <CardTitle className="text-center mb-10">{EDITMODE ? `Uppdatera ${defaultData.name}` : `Lägg till ${type === "myndighet" ? "myndighet" : "företag"}`}</CardTitle>

                <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-stretch">

                    {/* NAMN */}
                    <div className="m-5">
                        <CardDescription>Namn</CardDescription>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.name}
                            placeholder={`${type === "myndighet" ? "Myndighetens" : "Företagets"} namn`}
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>

                    {/* SKAPADES */}
                    <div className="m-5">
                        <CardDescription>Skapades</CardDescription>
                        <input
                            id="created"
                            name="created"
                            type="number"
                            onChange={handleChange}
                            required={true}
                            value={formData.created}
                            placeholder="xxxx"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>

                    {/* DEPARTEMENT */}
                    {type === "myndighet" && (
                        <div className="m-5">
                            <CardDescription>Departement</CardDescription>
                            <select
                                id="relation"
                                name="relation"
                                onChange={handleChange}
                                required={true}
                                value={formData.relation}
                                className="p-10 pl-2"
                            >
                                <option value="" disabled selected>Välj departement:</option>
                                <option value="Arbetsmarknadsdepartementet">Arbetsmarknadsdepartementet</option>
                                <option value="Finansdepartementet">Finansdepartementet</option>
                                <option value="Försvarsdepartementet">Försvarsdepartementet</option>
                                <option value="Justitiedepartementet">Justitiedepartementet</option>
                                <option value="Klimat- och näringslivsdepartementet">Klimat- och näringslivsdepartementet</option>
                                <option value="Kulturdepartementet">Kulturdepartementet</option>
                                <option value="Landsbygds- och infrastrukturdepartementet">Landsbygds- och infrastrukturdepartementet</option>
                                <option value="Socialdepartementet">Socialdepartementet</option>
                                <option value="Statsrådsberedningen">Statsrådsberedningen</option>
                                <option value="Utbildningsdepartementet">Utbildningsdepartementet</option>
                                <option value="Utrikesdepartementet">Utrikesdepartementet</option>
                            </select>
                        </div>
                    )}

                    {/* LEDNING */}
                    {type === "myndighet" && (
                        <div className="m-5">
                            <CardDescription>Ledning</CardDescription>
                            <select
                                id="rule"
                                name="rule"
                                onChange={handleChange}
                                required={true}
                                value={formData.rule}
                                className="pl-2"
                            >
                                <option value="" disabled selected>Välj ledningsform:</option>
                                <option value="Styrelse">Styrelse</option>
                                <option value="Enrådighet">Enrådighet</option>
                                <option value="SBA">SBA</option>
                                <option value="Nämnd">Nämnd</option>
                                <option value="Kommitté">Kommitté</option>
                                <option value="Universitet eller högskola">Universitet eller högskola</option>
                                <option value="Regeringskansliet">Regeringskansliet</option>
                                <option value="Domstol">Domstol</option>
                                <option value="AP-Fond">AP-Fond</option>
                                <option value="Hyresnämnd">Hyresnämnd</option>
                                <option value="Lagråd">Lagråd</option>
                                <option value="Övrigt">Övrigt</option>
                            </select>
                        </div>
                    )}

                    {/* ÄGARE */}
                    {type === "company" && (
                        <div className="m-5">
                            <CardDescription>Ägare</CardDescription>
                            <input
                                id="owner"
                                name="owner"
                                type="text"
                                onChange={handleChange}
                                required={true}
                                value={formData.owner}
                                placeholder="Ägare av företaget"
                                className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                            />
                        </div>
                    )}

                    {/* EPOST */}
                    {type === "myndighet" && (
                        <div className="m-5">
                            <CardDescription>Mailadress</CardDescription>
                            <input
                                id="epost"
                                name="epost"
                                type="email"
                                onChange={handleChange}
                                required={true}
                                value={formData.epost}
                                placeholder="Mailadress"
                                className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                            />
                        </div>
                    )}

                    {/* TELEFON */}
                    {type === "myndighet" && (
                        <div className="m-5">
                            <CardDescription>Telefonnummer</CardDescription>
                            <input
                                id="tele"
                                name="tele"
                                type="number"
                                onChange={handleChange}
                                required={true}
                                value={formData.tele}
                                placeholder="Fyll i telefonnummer"
                                className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                            />
                        </div>
                    )}

                    {/* ORGANISATIONSNUMMER */}
                    <div className="m-5">
                        <CardDescription>Organisationsnummer</CardDescription>
                        <input
                            id="org"
                            name="org"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.org}
                            placeholder="xxxxxx-xxxx"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>

                    {/* WEBBPLATS */}

                    <div className="m-5">
                        <CardDescription>Webbplats</CardDescription>
                        <input
                            id="web"
                            name="web"
                            type="url"
                            onChange={handleChange}
                            required={false}
                            value={formData.web}
                            placeholder="Fyll i myndighetens webbplats"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>

                    {/* INFO */}
                    <div className="m-5 col-span-2">
                        <CardDescription>Info</CardDescription>
                        <textarea
                            id="info"
                            name="info"
                            onChange={handleChange}
                            required={true}
                            value={formData.info}
                            placeholder={`${type === "myndighet" ? "Info om myndigheten" : "Info om företaget"}`}
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1 w-full"
                        />
                    </div>

                    {/* LOGGA myndighet */}
                    {type === "myndighet" && (
                        <div className="col-span-1 sm:col-span-2 m-5 justify-center">
                            {formData.logo_url ? (
                                <CardDescription>Uppdatera logotyp</CardDescription>
                            ) : (
                                <CardDescription>Lägg till logotyp</CardDescription>
                            )}

                            <div className="flex items-center mt-1">

                                <label htmlFor="logoInput" className="border-solid border-1 border-slate-300 rounded-sm p-2 mr-5 cursor-pointer shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                                    </svg>
                                </label>
                                <input
                                    id="logoInput"
                                    name="logo_url"
                                    type="file"
                                    className="border-solid border-2 border-slate-300 rounded-sm p-1 mr-2"
                                    accept="image/png, image/jpeg"
                                    onChange={handleLogoUpload}
                                    style={{ display: 'none' }}
                                />
                                {formData.logo_url ? (
                                    <p className="text-green-600">Logotyp tillagd</p>
                                ) : (
                                    <p className="text-red-600">Ingen logotyp tillagd</p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* LOGGA företag */}
                    {type === "company" && (
                        <div className="col-span-1 sm:col-span-2 m-5 justify-center">
                            {formData.img ? (
                                <CardDescription>Uppdatera logotyp</CardDescription>
                            ) : (
                                <CardDescription>Lägg till logotyp</CardDescription>
                            )}

                            <div className="flex items-center mt-1">

                                <label htmlFor="logoInput" className="border-solid border-1 border-slate-300 rounded-sm p-2 mr-5 cursor-pointer shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                                    </svg>
                                </label>
                                <input
                                    id="logoInput"
                                    name="logo_url"
                                    type="file"
                                    className="border-solid border-2 border-slate-300 rounded-sm p-1 mr-2"
                                    accept="image/png, image/jpeg"
                                    onChange={handleLogoUpload}
                                    style={{ display: 'none' }}
                                />
                                {formData.img ? (
                                    <p className="text-green-600">Logotyp tillagd</p>
                                ) : (
                                    <p className="text-red-600">Ingen logotyp tillagd</p>
                                )}
                            </div>
                        </div>
                    )}

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
