"use client";

import * as React from "react";

import { cn } from "../../lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
// import { useLocation, } from "react-router-dom";

export function NavigationMenuComp({
  title,
  href,
  description,
  deshref,
}: {
  title: string;
  href: string;
  description: string[] | string; // Allow an array of strings or a single string
  deshref: string[] | string; // Allow an array of strings or a single string
}) {
  // const location = useLocation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
          // className={`${
          //   pathname === "/about" ||
          //   pathname === "/about#whoweare" ||
          //   pathname === "/about#meettheteam"
          //     ? "text-[#F49D3F] font-bold "
          //     : "hover:text-[#F49D3F]  "
          // }`}
          >
            <a href={href}>{title}</a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[200px] bg-[#ffffff] relative z-20">
              {/* Check if description and deshref are arrays and map through them */}
              {Array.isArray(description) && Array.isArray(deshref) ? (
                description.map((desc, index) => (
                  <ListItem
                    key={index}
                    href={deshref[index] || "#"}
                    title={desc}
                  />
                ))
              ) : (
                <ListItem
                  href={deshref as string}
                  title={description as string}
                />
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none  bg-[#ffffff] transition-colors  text-[15px] ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none hover:text-[#F49D3F] text-[15px]">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
