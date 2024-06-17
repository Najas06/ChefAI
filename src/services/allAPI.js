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

// add Dish API
export const addDishAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${servelURL}/add-dish`,reqBody,reqHeader)
}

// user Dish API
export const userDishAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${servelURL}/user/all_Dishes`,"",reqHeader)
}