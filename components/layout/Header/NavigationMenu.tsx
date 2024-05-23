"use client";

// HOOKS
import { useMediaQuery } from "@/hooks/useMediaQuery";

// COMPONENTS
import { Drawer, DrawerTrigger, DrawerContent } from "../../ui/drawer";

// ICONS
import { MenuIcon } from "lucide-react";

// CONSTANTS
import { navigationLinks } from "@/constants/navigation";

// NAVIGATION
import Link from "next/link";

// ASSETS
import Image from "next/image";

export default function NavigationMenu() {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (

    <div className="sticky flex items-center justify-around flex-row h-[10vh] m-auto p-5 w-full bg-[url(/images/Header/header_image.svg)] bg-no-repeat bg-cover top-0 z-50">
      <span className="text-3xl font-bold text-white">COVIRNET</span>
      {/* <span className="flex-grow"></span> */}
      <div className="flex justify-between gap-24 p-3">
        {navigationLinks.map((map) => {
          return (
            <Link
              className="text-white"
              href={map.path}
              key={map.id}
              prefetch={false}
            >
              {map.title}
            </Link>
          );
        })}
      </div>
    </div>
  ) : isTablet ? (
    <div className=" sticky mt-0 z-50 w-full m-auto bg-black h-[5vh] top-0">
      <Drawer direction="right">
        <DrawerTrigger className="w-full h-full flex justify-start items-center px-5">
          <MenuIcon color="white" />
        </DrawerTrigger>
        <DrawerContent className="bg-black">
          <div className="flex flex-col justify-between gap-10 p-3">
            {navigationLinks.map((map) => {
              return (
                <Link
                  className="text-white"
                  href={map.path}
                  key={map.id}
                  prefetch={false}
                >
                  {map.title}
                </Link>
              );
            })}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  ) : (
    <div className="fixed mt-0 z-50 w-full m-auto bg-black h-[10vh] top-0">
      <Drawer direction="right">
        <DrawerTrigger className="w-full h-full flex justify-start items-center px-5">
          <MenuIcon color="white" />
        </DrawerTrigger>
        <DrawerContent className="bg-black">
          <div className="flex flex-col justify-between gap-10 p-3">
            {navigationLinks.map((map) => {
              return (
                <Link
                  className="text-white"
                  href={map.path}
                  key={map.id}
                  prefetch={false}
                >
                  {map.title}
                </Link>
              );
            })}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
