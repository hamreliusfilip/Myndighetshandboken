'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger
} from "@/components/ui/menubar";

export default function CompleteMenu() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isCurrentPath = (path: string): boolean => currentPath === path;

  return (
    <div className="flex justify-center">
      <Menubar>
        <Link href="/">
          <MenubarMenu>
            <MenubarTrigger>Hem</MenubarTrigger>
            {isCurrentPath("/") && <div className="flex justify-center">
              <div className="bg-slate-300 h-1 w-5 -mt-1 mb-1 rounded rounded-corners"></div>
            </div>}
          </MenubarMenu>
        </Link>
        <Link href="/myndighet">
          <MenubarMenu>
            <MenubarTrigger>Myndigheter</MenubarTrigger>
            {isCurrentPath("/myndighet") && <div className="flex justify-center">
              <div className="bg-slate-300 h-1 w-5 -mt-1 mb-1 rounded rounded-corners"></div>
            </div>}
          </MenubarMenu>
        </Link>
        <Link href="/company">
          <MenubarMenu>
            <MenubarTrigger>Statliga företag</MenubarTrigger>
            {isCurrentPath("/company") && <div className="flex justify-center">
              <div className="bg-slate-300 h-1 w-5 -mt-1 mb-1 rounded rounded-corners"></div>
            </div>}
          </MenubarMenu>
        </Link>
        <Link href="/departement">
          <MenubarMenu>
            <MenubarTrigger>Departement</MenubarTrigger>
            {isCurrentPath("/departement") && <div className="flex justify-center">
              <div className="bg-slate-300 h-1 w-5 -mt-1 mb-1 rounded rounded-corners"></div>
            </div>}
          </MenubarMenu>
        </Link>
        <MenubarMenu>
          <MenubarTrigger>Fakta & Statistik</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Statistik</MenubarSubTrigger>
              <MenubarSubContent>
                <Link href="/faktaover/statistik">
                  <MenubarItem>Myndighetsstatistik</MenubarItem>
                  {isCurrentPath("/faktaover/statistik") && <div className="flex justify-start">
                    <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                  </div>}
                </Link>
                <MenubarSeparator />
                <Link href="/faktaover/statistikForetag">
                  <MenubarItem>Statens bolagsportfölj</MenubarItem>
                  {isCurrentPath("/faktaover/statistikForetag") && <div className="flex justify-start">
                    <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                  </div>}
                </Link>
                <MenubarSeparator />
                <Link href="/faktaover/statsbudget">
                  <MenubarItem>Statsbudgeten</MenubarItem>
                  {isCurrentPath("/faktaover/statsbudget") && <div className="flex justify-start">
                    <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                  </div>}
                </Link>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Fakta</MenubarSubTrigger>
              <MenubarSubContent>
                <Link href="/faktaover/foretagMyndigheter">
                  <MenubarItem>Myndigheter & Företag</MenubarItem>
                  {isCurrentPath("/faktaover/foretagMyndigheter") && <div className="flex justify-start">
                    <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                  </div>}
                </Link>
                <MenubarSeparator />
                <Link href="/faktaover/riksdagen">
                  <MenubarItem>Riksdagen & Regeringen</MenubarItem>
                  {isCurrentPath("/faktaover/riksdagen") && <div className="flex justify-start">
                    <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                  </div>}
                </Link>
                <MenubarSeparator />
                <Link href="/faktaover/staten">
                  <MenubarItem>Grundläggande Fakta</MenubarItem>
                  {isCurrentPath("/faktaover/staten") && <div className="flex justify-start">
                    <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                  </div>}
                </Link>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <Link href="/om">
          <MenubarMenu>
            <MenubarTrigger>Om hemsidan</MenubarTrigger>
            {isCurrentPath("/om") && <div className="flex justify-center">
              <div className="bg-slate-300 h-1 w-5 -mt-1 mb-1 rounded rounded-corners"></div>
            </div>}
          </MenubarMenu>
        </Link>
      </Menubar>
    </div>
  );
}
