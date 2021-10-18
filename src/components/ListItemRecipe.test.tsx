// ./src/components/ListItemRecipe.tst.tsx

import 'react-native';
import React from 'react';
import ListItemRecipe from './ListItemRecipe';
import {render, fireEvent} from '../../jest/helper';
import {Recipe} from '../models/Recipe';

const testRecipe: Recipe = {
  recipe: 'This is a recipe',
  recipeId: 1,
  recipeName: 'Test Recipe',
};

const onPressMock = jest.fn();

describe('ListItemRecipe', () => {
  it('should show the title', () => {
    const {getByText} = render(
      <ListItemRecipe onPress={onPressMock} item={testRecipe} />,
    );

    expect(getByText(testRecipe.recipeName).props.children).toEqual(
      testRecipe.recipeName,
    );
  });
  it('should count two clicks', () => {
    const {getByText} = render(
      <ListItemRecipe onPress={onPressMock} item={testRecipe} />,
    );

    const pressable = getByText(testRecipe.recipeName);
    fireEvent.press(pressable);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
