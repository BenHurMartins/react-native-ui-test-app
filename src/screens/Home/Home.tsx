// ./src/screens/Home/Home.tsx

import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootStackParamList';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Recipe} from '../../models/Recipe';

type HomeScreenRouteProp = StackNavigationProp<RootStackParamList, 'Home'>;

//Temporary to test our navigation
const testRecipe: Recipe = {
  recipe: 'Recipe test',
  recipeId: 1,
  recipeName: 'Test name',
};

const Home: FC = () => {
  const navigation = useNavigation<HomeScreenRouteProp>();
  const recipes = useSelector((state: RootState) => state.recipes);
  const navigateToNewRecipe = () => navigation.navigate('NewRecipe');
  const navigateToDetail = (selectedRecipe: Recipe) =>
    navigation.navigate('Detail', selectedRecipe);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Text onPress={() => navigateToNewRecipe()}>Navigate to New Recipe</Text>
      <Text onPress={() => navigateToDetail(testRecipe)}>
        Navigate to Detail
      </Text>
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

export default Home;
