"use client";

import React from "react";
import data from "@/data/data.json";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Containerprops {
  image: string;
  title: string;
}

// 
function ContainerVideo({ image,  title }: Containerprops) {



  return (
    <Card className="w-[300px] h-[300px] rounded-2xl hover:rounded-none shadow-2xl hover:w-[310px] ">
      <CardContent className="relative w-full h-[200px] ">
        <Image src={image} alt="video" fill className="rounded-t-2xl hover:rounded-none"/>
      </CardContent>
      <CardFooter>
        {title}
      </CardFooter>
    </Card>
  );
}

export default ContainerVideo;
