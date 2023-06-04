"use client";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <nav className=" bg-white/50 border-gray-200 dark:bg-black/50 backdrop-blur-sm saturate-150 z-50 fixed w-full top-0 flex justify-center items-center">
        <div className="w-full px-12 h-20 flex justify-between items-center">
          <div className="hidden max-md:inline w-full" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="w-7 h-7 text-gray-900 dark:text-gray-100"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
          <Link
            href="/"
            className="px-2 flex justify-center space-x-4 w-full dark:transition-all hover:drop-shadow-[0_0_0.5rem_#ffffff70] duration-300"
          >
            <Image
              className="invert-0 dark:invert "
              src="/comclublogo.svg"
              alt="ComClub Logo"
              width={30}
              height={30}
              priority
            />
            <div className="w-full flex flex-col max-md:hidden">
              <h1 className="-mb-1 font-extrabold text-sm bg-clip-text text-gray-900 dark:text-gray-100">
                COMPUTER CLUB
              </h1>
              <h1 className="font-extrabold text-sm bg-clip-text text-gray-900 dark:text-gray-100">
                KMUTNB
              </h1>
            </div>
          </Link>
          {/* <div className="w-1/3">
          <input
            type="text"
            className="hidden md:hidden md:w-1/4 opacity-70 pointer-events-none py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-zinc-800 dark:border-gray-700 dark:text-gray-200"
            placeholder="Search (Not Available Now)"
          />
          </div> */}
          <div className="flex justify-end items-center space-x-4 w-full">
            <ul className="max-md:hidden flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/ComClubKMUTNB"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-900 hover:text-indigo-500 dark:text-gray-100 dark:hover:drop-shadow-[0_0_0.5rem_#ffffff70] dark:hover:text-cyan-500 transition duration-300"
                    // className="hidden md:block w-6 h-6 group-hover:text-gray-900 dark:group-hover:text-white"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/comclub_kmutnb/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-900 dark:text-gray-100 hover:text-indigo-500 dark:hover:drop-shadow-[0_0_0.9rem_#ffffff70] dark:hover:text-cyan-500 transition"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </li>
            </ul>
            <a
              href="https://forms.gle/hUn758q8yAMRBZtf9"
              className="max-md:hidden text-gray-100 bg-indigo-600 hover:bg-indigo-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
            >
              สมัครเข้าร่วมชมรม
            </a>
            <a
              href="https://forms.gle/hUn758q8yAMRBZtf9"
              className="hidden max-md:block text-gray-100 bg-indigo-600 hover:bg-indigo-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 dark:border-slate-700"
            >
              Join
            </a>
          </div>
        </div>
      </nav>
      <div className="h-20"></div>
      <Sidebar isOpen={isOpen} />
    </>
  );
};

export default Navbar;
