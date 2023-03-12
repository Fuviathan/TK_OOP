import Link from "next/link";
import { SearchIcon, ShoppingBagIcon } from "@heroicons/react/solid";
import { UserIcon } from '@heroicons/react/outline'


/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "Home", href: "/homePage" },
  { name: "Women", href: "/women" },
  { name: "Men", href: "/men" },
  { name: "New Arrivals", href: "/newArrivals" },
  { name: "Trending", href: "/trending" },
];

export default function Header() {
  return (
    <div className="bg-gray-700 bg-opacity-80">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 lg:border-none">
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
          <div className="flex items-center">
            <button href="#" className="p-2 ml-2 text-white hover:opacity-70">
              <span className="sr-only">Search</span>
              <SearchIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            <a
              href="#"
              className="p-2 ml-4 text-white hover:opacity-70"
            >
              <span className="sr-only">Account</span>
              <UserIcon className="w-6 h-6" aria-hidden="true" />
            </a>
            <div className="flow-root ml-4 hover:opacity-70">
              <Link
                href="/shoppingcart"
                className="flex items-center p-2 -m-2 group"
              >
                <ShoppingBagIcon
                  className="flex-shrink-0 w-6 h-6 text-white"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-white">3</span>
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
