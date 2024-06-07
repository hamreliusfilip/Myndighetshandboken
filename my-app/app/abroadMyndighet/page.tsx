'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { AMyndigheter } from '@/lib/models/Amyndighet';
import CompleteMenu from '../../components/Main/completeMenu';
import Logo from '../../components/Main/logo';
import Footer from '../../components/Main/footer';
import ListCard from '@/components/DatabaseComponents/listCardVariant';

export default function Page() {

  const [loading, setLoading] = useState(true);
  const [Amyndigheter, setAMyndigheter] = useState<AMyndigheter[]>([]);
  const [filterReset, setFilterReset] = useState(false);
  const [filteredAMyndigheter, setFilteredAMyndigheter] = useState<AMyndigheter[]>([]);
  const [sortingPlaceholder, setSortingPlaceholder] = useState("Alfabetisk ordning - land");

  const [searchQuery, setSearchQuery] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedFilters = localStorage.getItem('AmyndighetFilters');
      if (storedFilters) {
        return JSON.parse(storedFilters).searchQuery;
      }
      return '';
    }
  });

  if (typeof window !== 'undefined') {

    useEffect(() => {
      const storedFilters = localStorage.getItem('AmyndighetFilters');
      if (storedFilters) {
        const parsedFilters = JSON.parse(storedFilters);

        setSearchQuery(parsedFilters.searchQuery);
      }
    }, []);

    useEffect(() => {
      const filtersToStore = JSON.stringify({
        searchQuery
      });
      localStorage.setItem('AmyndighetFilters', filtersToStore);
    }, [searchQuery]);

  }

  const fetchAMyndigheter = async () => {

    try {
      const res = await fetch("/api/Amyndigheter?fields=Country,_id,City", {
        method: "GET",
      });
      const data = await res.json();
      return data.Amyndighet;
    } catch (error) {
      console.error("Error fetching Amyndigheter:", error);
      return [];
    }
  }

  useEffect(() => {

    let storedSort: string | null;

    if (typeof window !== 'undefined') {
      storedSort = localStorage.getItem('mynSort2');
    }

    fetchAMyndigheter().then((Amyndigheter) => {
      setLoading(false);

      if (storedSort === 'alfa2') {
        const normalize = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        const sortedAMyndigheter = [...Amyndigheter].sort((a, b) => {
          const aName = normalize(a.City);
          const bName = normalize(b.City);
          return aName.localeCompare(bName);
        });

        setAMyndigheter(sortedAMyndigheter);
        localStorage.setItem('compSort2', 'alfa2');
        setSortingPlaceholder("Alfabetisk ordning - stad");

      } else {
        const normalize = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        const sortedAMyndigheter = [...Amyndigheter].sort((a, b) => {
          const aName = normalize(a.Country);
          const bName = normalize(b.Country);
          return aName.localeCompare(bName);
        });

        setAMyndigheter(sortedAMyndigheter);
        localStorage.setItem('compSort2', 'alfa');
        setSortingPlaceholder("Alfabetisk ordning - land");
      }

    }).catch((error) => {
      console.error("Error setting Amyndigheter:", error);
    });
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    const filteredAMyndigheter = Amyndigheter.filter(Amyndighet => {

      const cityMatch = Amyndighet.City.toLowerCase().includes(searchQuery.toLowerCase());
      const countryMatch = Amyndighet.Country.toLowerCase().includes(searchQuery.toLowerCase());

      return (cityMatch || countryMatch);
    });
    setFilteredAMyndigheter(filteredAMyndigheter);
  }, [Amyndigheter, searchQuery]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setFilterReset(true);
    localStorage.setItem('mynSort2', 'alfa');
    setAMyndigheter([...Amyndigheter].sort((a, b) => a.Country.localeCompare(b.Country)));
    setSortingPlaceholder("Alfabetisk ordning - land");

    setTimeout(() => {
      setFilterReset(false);
    }, 0);
  };

  const cards = [];

  for (let i = 0; i < 7; i++) {
    cards.push(
      <Card key={i} className='m-4 p-5'>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-2 h-16 mt-1"></div>
          <div className="h-4 bg-gray-200 rounded mb-2 h-12 mt-5"></div>
          <div className="h-4 bg-gray-200 rounded mb-2 h-12 mt-5"></div>
        </div>
      </Card>
    );
  }

  function changeSorting(value: string) {

    if (value === 'alfa') {
      const normalize = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
      const sortedAMyndigheter = [...Amyndigheter].sort((a, b) => {
        const aName = normalize(a.Country);
        const bName = normalize(b.Country);
        return aName.localeCompare(bName);
      });

      setAMyndigheter(sortedAMyndigheter);
      localStorage.setItem('compSort2', 'alfa');
      setSortingPlaceholder("Alfabetisk ordning på land");
    }
    if (value === 'alfa2') {
      const normalize = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
      const sortedAMyndigheter = [...Amyndigheter].sort((a, b) => {
        const aName = normalize(a.City);
        const bName = normalize(b.City);
        return aName.localeCompare(bName);
      });

      setAMyndigheter(sortedAMyndigheter);
      localStorage.setItem('compSort2', 'alfa');
      setSortingPlaceholder("Alfabetisk ordning på stad");
    }
  }

  return (
    <>
      <div>
        <Logo />
        <CompleteMenu />
        <div className="text-center">
          <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text mt-10 mb-1 px-1 pb-1"> Sveriges ambassader och generalkonsulat </h1>
          <p className="font-semibold text-small text-slate-300 mb-10">Alla svenska utlandsmyndigheter</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='basis-1/2'>
          <input
            type="text"
            placeholder="Sök på ett land, stad, generalkonsulat, ambassad eller delegation..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-200 rounded-md p-2 w-full mb-4 font-light font-sans text-sm"
          />
          <p className='font-slate-300 text-sm font-light'>Antal hittade utlandsmyndigheter: {filteredAMyndigheter.length} st</p>

          {loading == true ? (
            <Card className="h-120 overflow-y-auto mt-4">
              <>{cards}</>
            </Card>
          ) : (
            <div className='overflow-y-auto mt-4'>
              <Card className="h-120 overflow-y-auto">
                {filteredAMyndigheter.map((Amyndighet: any) => (
                  <div key={Amyndighet._id}>
                    <ListCard Amyndighet={Amyndighet} />
                  </div>
                ))}
              </Card>
            </div>)}
        </div>
        <div className='ml-5'>
          <div className=''>
            <NavigationMenu>
              <NavigationMenuList className="border border-bg-slate-300 rounded-md">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='font-regular'>Hjälp</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className='w-96 h-68 p-7'>
                      Detta är en sökmotor för svenska utlands myndigheter. Du kan söka på samtliga utlandsmyndigheter i Sverige och filtrera på olika kriterier. Använd Filtreringsalternativen till vänster eller sökrutan för att hitta en specifik myndighet. Klickar du på knappen högst upp i högra hörnet på varje myndighet kommer du till den specifka sidan för just den myndigheten.
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem >
                  <Link href="abroadMyndighet/listaAmyndighet" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} >
                      Generisk lista
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className='mt-3 font-regular'>
              <Select onValueChange={changeSorting} >
                <SelectTrigger>
                  <p>{sortingPlaceholder}</p>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sortering</SelectLabel>
                    <SelectItem value="alfa">Alfabetisk ordning - land</SelectItem>
                    <SelectItem value="alfa2">Alfabetisk ordning - stad</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button className='bg-red-600 mt-3 font-normal w-full' onClick={handleClearFilters}>Rensa filter</Button>
          </div>
        </div>

      </div >
      <Footer />
    </>
  );
}


