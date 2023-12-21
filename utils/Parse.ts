
 
export  async function getObjectFromRequestBodyStream(target :ReadableStream | null) {
    if (!target)
      return null ;

    
    const input = await target.getReader().read();
    const decoder = new TextDecoder();
    const string = await decoder.decode(input.value) ;
    try{
      return JSON.parse(string)
    }
    catch(err){
      return null ;
    }
  }