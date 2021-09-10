//./src/store/index.ts

import {configureStore} from '@reduxjs/toolkit';
import recipesReducer from '../redux/Recipes/Recipes.reducer';

const store = configureStore({
  reducer: recipesReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
