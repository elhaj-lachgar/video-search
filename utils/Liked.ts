import { getObjectFromRequestBodyStream } from "./Parse";
import { UserListParams, header } from "@/lib/utils";


async function LikedHandler ( userId : string , videoId:string) {

    const url = `https://nitflex-backend.onrender.com/api/v1/user/${videoId}`;
    
    const data = JSON.stringify({userId});

    const responce = await fetch(url , { method: "PUT" , headers : header  , body : data });

    const result : UserListParams | null   = await getObjectFromRequestBodyStream(responce.body);

    if (!result)
        return null ;

    return result
}

export default LikedHandler