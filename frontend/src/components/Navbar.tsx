"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"



export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="wrape_nav_coins"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            minWidth: '100%',
          }}
        >
          <div className="nav_style_one"
            style={{
              color: 'white',
              backgroundColor: '#ffffff4d',
              padding: '0.2rem 0.5rem',
              borderRadius: '10px',
              minWidth: '14%',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            ><i className="fa-solid fa-dollar-sign"></i> <span
              style={{
                fontSize: '14px'
              }}
            > &nbsp; 10654</span></span>
          </div>
          <div className="nav_style_one"
            style={{
              color: 'white',
              backgroundColor: '#ffffff4d',
              padding: '0.2rem 0.5rem',
              borderRadius: '10px',
              minWidth: '14%',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            ><i className="fa-solid fa-dollar-sign"></i> <span
              style={{
                fontSize: '14px'
              }}
            > &nbsp; 10654</span></span>
          </div>
          <div className="nav_style_one"
            style={{
              color: 'white',
              backgroundColor: '#ffffff4d',
              padding: '0.2rem 0.5rem',
              borderRadius: '10px',
              minWidth: '14%',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            ><i className="fa-solid fa-dollar-sign"></i> <span
              style={{
                fontSize: '14px'
              }}
            > &nbsp; 10654</span></span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="amir" className="button_jgugwgwe">
                <Avatar className="name_avter">
                  <AvatarImage src="/assets/images/avtar.jpg" alt="@shadcn" />
                  <AvatarFallback>syn</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem className="last_logout">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Menu>
      
    </div>
  );
}
