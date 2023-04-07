import { requestFactory } from "./requester.js"

const baseUrl = "http://localhost:3030/data/likes"
const request = requestFactory();

export const getLikes = async (recipeId) => {

    const query = encodeURIComponent(`recipeId="${recipeId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);

    return result;
}

export const like = async (recipeId) => {
    return request.post(baseUrl, { recipeId });
}


