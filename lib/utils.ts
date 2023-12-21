import { type ClassValue, clsx } from "clsx"
import data from "@/data/data.json"
import search from"@/data/data1.json"
import data2 from "@/data/data2.json"

import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type VideoResponce = typeof data

export type SearchResponce = typeof search


export const header = {
  "Content-Type" : "application/json"
};


export type UserListParams = {
  data : {
    _id : string;
    userId:string;
    videos ?:[{
      videoId:string;
      isLiked:boolean;
      imageUrl:string;
      title:string;
      _id:string;
    }],
    createdAt:string;
    updatedAt:string;
    __v:string;
  }
}

export type Favourite =  {
  data ?:[{
    videoId:string;
    isLiked:boolean;
    imageUrl:string;
    title:string;
    _id:string;
  }],
  
}
export type List = typeof data2