import { getObjectFromRequestBodyStream } from "./Parse";
import { Favourite, UserListParams, header } from "@/lib/utils";


async function  favouriteList (userId : string ) {
    const url = `https://nitflex-backend.onrender.com/api/v1/user//favorite/${userId}`;
    const responce = await fetch(url , {headers : header});
    const result : Favourite | null = await getObjectFromRequestBodyStream(responce.body);
    if (!result)
        return null;
    return result.data; 
}


export default favouriteList;