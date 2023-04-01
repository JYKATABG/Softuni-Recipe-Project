import { createContext, useState, useEffect, useContext } from "react";
import { recipeServiceFactory } from '../services/recipeService.js';
import { useNavigate } from "react-router-dom";


export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {

    const [recipes, setRecipes] = useState([]);
    const authRecipeService = recipeServiceFactory();
    const navigate = useNavigate();

    useEffect(() => {
        authRecipeService.getAll()
            .then(data => {
                setRecipes(data);
            })
    }, [])

    const createNewRecipe = async (data) => {

        try {
            const newRecipe = await authRecipeService.create(data);

            setRecipes(state => ([...state, newRecipe]))

            navigate('/catalog');
        } catch (error) {
            console.log(error);
        }
    }


    const onRecipeEditSubmit = async (values, recipeId) => {
        try {
            const result = await authRecipeService.edit(recipeId, values)

            //Change state
            setRecipes(state => state.map(x => x._id === values._id ? result : x));

            navigate(`/catalog/${recipeId}`)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteRecipe = (recipeId) => {
        setRecipes(state => state.filter(x => x._id !== recipeId));
    }

    const contextValues = {
        recipes,
        deleteRecipe,
        createNewRecipe,
        onRecipeEditSubmit
    }

    return (
        <RecipeContext.Provider value={contextValues}>
            {children}
        </RecipeContext.Provider>
    )
}

export const useRecipeContext = () => {
    const context = useContext(RecipeContext);

    return context;
}