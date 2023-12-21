import ContainerVideo from '@/components/video/Container';
import favouriteList from '@/utils/add-favourite';
import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

async function page() {
  let  data ; 
  const { userId} = auth()
  try{
    if (!userId)
      throw new Error("userId is required");
    data = await favouriteList(userId)
  }
  catch(err){
    console.log(err);
  }

  console.log(data)

  return (
    <div className='flex justify-center w-full mt-10 gap-x-5 gap-y-5 flex-wrap lg:w-3/4  mx-auto py-10'>
      {
        data!= null 
        ?
         data.map((video)=>(
            <Link href={`/dashbord/${video.videoId}`}>
            <ContainerVideo image={video.imageUrl} title={video.title} key={video._id}/>
            </Link>
         ))
         :
         "empty"
      }
    </div>
  )
}

export default page
