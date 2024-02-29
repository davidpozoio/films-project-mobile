import { StyleSheet } from 'react-native';

export const environment = {
  HOST_BACKEND: 'http://192.168.18.40:8082',
};

export type RootStackParamList = {
  TabNavigator: undefined;
  Modal: undefined;
  Scenes: undefined;
  Characters: undefined;
  Start: undefined;
};

export const themeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#350A24',
  },
  text: {
    color: '#FFFFFF6E',
  },
  button: {
    backgroundColor: '#570838',
    color: '#FFFFFF6E',
  },
  option: {},
});
