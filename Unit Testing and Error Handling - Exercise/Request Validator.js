function RequestValidator(req) {
    const validMethod = ["GET", "POST", "DELETE", "CONNECT"];
    const uriPattern = /^[\w.]+$/g;
    const validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const specialChar = ["<", ">","\\", "&", "'", '"']; 


    if (!validMethod.includes(req.method)){
        throw new Error("Invalid request header: Invalid Method")
    }
    if (!req.uri || !(req.uri === "*" || req.uri.match(uriPattern))){
        throw new Error("Invalid request header: Invalid URI")
    }
    if (!validVersion.includes(req.version)){
        throw new Error("Invalid request header: Invalid Version")
    }
    if (!req.hasOwnProperty("message")){
        throw new Error("Invalid request header: Invalid Message")
    }

    for(let ch of req.message){
        if(specialChar.includes(ch)){
            throw new Error("Invalid request header: Invalid Message")
        }
    }
    return req;
}

RequestValidator({
  method: "GET",

  uri: "svn.public.catalog",

  version: "HTTP/1.1",

  message: "",
});
