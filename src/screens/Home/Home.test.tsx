// ./src/screens/Home/Home.test.tsx

import 'react-native';
import React from 'react';
import Home from './Home';
import {render, waitFor, fireEvent} from '../../../jest/helper';
import {configureStore} from '@reduxjs/toolkit';
import recipesReducer from '../../redux/Recipes/Recipes.reducer';
import {NavigationContainer} from '@react-navigation/native';
// setting up the test store, so in each test our redux store will be reseted
const testStore = () =>
  configureStore({
    reducer: recipesReducer,
    preloadedState: {
      recipes: [
        {recipe: 'Break one eggs', recipeId: 1, recipeName: 'recipe 1'},
        {recipe: 'Break two eggs', recipeId: 2, recipeName: 'recipe 2'},
      ],
    },
  });

const component = (
  <NavigationContainer>
    <Home />
  </NavigationContainer>
);

describe('Home', () => {
  it('should find both recipes in the list', () => {
    const {getByText} = render(component, {
      store: testStore(),
      renderOptions: {},
    });
    expect(getByText('recipe 1')).toBeTruthy();
    expect(getByText('recipe 2')).toBeTruthy();
  });
  it('should find two components in the FlatList', async () => {
    const {findAllByText} = render(component, {
      store: testStore(),
      renderOptions: {},
    });
    const items = await findAllByText(/recipe [0-9]/);
    await waitFor(() => expect(items.length).toEqual(2));
  });
  it('should scroll the list and still fund two components', async () => {
    //This test is to exemplify how to scroll the list, no functional purpose here
    const {findAllByText, getByTestId} = render(component, {
      store: testStore(),
      renderOptions: {},
    });

    const list = getByTestId('list');

    fireEvent.scroll(list, {
      nativeEvent: {
        contentSize: {height: 600, width: 400},
        contentOffset: {y: 200},
        layoutMeasurement: {height: 100, width: 100},
      },
    });
    const items = await findAllByText(/recipe [0-9]/);
    await waitFor(() => expect(items.length).toEqual(2));
  });
});
