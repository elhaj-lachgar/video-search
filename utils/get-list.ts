import { getObjectFromRequestBodyStream } from "./Parse";
import { List, header } from "@/lib/utils";
import { UserListParams } from "@/lib/utils"
import GetVideo from "./get-video";

async function UserList ( userId:string ) {
    const url = `https://nitflex-backend.onrender.com/api/v1/user/list/${userId}`;
    const responce = await fetch(url , {headers:header});
    const result : UserListParams | null  = await getObjectFromRequestBodyStream(responce.body);
    if ( !result)
        return null;

    return result.data;
}




export default UserList