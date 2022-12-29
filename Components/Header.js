import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
  HomeIcon,
} from "@heroicons/react/outline";

// import {SearchIcon } from "@heroicons/react/24/outline";
const Header = () => {
  const myLoader = ({ src, width, quality }) => {
    return `https://1000logos.net/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="sticky top-0 shadow-md bg-white flex items-center justify-between p-2 lg:px-5">
      <div className="flex items-center">
        <Image
          loader={myLoader}
          src="wp-content/uploads/2021/04/Facebook-logo.png"
          alt="Picture of the author"
          width={40}
          height={100}
        />
        <div className="flex  ml-2items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 w-6 text-blue-500" />
          <input
            className=" hidden md:inline-flex bg-transparent outline-none "
            type="text"
            placeholder="Search Facebook"
          ></input>
        </div>
      </div>

      {/* Center  */}

      <div className="flex cursor-pointer justify-center lg:space-x-6 md:space-x-4">
        <HomeIcon className="h-6 active:border-black w-6 p-1 hover:bg-gray-100 text-blue-500 lg:w-10 lg:h-10" />
        <FlagIcon className="h-6 w-6 p-1 lg:w-10 lg:h-10 hover:bg-gray-100 text-blue-500" />
        <PlayIcon className="h-6 w-6  p-1 lg:w-10 lg:h-10 hover:bg-gray-100 text-blue-500" />
        <ShoppingCartIcon className="h-6 w-6  p-1 lg:w-10 lg:h-10 hover:bg-gray-100 text-blue-500" />
        <UserGroupIcon className="h-6 w-6  p-1 lg:w-10 lg:h-10 hover:bg-gray-100 text-blue-500" />
      </div>

      <div className="flex icon items-center space-x-2 justify-end">
        <p className="white-space:nowrap font-semibold pl-10">Khairul Ahmed</p>
        <ViewGridAddIcon className="hidden cursor-pointer hover:bg-gray-100 md:inline-flex xl:inline-flex h-6 w-6  p-1 lg:w-10 lg:h-10 hover:bg-gray-100 text-blue-500" />
        <ChatIcon className="hidden md:inline-flex cursor-pointer hover:bg-gray-100 xl:inline-flex h-6 w-6  p-1 lg:w-10 lg:h-10 hover:bg-gray-100 text-blue-500" />
        <BellIcon className="h-6 hidden md:inline-flex cursor-pointer hover:bg-gray-100 xl:inline-flex w-6  p-1 lg:w-10 lg:h-10 hover:bg-gray-100 text-blue-500" />
        <ChevronDownIcon className="h-6 hidden md:inline-flex cursor-pointer hover:bg-gray-100 xl:inline-flex w-6  p-1 lg:w-10 lg:h-10 hover:bg-gray-100 text-blue-500" />
      </div>
    </div>
  );
};

export default Header;
