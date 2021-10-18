import 'react-native';
import React from 'react';
import NewRecipe from './NewRecipe';
import {render, fireEvent} from '../../../jest/helper';
import {configureStore} from '@reduxjs/toolkit';
import recipesReducer from '../../redux/Recipes/Recipes.reducer';
import {NavigationContainer} from '@react-navigation/native';
// setting up the test store, so in each test our redux store will be reseted
const testStore = () =>
  configureStore({
    reducer: recipesReducer,
  });

const component = (
  <NavigationContainer>
    <NewRecipe />
  </NavigationContainer>
);

describe('NewRecipe', () => {
  it('should change the text in the recipe name input field', () => {
    const {getByTestId} = render(component, {
      store: testStore(),
      renderOptions: {},
    });
    const inputFieldRecipeName = getByTestId('recipeName');
    const recipeName = 'Recipe # 1';
    fireEvent.changeText(inputFieldRecipeName, recipeName);
    expect(inputFieldRecipeName.props.value).toEqual(recipeName);
  });
  it('should change the text in the recipe input field', () => {
    const {getByTestId} = render(component, {
      store: testStore(),
      renderOptions: {},
    });
    const inputFieldRecipe = getByTestId('recipe');
    const recipe = 'Recipe # 1 \n Break some Eggs';
    fireEvent.changeText(inputFieldRecipe, recipe);
    expect(inputFieldRecipe.props.value).toEqual(recipe);
  });
  it('should change the label id after including a new recipe', () => {
    const {getByTestId, getByText} = render(component, {
      store: testStore(),
      renderOptions: {},
    });
    fireEvent.changeText(getByTestId('recipe'), 'recipe');
    fireEvent.changeText(getByTestId('recipeName'), 'recipeName');
    fireEvent.press(getByTestId('submit'));

    expect(getByText('id: 2')).toBeTruthy();
  });
});
