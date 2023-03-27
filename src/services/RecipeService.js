import { requestFactory } from "./requester.js"

let baseUrl = 'http://localhost:3030/data/recipes'


export const recipeServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {

        const result = await request.get(baseUrl);
        const recipes = Object.values(result);

        return recipes;
    }

    const create = async (data) => {
        const result = await request.post(baseUrl, data);

        return result;
    }
    const getOne = async (recipeId) => {
        const result = await request.get(`${baseUrl}/${recipeId}`);

        return result
    }

    const deleteRecipe = (recipeId) => request.delete(`${baseUrl}/${recipeId}`)

    const edit = (recipeId, values) => request.put(`${baseUrl}/${recipeId}`, values);

    return {
        delete: deleteRecipe,
        getAll,
        getOne,
        create,
        edit
    }

}