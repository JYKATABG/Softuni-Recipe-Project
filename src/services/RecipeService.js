import * as request from "./requester.js"

let baseUrl = 'http://localhost:3030/jsonstore/recipes'

export const getAll = async () => {

    const result = await request.get(baseUrl);
    const recipes = Object.values(result);

    return recipes;
}

export const create = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
}

export const getOne = async (recipeId) => {
    const result = await request.get(`${baseUrl}/${recipeId}`);

    return result
}