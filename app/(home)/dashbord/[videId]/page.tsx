"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import GetVideo from "@/utils/get-video";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import AddHandler from "@/utils/add-list";
import { Star, TornadoIcon } from "lucide-react";
import LikedHandler from "@/utils/Liked";
import toast, { Toaster } from "react-hot-toast";

function page({ params }: { params: Params }) {
  let [data, setData] = useState<any>(null);
  let [number, setNumber] = useState(0);
  let [clicked, setClicked] = useState(false);
  let [ render , setRender ] = useState(false);
  let [ loading , setLoading ] = useState(false);
  const { userId } = useAuth();

  const FetchingData = async () => {
    const res = await GetVideo(params.videId);
    if (res.items) {
      setData(res);
    }

    if (res.items) {
      if (!userId) return;
      const resp = await AddHandler(
        userId,
        params.videId,
        res.items[0].snippet.thumbnails.high.url,
        res.items[0].snippet.title
      );
      if (resp == null && resp == undefined) return null;

      const index = resp.videos?.findIndex((ele) => {
        return ele.videoId == params.videId;
      });
      if (index==undefined) return null;

      if (index > -1 && resp.videos != undefined) {
        setClicked(resp.videos[index].isLiked);
      }
      setNumber(number + 1);
    }
  };

  const handleClick = async ( ) => {
    if ( !userId )
      return ;

    const res = await LikedHandler(userId , params.videId);

    if (!res)
      return;

    const index = res.data.videos?.findIndex((video)=>{
      return video.videoId == params.videId;
    });
    console.log({index})

    if(index == undefined)
      return ;
    if ( index > - 1  && res.data.videos != undefined ) {
      
      setClicked(res.data.videos[index].isLiked);
      if ( !res.data.videos[index].isLiked )
        toast.success('unsaved');
      else
        toast.success('saved');
    }
    return ;
  }

  useEffect(() => {
    if (number == 0) FetchingData();
    else {
      handleClick();
    }
    setNumber(number + 1);
  }, [render]);

  console.log(clicked);

  return (
    <div className="flex justify-center  flex-wrap gap-y-10 my-20">
      {data ? (
        <>
          <h1 className="w-full text-center font-bold md:text-3xl ">
            {data.items[0].snippet.title}
          </h1>
          <div className="none md:flex md:justify-center w-full ">
            <iframe
              id="player"
              width="600px"
              height="360px"
              src={`http://www.youtube.com/embed/${params.videId}?enablejsapi=1&origin=http://example.com`}
            ></iframe>
          </div>

          <div className="flex md:none justify-center  w-full">
            <iframe
              id="player"
              width="320px"
              height="200px"
              src={`http://www.youtube.com/embed/${params.videId}?enablejsapi=1&origin=http://example.com`}
            ></iframe>
          </div>
          <Star
            className={cn(
              clicked
                ? "bg-yellow-300 text-white"
                : "text-yellow-300 bg-gray-200" 
            , "cursor-pointer rounded-md "
            )}
            onClick={()=>setRender(!render)}
          />
          <div
            className={cn(
              "md:w-[600px] w-[320px] flex flex-wrap bg-gray-300 dark:bg-gray-500 px-3 py-3 rounded-xl overflow-hidden"
            )}
          >
            {data.items[0].snippet.description}
          </div>
        </>
      ) : null}
      <Toaster/>
    </div>
  );
}

export default page;
