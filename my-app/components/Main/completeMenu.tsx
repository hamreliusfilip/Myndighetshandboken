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
              <MenubarItem>Statliga Företag</MenubarItem>
              {isCurrentPath("/company") && <div className="flex justify-start">
                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
              </div>}
            </Link>
            <MenubarSeparator />
            <Link href="/departement">
              <MenubarItem>Departementkarta</MenubarItem>
              {isCurrentPath("/departement") && <div className="flex justify-start">
                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
              </div>}
            </Link>
            <MenubarSeparator />
            <Link href="/abroadMyndighet">
              <MenubarItem>Utländska Myndigheter</MenubarItem>
              {isCurrentPath("/abroadMyndighet") && <div className="flex justify-start">
                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
              </div>}
            </Link>
            <MenubarSeparator />
            <Link href="/SekretessMyndighet">
              <MenubarItem>Sekretessbelagda Organ</MenubarItem>
              {isCurrentPath("/SekretessMyndighet") && <div className="flex justify-start">
                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
              </div>}
            </Link>
          </MenubarContent>
        </MenubarMenu>
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
                  <MenubarItem>Statens Bolagsportfölj</MenubarItem>
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
        <MenubarMenu>
          <MenubarTrigger>Om oss</MenubarTrigger>
          <MenubarContent>
            <Link href="/om/OmOss">
              <MenubarItem>Hemsidan</MenubarItem>
              {isCurrentPath("/om/OmOss") && <div className="flex justify-start">
                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
              </div>}
            </Link>
            <MenubarSeparator />
            <Link href="/om/OmInfo">
              <MenubarItem>Informationen</MenubarItem>
              {isCurrentPath("/om/OmInfo") && <div className="flex justify-start">
                <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
              </div>}
            </Link>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
