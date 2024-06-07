import axios from "axios";

export const commonAPI = async(httpmethod,url,reqBody,reqHeader)=>{
    const reqConfiq = {
        method:httpmethod,
        url,
        data:reqBody,
        header:reqHeader?reqHeader:{'Content-Type':'application/json'}
    }
    return await axios(reqConfiq).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}