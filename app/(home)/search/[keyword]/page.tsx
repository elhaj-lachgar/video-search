import ContainerVideo from '@/components/video/Container';
import SearchHandler from '@/utils/search-video'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Link from 'next/link';
import React from 'react'

async function page({ params } : { params : Params}) {

    let data ;

    try{
       data = await SearchHandler(params.keyword);        
    }
    catch(err){
      console.log(err);
    }
  return (
    <div className='flex justify-center w-full mt-10 gap-x-5 gap-y-5 flex-wrap lg:w-3/4  mx-auto py-10'>
      {
        data != null
        ?
         data.items.map((video)=>(
          <Link href={`/dashbord/${video.id.videoId}`}>
            <ContainerVideo image={video.snippet.thumbnails.high.url} title={video.snippet.title} />
          </Link>
         ))
         :
         "empty"
      }
    </div>
  )
}

export default page
