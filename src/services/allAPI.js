import { servelURL } from "./baseUrl";
import { commonAPI } from "./commonAPI";

//register API
export const registerAPI = async(reqBody)=>{
    return await commonAPI('POST',`${servelURL}/user/register`,reqBody,"")
}