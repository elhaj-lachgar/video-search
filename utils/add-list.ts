import { getObjectFromRequestBodyStream } from "./Parse";
import { header } from "@/lib/utils";
import { UserListParams } from "@/lib/utils";


async function AddHandler ( userId: string  , video : string , imageUrl : string , title : string) {
    

    const url = "https://nitflex-backend.onrender.com/api/v1/user";


    const data = JSON.stringify({userId , video , imageUrl , title});

    const responce = await fetch ( url , { method : "POST" , body :data , headers: header});

    const result  : UserListParams | null = await getObjectFromRequestBodyStream(responce.body);

    if ( !result ){
        return null ;
    }
    return result.data;
}


export default AddHandler