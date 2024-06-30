import { servelURL } from "./baseUrl";
import { commonAPI } from "./commonAPI";

//register API
export const registerAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${servelURL}/user/register`,reqBody,reqHeader)
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

// user DishUpadate API
export const userDishUpdateAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${servelURL}/user/update_dish/${id}`,reqBody,reqHeader)
}

// get all dishes API
export const getAllDishesAPI = async(searchKey)=>{
    return await commonAPI('GET',`${servelURL}/all_dishes?search=${searchKey}`,"","")
}


//user dish delete API
export const userDeleteDishAPI = async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${servelURL}/user/delete_dish/${id}`,{},reqHeader) // The reason your API call contains an empty object {} in the reqBody section for a DELETE request might be a misunderstanding of how DELETE requests typically work.
}

export const dishReviews = async(id)=>{
    return await commonAPI('GET',`${servelURL}/dish-review/${id}`,"","")
}

export const addReview = async(id,reqBody)=>{
    return await commonAPI('POST',`${servelURL}/add-dish-review/${id}`,reqBody,"")
}