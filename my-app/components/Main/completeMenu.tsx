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

type Submenu = 'databaser' | 'fakta-statistik' | 'om-oss' | null;

export default function CompleteMenu() {
  const [currentPath, setCurrentPath] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<Submenu>(null);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    setIsMobile(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  const isCurrentPath = (path: string): boolean => currentPath === path;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = (submenu: Submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  return (
    <div>
      {isMobile ? (
        <div className='flex justify-end -mt-20 pt-2 pr-3'>
          <button onClick={toggleMenu} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute top-0 left-0 w-full h-200 bg-white z-50 border rounded-lg">
              <div className='flex justify-end'>
                <button onClick={toggleMenu} className="p-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className='p-3'>
                <ul className="flex flex-col justify-start items-right h-full">
                  <li className="p-4 font-bold text-xl"><Link href="/">
                    <div className='flex justify-start items-center flex-row'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                      Hem
                    </div>
                  </Link></li>
                  <div className="border-b border-slate-400 w-3/4 ml-4"></div>
                  <li className="p-4 font-bold text-xl" onClick={() => toggleSubmenu('databaser')}>
                    <div className='flex justify-start items-center flex-row'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                      Databaser & Sökmotorer
                    </div></li>
                  {openSubmenu === 'databaser' && (
                    <ul className="pl-4">

                      <li className="p-4"><Link href="/myndighet">Myndigheter</Link>
                        {isCurrentPath("/myndighet") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4"><Link href="/company">Statliga Företag</Link>
                        {isCurrentPath("/company") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4"><Link href="/abroadMyndighet">Utländska Myndigheter</Link>
                        {isCurrentPath("/abroadMyndighet") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4"><Link href="/departement">Departementkarta</Link>
                        {isCurrentPath("/departement") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                    </ul>
                  )}
                  <div className="border-b border-slate-400 w-3/4 ml-4"></div>
                  <li className="p-4 font-bold text-xl" onClick={() => toggleSubmenu('fakta-statistik')}>
                    <div className='flex justify-start items-center flex-row'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                      </svg>

                      Fakta & Statistik
                    </div>
                  </li>
                  {openSubmenu === 'fakta-statistik' && (
                    <ul className="pl-4">
                      <p className='font-semibold text-lg ml-5'> Statistik </p>
                      <li className="p-4 ml-5"><Link href="/faktaover/statistik">Myndighetsstatistik</Link>
                        {isCurrentPath("/faktaover/statistik") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4 ml-5"><Link href="/faktaover/politik">Riksdagspartier</Link>
                        {isCurrentPath("/faktaover/politik") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4 ml-5"><Link href="/faktaover/statistikForetag">Statens Bolagsportfölj</Link>
                        {isCurrentPath("/faktaover/statistikForetag") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4 ml-5"><Link href="/faktaover/statsbudget">Statsbudgeten</Link>
                        {isCurrentPath("/faktaover/statsbudget") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4 ml-5"><Link href="/faktaover/riksdagen">Riksdagen, Regeringen & Votering</Link>
                        {isCurrentPath("/faktaover/riksdagen") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <p className='font-semibold text-lg ml-5'> Fakta </p>
                      <li className="p-4 ml-5"><Link href="/faktaover/SekretessMyndighet">Sekretessbelagda Organ</Link>
                        {isCurrentPath("/faktaover/SekretessMyndighet") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4 ml-5"><Link href="/faktaover/relations">Internationella relationer</Link>
                        {isCurrentPath("/faktaover/relations") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4 ml-5"><Link href="/faktaover/foretagMyndigheter">Myndigheter & Företag</Link>
                        {isCurrentPath("/faktaover/foretagMyndigheter") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4 ml-5"><Link href="/faktaover/staten">Grundläggande Fakta</Link>
                        {isCurrentPath("/faktaover/staten") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4 ml-5"><Link href="/faktaover/Tips">Tips - Faktakällor</Link>
                        {isCurrentPath("/faktaover/Tips") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                    </ul>
                  )}
                  <div className="border-b border-slate-400 w-3/4 ml-4"></div>
                  <li className="p-4 font-bold text-xl" onClick={() => toggleSubmenu('om-oss')}>
                    <div className='flex justify-start items-center flex-row'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                      </svg>
                      Om oss
                    </div>
                  </li>
                  {openSubmenu === 'om-oss' && (
                    <ul className="pl-4">
                      <li className="p-4"><Link href="/om/OmOss">Hemsidan</Link>
                        {isCurrentPath("/om/OmOss") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4"><Link href="/om/OmInfo">Informationen</Link>
                        {isCurrentPath("/om/OmInfo") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                      <li className="p-4"><Link href="/om/Kontakt">Kontakt</Link>
                        {isCurrentPath("/om/Kontakt") && (
                          <div className="flex justify-start">
                            <div className="bg-slate-300 h-1 w-5 mt-1 rounded rounded-corners"></div>
                          </div>
                        )}</li>
                    </ul>
                  )}
                  <div className="border-b border-slate-400 w-3/4 ml-4"></div>
                </ul>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center mr-5 ml-5">
          <Menubar>
            <Link href="/">
              <MenubarMenu>
                <MenubarTrigger>Hem</MenubarTrigger>
                {isCurrentPath("/") && (
                  <div className="flex justify-center">
                    <div className="bg-slate-300 h-1 w-5 -mt-1 mb-1 rounded rounded-corners"></div>
                  </div>
                )}
              </MenubarMenu>
            </Link>
            <MenubarMenu>
              <MenubarTrigger>Sökmotorer & Databaser</MenubarTrigger>
              <MenubarContent>
                <Link href="/myndighet">
                  <MenubarItem>Myndigheter</MenubarItem>
                  {isCurrentPath("/myndighet") && (
                    <div className="flex justify-start">
                      <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                    </div>
                  )}
                </Link>
                <MenubarSeparator />
                <Link href="/company">
                  <MenubarItem>Statliga Företag</MenubarItem>
                  {isCurrentPath("/company") && (
                    <div className="flex justify-start">
                      <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                    </div>
                  )}
                </Link>
                <MenubarSeparator />
                <Link href="/abroadMyndighet">
                  <MenubarItem>Utländska Myndigheter</MenubarItem>
                  {isCurrentPath("/abroadMyndighet") && (
                    <div className="flex justify-start">
                      <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                    </div>
                  )}
                </Link>
                <MenubarSeparator />
                <Link href="/departement">
                  <MenubarItem>Departementkarta</MenubarItem>
                  {isCurrentPath("/departement") && (
                    <div className="flex justify-start">
                      <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                    </div>
                  )}
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
                      {isCurrentPath("/faktaover/statistik") && (
                        <div className="flex justify-start">
                          <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                        </div>
                      )}
                    </Link>
                    <MenubarSeparator />
                    <Link href="/faktaover/politik">
                      <MenubarItem>Riksdagspartier</MenubarItem>
                      {isCurrentPath("/faktaover/politik") && (
                        <div className="flex justify-start">
                          <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                        </div>
                      )}
                    </Link>
                    <MenubarSeparator />
                    <Link href="/faktaover/statistikForetag">
                      <MenubarItem>Statens Bolagsportfölj</MenubarItem>
                      {isCurrentPath("/faktaover/statistikForetag") && (
                        <div className="flex justify-start">
                          <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                        </div>
                      )}
                    </Link>
                    <MenubarSeparator />
                    <Link href="/faktaover/statsbudget">
                      <MenubarItem>Statsbudgeten</MenubarItem>
                      {isCurrentPath("/faktaover/statsbudget") && (
                        <div className="flex justify-start">
                          <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                        </div>
                      )}
                    </Link>
                    <MenubarSeparator />
                    <Link href="/faktaover/riksdagen">
                      <MenubarItem>Riksdagen, Regeringen & Votering</MenubarItem>
                      {isCurrentPath("/faktaover/riksdagen") && (
                        <div className="flex justify-start">
                          <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                        </div>
                      )}
                    </Link>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Fakta</MenubarSubTrigger>
                  <MenubarSubContent>
                    <Link href="/faktaover/SekretessMyndighet">
                      <MenubarItem>Sekretessbelagda Organ</MenubarItem>
                      {isCurrentPath("/SekretessMyndighet") && (
                        <div className="flex justify-start">
                          <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                        </div>
                      )}
                    </Link>
                    <MenubarSeparator />
                    <Link href="/faktaover/relations">
                      <MenubarItem>Internationella relationer</MenubarItem>
                      {isCurrentPath("/faktaover/relations") && (
                        <div className="flex justify-start">
                          <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                        </div>
                      )}
                    </Link>
                    <MenubarSeparator />
                    <Link href="/faktaover/foretagMyndigheter">
                      <MenubarItem>Myndigheter & Företag</MenubarItem>
                      {isCurrentPath("/faktaover/foretagMyndigheter") && (
                        <div className="flex justify-start">
                          <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                        </div>
                      )}
                    </Link>
                    <MenubarSeparator />
                    <Link href="/faktaover/staten">
                      <MenubarItem>Grundläggande Fakta</MenubarItem>
                      {isCurrentPath("/faktaover/staten") && (
                        <div className="flex justify-start">
                          <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                        </div>
                      )}
                    </Link>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Övrigt</MenubarSubTrigger>
                  <MenubarSubContent>
                    <Link href="/faktaover/Tips">
                      <MenubarItem>Tips - Faktakällor</MenubarItem>
                      {isCurrentPath("/faktaover/Tips") && (
                        <div className="flex justify-start">
                          <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                        </div>
                      )}
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
                  {isCurrentPath("/om/OmOss") && (
                    <div className="flex justify-start">
                      <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                    </div>
                  )}
                </Link>
                <MenubarSeparator />
                <Link href="/om/OmInfo">
                  <MenubarItem>Informationen</MenubarItem>
                  {isCurrentPath("/om/OmInfo") && (
                    <div className="flex justify-start">
                      <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                    </div>
                  )}
                </Link>
                <MenubarSeparator />
                <Link href="/om/Kontakt">
                  <MenubarItem>Kontakt</MenubarItem>
                  {isCurrentPath("/om/Kontakt") && (
                    <div className="flex justify-start">
                      <div className="bg-slate-300 h-1 w-5 mb-1 ml-2 rounded rounded-corners"></div>
                    </div>
                  )}
                </Link>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      )}
    </div>
  );
}
