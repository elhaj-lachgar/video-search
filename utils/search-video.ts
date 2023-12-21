import { getObjectFromRequestBodyStream } from "./Parse";
import { SearchResponce} from "@/lib/utils";


async function SearchHandler (keyword:string) {
    
    const url = ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${process.env.API_KEY}`;

    const responce = await fetch ( url ) ;
    
    const result : SearchResponce | null = await getObjectFromRequestBodyStream(responce.body);

    if (!result)
        return null ;

    return result;
}

export default SearchHandler ;