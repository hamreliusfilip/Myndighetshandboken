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
import { Menu } from 'lucide-react';

export default function CompleteMenu() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isCurrentPath = (path: string): boolean => currentPath === path;

  return (
    <div className="flex justify-center mr-5 ml-5">
      <Menubar>
        <Link href="/">
          <MenubarMenu>
            <MenubarTrigger>Hem</MenubarTrigger>
            {isCurrentPath("/") && <div className="flex justify-center">
              <div className="bg-slate-300 h-1 w-5 -mt-1 mb-1 rounded rounded-corners"></div>
            </div>}
          </MenubarMenu>
        </Link>

        {/* <Link href="/myndighet">
          <MenubarMenu>
            <MenubarTrigger>Myndigheter</MenubarTrigger>
            {isCurrentPath("/myndighet") && <div className="flex justify-center">
              <div className="bg-slate-300 h-1 w-5 -mt-1 mb-1 rounded rounded-corners"></div>
            </div>}
          </MenubarMenu>
        </Link>

        <Link href="/abroadMyndighet">
          <MenubarMenu>
            <MenubarTrigger>Utlänska myndigheter</MenubarTrigger>
            {isCurrentPath("/abroadMyndighet") && <div className="flex justify-start">
              <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
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
        </Link> */}

        <MenubarMenu>
          <MenubarTrigger>Sökmotorer & Databaser</MenubarTrigger>
          <MenubarContent>
            <Link href="/myndighet">
              <MenubarItem>Myndigheter</MenubarItem>
              {isCurrentPath("/myndighet") && <div className="flex justify-start">
                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
              </div>}
            </Link>
            <MenubarSeparator />
            <Link href="/company">
              <MenubarItem>Statliga företag</MenubarItem>
              {isCurrentPath("/company") && <div className="flex justify-start">
                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
              </div>}
            </Link>
            <MenubarSeparator />
            <Link href="/departement">
              <MenubarItem>Departement - karta</MenubarItem>
              {isCurrentPath("/departement") && <div className="flex justify-start">
                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
              </div>}
            </Link>
            <MenubarSeparator />
            <Link href="/abroadMyndighet">
              <MenubarItem>Utländska myndigheter</MenubarItem>
              {isCurrentPath("/abroadMyndighet") && <div className="flex justify-start">
                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
              </div>}
            </Link>
            <MenubarSeparator />
            <Link href="/SekretessMyndighet">
              <MenubarItem>Sekretessbelagda organ</MenubarItem>
              {isCurrentPath("/SekretessMyndighet") && <div className="flex justify-start">
                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
              </div>}
            </Link>
          </MenubarContent>
        </MenubarMenu>
        {/* 
        <Link href="/departement">
          <MenubarMenu>
            <MenubarTrigger>Departement</MenubarTrigger>
            {isCurrentPath("/departement") && <div className="flex justify-center">
              <div className="bg-slate-300 h-1 w-5 -mt-1 mb-1 rounded rounded-corners"></div>
            </div>}
          </MenubarMenu>
        </Link> */}

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
                <Link href="/faktaover/relations">
                  <MenubarItem>Internationella relationer</MenubarItem>
                  {isCurrentPath("/faktaover/relations") && <div className="flex justify-start">
                    <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                  </div>}
                </Link>
                <MenubarSeparator />
                <Link href="/faktaover/politik">
                  <MenubarItem>Riksdagspartier</MenubarItem>
                  {isCurrentPath("/faktaover/politik") && <div className="flex justify-start">
                    <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                  </div>}
                </Link>
                <MenubarSeparator />
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
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Övrigt</MenubarSubTrigger>
              <MenubarSubContent>
                <Link href="/faktaover/Tips">
                  <MenubarItem>Tips - Faktakällor</MenubarItem>
                  {isCurrentPath("/faktaover/Tips") && <div className="flex justify-start">
                    <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                  </div>}
                </Link>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>

        {/*         
        <Link href="/Tips">
          <MenubarMenu>
            <MenubarTrigger>Tips</MenubarTrigger>
            {isCurrentPath("/Tips") && <div className="flex justify-center">
              <div className="bg-slate-300 h-1 w-5 -mt-1 mb-1 rounded rounded-corners"></div>
            </div>}
          </MenubarMenu>
        </Link> */}

        <Link href="/om">
          <MenubarMenu>
            <MenubarTrigger>Om oss</MenubarTrigger>
            {isCurrentPath("/om") && <div className="flex justify-center">
              <div className="bg-slate-300 h-1 w-5 -mt-1 mb-1 rounded rounded-corners"></div>
            </div>}
          </MenubarMenu>
        </Link>
      </Menubar>
    </div>
  );
}
