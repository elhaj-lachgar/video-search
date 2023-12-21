"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";
import { ModeToggle } from "./theme/Toggler";
import { UserButton, SignInButton, SignOutButton } from "@clerk/nextjs";
import { Input } from "./ui/input";
import { AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  let [keyword, setKeyword] = useState<null | string>(null);
  const Islogged = useAuth().userId ? true : false;
  let [clicked, setClicked] = useState(false);

  const handleSearch = () => {
    if (keyword != null) {
      router.push(`/search/${keyword}`);
    }
    return;
  };
  return (
    <nav className="sticky top-0 w-full  flex justify-between px-5 py-2 items-center bg-gray-200 dark:bg-gray-800 gap-x-4 flex-wrap gap-y-2 z-50">
      <div className={cn(clicked && "w-[90%]")}>
        <Logo />
      </div>
      {Islogged && (
        <div className="none md:flex md:items-center gap-x-2 ">
          <Button variant={"outline"} size={"sm"} onClick={handleSearch}>
            Search
          </Button>
          <Input
            type="text"
            placeholder="find...."
            onChange={(e) => setKeyword(e.currentTarget.value)}
          />
        </div>
      )}

      <AlignJustify
        className={cn("flex md:none text-gray-500 dark:text-gray-200 w-[5%]")}
        onClick={() => setClicked(!clicked)}
      />

      <div className="none md:flex gap-x-2 items-center ">
        {Islogged && <UserButton />}
        <ModeToggle />
        <Button>{Islogged ? <SignOutButton /> : <SignInButton />}</Button>
      </div>
      {clicked ? (
        <>
          {Islogged ? (
            <div className="w-full flex gap-x-2 items-center">
              <Button variant={"outline"} size={"sm"} onClick={handleSearch}>
                Search
              </Button>
              <Input
                type="text"
                placeholder="find...."
                className="w-[200px] h-[40px]"
                onChange={(e) => setKeyword(e.currentTarget.value)}
              />
            </div>
          ) : null}
          <div className="w-full">{Islogged && <UserButton />}</div>
          <div className="w-full">
            <ModeToggle />
          </div>
          <div className="w-full">
            <Button>{Islogged ? <SignOutButton /> : <SignInButton />}</Button>
          </div>
        </>
      ) : null}
    </nav>
  );
}

export default Navbar;
