import { servelURL } from "./baseUrl";
import { commonAPI } from "./commonAPI";

//register API
export const registerAPI = async(reqBody)=>{
    return await commonAPI('POST',`${servelURL}/user/register`,reqBody,"")
}

//login API
export const loginAPI = async(reqBody)=>{
    return await commonAPI('POST',`${servelURL}/user/login`,reqBody,"")
}

// profile Update API
export const profileUpdateAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${servelURL}/profile-edit`,reqBody,reqHeader)
}