import React from "react";
import Link from "next/link";

export default function signin() {
  return (
    <>
      <div className="bg-cover bg-1">
        <div className="flex items-center justify-center min-h-screen">
          <main className="flex items-center justify-center flex-1 h-screen px-20">
            <div className="flex flex-col w-1/3 p-2 py-8 bg-white rounded-lg min-h-max bg-opacity-90">
              <div className="mt-8 text-center">
                <p className="block mb-4 text-3xl font-bold leading-normal font-sant">
                  Login to your account
                </p>
              </div>

              <form className="m-6">
                <label className="block font-bold leading-normal uppercase text-gray-logText">
                  email
                </label>
                <input
                  name="email"
                  className="w-full p-2 my-2 mb-5 border border-solid rounded-lg outline-none bg-gray-50"
                  type="text"
                  required
                  placeholder="Your email"
                ></input>

                <label className="block font-bold leading-normal uppercase text-gray-logText">
                  password
                </label>
                <input
                  name="password"
                  className="w-full p-2 my-2 mb-5 border border-solid rounded-lg outline-none bg-gray-50"
                  type="password"
                  required
                  placeholder="Password"
                ></input>

                <Link
                  href="/homePage"
                  className="w-full py-3 my-4 text-center text-white bg-blue-800 rounded-lg shadow-md hover:bg-blue-700 bg-blue-original"
                  type="submit"
                >
                  Login
                </Link>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
