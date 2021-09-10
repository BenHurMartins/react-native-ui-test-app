// ./src/screens/NewRecipe/NewRecipe.tsx

import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootStackParamList';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

type NewRecipeScreenRouteProp = StackNavigationProp<
  RootStackParamList,
  'NewRecipe'
>;

const NewRecipe: FC = () => {
  const recipes = useSelector((state: RootState) => state.recipes);
  const navigation = useNavigation<NewRecipeScreenRouteProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>NewRecipe Screen</Text>
      <Text>id: {recipes.length + 1}</Text>
      <Text onPress={() => navigation.goBack()}>go back</Text>
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
});

export default NewRecipe;
