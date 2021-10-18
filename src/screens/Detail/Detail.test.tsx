// ./src/screens/Detail/Detail.test.tsx

import 'react-native';
import React from 'react';
import Detail from './Detail';
import {render} from '../../../jest/helper';
import {configureStore} from '@reduxjs/toolkit';
import recipesReducer from '../../redux/Recipes/Recipes.reducer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// setting up the test store, so in each test our redux store will be reseted
const testStore = () =>
  configureStore({
    reducer: recipesReducer,
  });

const Stack = createStackNavigator();

const initialParams = {
  recipeName: 'New Recipe',
  recipe: 'Break some eggs',
  recipeId: 1,
};

const component = (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Detail"
        component={Detail}
        initialParams={initialParams}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

describe('Detail', () => {
  it('should find the recipe name and the recipe', () => {
    const {getByText} = render(component, {
      store: testStore(),
      renderOptions: {},
    });

    expect(getByText('New Recipe')).toBeTruthy();
    expect(getByText('Break some eggs')).toBeTruthy();
  });
});
