"use client";
import React from 'react'
import { NavbarDemo } from "@/components/Navbar";
import { FloatingDockNav } from '@/components/floating-bottom-nav';
import { CarouselHerro } from '@/components/hero-slider';
import { Tabss } from '@/components/tabss';


export default function Page() {

  return (
    <>
      <NavbarDemo />
      <CarouselHerro />
      <Tabss />
      <FloatingDockNav />
    </>

  )
}

