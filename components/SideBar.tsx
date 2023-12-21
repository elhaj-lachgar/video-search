"use client";
import React from "react";
import { History } from "lucide-react";
import { Save } from "lucide-react";
import { useRouter } from "next/navigation";
function SideBar() {
  const router = useRouter();
  return (
    <div className="w-full  flex flex-wrap px-2 py-10 sticky top-5 left-0 bg-gray-100 h-[100vh]  dark:bg-gray-800">
      <div className="flex md:none flex-col gap-y-5 ">
        <History className="dark:text-gray-300" onClick={()=>{
            router.push("/dashbord/history")
        }} />
        <Save className="dark:text-gray-300" onClick={()=>{
            router.push("/dashbord/save")
        }} />
      </div>
      <div className="none md:flex flex-col gap-y-5">
        <div className="flex gap-x-2 cursor-pointer" onClick={() =>{
            router.push("/dashbord/history")
        }}>
          <History className="dark:text-gray-300" />
          History
        </div>
        <div className="flex gap-x-2"onClick={() =>{
            router.push("/dashbord/save")
        }}>
          <Save className="dark:text-gray-300" />
          Save
        </div>
      </div>
    </div>
  );
}

export default SideBar;
