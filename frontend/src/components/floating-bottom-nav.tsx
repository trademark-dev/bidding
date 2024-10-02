import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { useRouter } from 'next/router';

export function FloatingDockNav() {
    const links = [
        {
          title: "Home",
          icon: (
            <IconHome
                style={{
                    color : '#0d0821',
                }}
            className="h-full w-full  dark:text-neutral-300" />
          ),
          href: "/",
        },
        {
          title: "Products",
          icon: (
            <IconTerminal2
                style={{
                    color : '#0d0821',
                }}
            className="h-full w-full  dark:text-neutral-300" />
          ),
          href: "/products",
        },
        {
          title: "Components",
          icon: (
            <IconNewSection
                style={{
                    color : '#0d0821',
                }}
            className="h-full w-full  dark:text-neutral-300" />
          ),
          href: "/components",
        },
        {
          title: "Changelog",
          icon: (
            <IconExchange
                style={{
                    color : '#0d0821',
                }}
            className="h-full w-full  dark:text-neutral-300" />
          ),
          href: "/changelog",
        },
        {
          title: "Twitter",
          icon: (
            <IconBrandX
                style={{
                    color : '#0d0821',
                }}
            className="h-full w-full  dark:text-neutral-300" />
          ),
          href: "https://twitter.com",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub
                style={{
                    color : '#0d0821',
                }}
            className="h-full w-full  dark:text-neutral-300" />
          ),
          href: "https://github.com",
        },
      ];
      
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        className="translate-y-20" 
        items={links}
      />
       
    </div>
  );
}
