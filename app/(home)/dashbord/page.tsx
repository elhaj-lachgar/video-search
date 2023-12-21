import ContainerVideo from '@/components/video/Container'
import React from 'react'
import data from "@/data/data.json"
import GetVideoHandler from '@/utils/get-videos';
import toast, { Toaster } from 'react-hot-toast';
import { VideoResponce } from '@/lib/utils';
import Link from 'next/link';

async function page() {

  // const target = data.items
  try{
    toast.loading('..loading')
    const data = await GetVideoHandler() ;
    if ( data != null ){
      toast.success("seccuss loading data ...")
    }
    else{
       toast.error("same thing gose wrong")
    }
  }
  catch(err : any ){
    // toast.error("same gose wrong")
  }


  return (
    <div className='flex justify-center w-full mt-10 gap-x-5 gap-y-5 flex-wrap lg:w-3/4  mx-auto py-10'>
      {
        data != null
        ?
         data.items.map((video)=>(
          <Link href={`/dashbord/${video.id}`}>
            <ContainerVideo image={video.snippet.thumbnails.high.url} title={video.snippet.title}  key={video.id}/>
          </Link>
         ))
         :
         "empty"
      }
    </div>
  )
}

export default page
