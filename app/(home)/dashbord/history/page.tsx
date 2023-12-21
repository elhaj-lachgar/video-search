import GetList from '@/utils/get-list';
import React from 'react'
import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import ContainerVideo from '@/components/video/Container';
async function page() {
    const {userId} = auth()
   let data ;
    try{
        if (!userId) throw new Error("userId is required");
        data = await GetList(userId)
    }
    catch(err){
        console.log(err)
    }

    console.log(data)


  return (
    <div className='flex justify-center w-full mt-10 gap-x-5 gap-y-5 flex-wrap lg:w-3/4  mx-auto py-10'>
      {
        data?.videos != null 
        ?
         data.videos.map((video)=>(
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

