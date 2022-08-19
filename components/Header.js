import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import {MicrophoneIcon, SearchIcon, XIcon} from "@heroicons/react/solid";
import search from "../pages/search";

function Header() {
  const router = useRouter();
  const SearchInputRef = useRef(null);
  return (
    <header>
      <Image
        height={40}
        width={120}
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <form className="flex px-6 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
        <input
          ref={SearchInputRef}
          type="text"
          className="flex-grow w-full focus:outline-none"
        />

        <XIcon
          className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition hover:scale-125"
          onClick={() => (SearchInputRef.current.value = "")}
        />

        <MicrophoneIcon className="h-6 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
        <SearchIcon className="text-blue-500 h-6 sm:inline-flex "/>
      </form>
    </header>
  );
}

export default Header;
