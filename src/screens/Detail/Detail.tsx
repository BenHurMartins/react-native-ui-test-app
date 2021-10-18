// ./src/screens/Detail/Detail.tsx

import React, {FC} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  RootStackParamList,
  RootRouteProps,
} from '../../navigation/RootStackParamList';

type DetailScreenRouteProp = StackNavigationProp<RootStackParamList, 'Detail'>;

const Detail: FC = () => {
  const navigation = useNavigation<DetailScreenRouteProp>();
  const {recipe, recipeName} = useRoute<RootRouteProps<'Detail'>>().params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{recipeName}</Text>
      <Text style={styles.recipe}>{recipe}</Text>
      <Button
        testID={'returnHome'}
        title={'Return'}
        onPress={navigation.goBack}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  recipe: {
    flex: 1,
    textAlign: 'auto',
    width: '90%',
  },
});

export default Detail;
