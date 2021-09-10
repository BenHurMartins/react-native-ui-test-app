//./src/navigation/RootStackParamList.ts

import {RouteProp} from '@react-navigation/native';
import {Recipe} from '../models/Recipe';

export type RootStackParamList = {
  Home: undefined;
  NewRecipe: undefined;
  Detail: Recipe;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
