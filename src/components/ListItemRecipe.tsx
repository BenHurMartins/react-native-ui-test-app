// ./src/components/ListItemRecipe.tsx

import React, {FC} from 'react';
import {Text, Pressable, StyleSheet, Dimensions} from 'react-native';
import {Recipe} from '../models/Recipe';

export type TextProps = {
  testID?: string;
  item: Recipe;
  onPress: (item: Recipe) => void;
};

const ListItemRecipe: FC<TextProps> = ({testID, item, onPress}) => {
  return (
    <Pressable
      onPress={() => onPress(item)}
      style={({pressed}) => [styles.button, {opacity: pressed ? 0.1 : 1}]}>
      <Text style={styles.title} testID={testID ?? ''}>
        {item.recipeName}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
  },
  button: {
    width: Dimensions.get('screen').width,
    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
});

export default ListItemRecipe;
