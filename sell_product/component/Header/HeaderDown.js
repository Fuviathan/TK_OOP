import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "Home", href: "#" },
  { name: "Women", href: "#" },
  { name: "Men", href: "#" },
  { name: "New Arrivals", href: "#" },
  { name: "Trending", href: "#" },
];

export default function Header() {
  return (
    <header className="bg-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between lg:border-none">
          <div className="flex items-center">
            <div className="space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex pl-4">
            {/* <div className="ml-4 space-x-4">
              <Link
                href="#"
                className="inline-block py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:text-gray-300"
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-gray-700 hover:bg-gray-300"
              >
                Sign up
              </Link>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
