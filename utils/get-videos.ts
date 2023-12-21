import { VideoResponce } from "@/lib/utils";
import { getObjectFromRequestBodyStream } from "./Parse";

async function GetVideoHandler( ) {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=MA&key=${process.env.API_KEY}`;

  const responce = await fetch (url);

  const result :VideoResponce | null = await getObjectFromRequestBodyStream(responce.body);

  console.log(result);
  
  if (!result){
    return null
  }

  return result ;
}

export default GetVideoHandler;