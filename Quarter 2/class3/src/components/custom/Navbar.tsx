import Image from "next/image";
import dev from "@/assets/dev.png";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Menu from "./Menu";

function Navbar() {
  return (
    <div className="flex justify-center items-center bg-white min-h-[64px]">
      <div className="grid grid-cols-[10%,80%,10%] items-center w-4/5 h-full ">
        {/* Logo */}
        <div>
          <a href="/">
            <Image src={dev} className="h-20 w-20 rounded-full" alt="logo" />
          </a>
        </div>
        {/* Menu */}
        <div>
          <Menu />
        </div>
        {/* Avatar */}
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
