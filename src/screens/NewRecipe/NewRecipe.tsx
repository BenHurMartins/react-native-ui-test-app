// ./src/screens/NewRecipe/NewRecipe.tsx

import React, {FC, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootStackParamList';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
import {addRecipe} from '../../redux/Recipes/Recipes.reducer';
import {Recipe} from '../../models/Recipe';

type NewRecipeScreenRouteProp = StackNavigationProp<
  RootStackParamList,
  'NewRecipe'
>;

const NewRecipe: FC = () => {
  const recipes = useSelector((state: RootState) => state.recipes);
  const [recipe, setRecipe] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const dispatch = useDispatch();
  const onSubmit = () => {
    const payload: Recipe = {recipeId: recipes.length + 1, recipe, recipeName};
    dispatch(addRecipe(payload));
    setRecipeName('');
    setRecipe('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>id: {recipes.length + 1}</Text>
      <TextInput
        testID={'recipeName'}
        style={styles.recipeNameInput}
        value={recipeName}
        onChangeText={setRecipeName}
      />
      <TextInput
        testID={'recipe'}
        style={styles.recipeInput}
        multiline={true}
        value={recipe}
        onChangeText={setRecipe}
      />
      <Button testID={'submit'} title={'Add Recipe'} onPress={onSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeNameInput: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  recipeInput: {
    height: 300,
    width: '90%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});

export default NewRecipe;
