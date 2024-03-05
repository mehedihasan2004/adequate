"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { TNavItem } from "@/types/navbar";
import { navItems } from "@/lib/navItems";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/components/layout/navbar";

const Navbar = () => {
  const { push } = useRouter();

  return (
    <nav className="mt-2 border-2 border-red-800 flex flex-row items-center justify-between">
      <div
        onClick={() => push("/")}
        className="flex flex-row items-end cursor-pointer"
      >
        <Image src="/images/logo.png" alt="logo" height={50} width={50} />
        <h2 className="text-2xl font-bold ml-1 leading-10 transition-colors">
          Adequate
        </h2>
      </div>
      <div className="flex flex-row">
        <Input type="text" />
        <Button size="icon" className="px-2">
          <Search />
        </Button>
      </div>
      <div className="flex flex-row items-center justify-end gap-x-2">
        {navItems.map((props: TNavItem) => (
          <NavItem key={props.href} {...props} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
