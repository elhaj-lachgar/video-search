import { getObjectFromRequestBodyStream } from "./Parse";



async function GetVideo (id:string) {
    
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.NEXT_PUBLIC_API_KEY}`

    const responce = await fetch(url);

    const result = await getObjectFromRequestBodyStream(responce.body);

    if (!result)
        return null;

    return result;
}

export default GetVideo;