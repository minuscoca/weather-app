import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Login: undefined;
  RootTabNavigator: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  LearningCenter: undefined;
  PersonalCenter: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;
export type HomeScreenProps = BottomTabScreenProps<RootTabParamList, 'Home'>;
export type LearningCenterScreenProps = BottomTabScreenProps<
  RootTabParamList,
  'LearningCenter'
>;
export type PersonalCenterScreenProps = BottomTabScreenProps<
  RootTabParamList,
  'PersonalCenter'
>;
