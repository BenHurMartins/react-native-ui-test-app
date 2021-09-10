// ./src/navigation/AppNavigation
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/Home';
import Detail from '../screens/Detail/Detail';
import NewRecipe from '../screens/NewRecipe/NewRecipe';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="NewRecipe" component={NewRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
