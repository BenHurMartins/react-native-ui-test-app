//  ./src/redux/Recipes/Recipes.reducer.ts

import {createSlice} from '@reduxjs/toolkit';
import {Recipe} from '../../models/Recipe';

export type RecipeState = {
  recipes: Recipe[];
};

const INITIAL_STATE: RecipeState = {
  recipes: [],
};

const recipeReducer = createSlice({
  name: 'recipe',
  initialState: INITIAL_STATE,
  reducers: {
    addRecipe: (state, action) => {
      state.recipes = [...state.recipes, action.payload];
    },
    removeRecipe: (state, action) => {
      state.recipes = state.recipes.filter(
        recipe => recipe.recipeId !== action.payload,
      );
    },
  },
});

export const {addRecipe, removeRecipe} = recipeReducer.actions;

export default recipeReducer.reducer;
