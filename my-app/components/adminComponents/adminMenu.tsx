'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger
} from "@/components/ui/menubar";

export default function AdminMenu() {
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const isCurrentPath = (path: string): boolean => currentPath === path;

    return (
        <div className="flex justify-center">
            <Menubar>

            <Link href="/admin">
                    <MenubarMenu>
                        <MenubarTrigger>Adminstartsida</MenubarTrigger>
                    </MenubarMenu>
                </Link>

                <MenubarMenu>
                    <MenubarTrigger>Myndigheter</MenubarTrigger>
                    <MenubarContent>

                        <Link href="/admin/adminAddMyn/new">
                            <MenubarItem>Lägg till myndighet</MenubarItem>
                            {isCurrentPath("/admin/adminAddMyn/new") && <div className="flex justify-start">
                                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                            </div>}
                        </Link>

                        <MenubarSeparator />

                        <Link href="/admin/adminListPage">
                            <MenubarItem>Alla myndigheter - Redigera</MenubarItem>
                            {isCurrentPath("/admin/adminListPage") && <div className="flex justify-start">
                                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                            </div>}
                        </Link>

                    </MenubarContent>
                </MenubarMenu>


                <MenubarMenu>
                    <MenubarTrigger>Statliga företag</MenubarTrigger>
                    <MenubarContent>

                        <Link href="/admin/adminAddComp/new">
                            <MenubarItem>Lägg till företag</MenubarItem>
                            {isCurrentPath("/admin/adminAddComp/new") && <div className="flex justify-start">
                                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                            </div>}
                        </Link>

                        <MenubarSeparator />

                        <Link href="/admin/adminListPageComp">
                            <MenubarItem>Alla företag - Redigera</MenubarItem>
                            {isCurrentPath("/admin/adminListPageComp") && <div className="flex justify-start">
                                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                            </div>}
                        </Link>

                    </MenubarContent>
                </MenubarMenu>

                <Link href="/">
                    <MenubarMenu>
                        <MenubarTrigger>Användarstartsida</MenubarTrigger>
                    </MenubarMenu>
                </Link>

            </Menubar>
        </div>
    );
}
