"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navItems";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">

        {/* Desktop Nav */}
        <nav className="flex items-center gap-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === href
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
