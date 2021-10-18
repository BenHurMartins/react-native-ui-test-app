// ./src/screens/Home/Home.tsx

import React, {FC} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootStackParamList';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Recipe} from '../../models/Recipe';
import ListItemRecipe from '../../components/ListItemRecipe';

type HomeScreenRouteProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: FC = () => {
  const navigation = useNavigation<HomeScreenRouteProp>();
  const recipes = useSelector((state: RootState) => state.recipes);
  const navigateToNewRecipe = () => navigation.navigate('NewRecipe');
  const navigateToDetail = (selectedRecipe: Recipe) =>
    navigation.navigate('Detail', selectedRecipe);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          testID={'list'}
          data={recipes}
          renderItem={({item}) => (
            <ListItemRecipe
              onPress={() => navigateToDetail(item)}
              item={item}
            />
          )}
        />
      </View>
      <Button
        testID={'newRecipe'}
        title={'Add Recipe'}
        onPress={navigateToNewRecipe}
      />
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
  listContainer: {
    flex: 1,
  },
});

export default Home;
