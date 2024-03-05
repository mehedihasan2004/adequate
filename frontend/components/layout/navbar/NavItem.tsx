import { TNavItem } from "@/types/navbar";
import Link from "next/link";

const NavItem = ({ label, href }: TNavItem) => {
  return (
    <Link
      href={href}
      className="hover:bg-primary/10 active:bg-primary/10 rounded-md px-3 py-2 font-medium transition duration-300"
    >
      {label}
    </Link>
  );
};

export default NavItem;
