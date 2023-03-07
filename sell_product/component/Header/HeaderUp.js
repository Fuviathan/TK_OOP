import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";

/* This example requires Tailwind CSS v2.0+ */
export default function HeaderUp() {
  return (
    <div className="bg-gray-900">
      <div className="flex justify-between items-center h-10 px-4 mx-auto max-w-7xl">
        <p className="text-white text-center">
          Get free delivery on orders over $100
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Sign in
          </a>
          <a
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
