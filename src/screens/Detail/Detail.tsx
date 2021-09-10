// ./src/screens/Detail/Detail.tsx

import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  RootStackParamList,
  RootRouteProps,
} from '../../navigation/RootStackParamList';

type DetailScreenRouteProp = StackNavigationProp<RootStackParamList, 'Detail'>;

const Detail: FC = () => {
  const navigation = useNavigation<DetailScreenRouteProp>();
  const {recipe, recipeId, recipeName} =
    useRoute<RootRouteProps<'Detail'>>().params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Detail Screen</Text>
      <Text>{recipeId}</Text>
      <Text>{recipeName}</Text>
      <Text>{recipe}</Text>
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

export default Detail;
