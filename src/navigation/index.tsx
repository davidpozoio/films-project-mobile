import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from 'react-query';

import TabNavigator from './tab-navigator';
import Characters from '../screens/characters';
import Modal from '../screens/modal';
import Scenes from '../screens/scenes';
import Start from '~/screens/start';
import { StyleSheet } from 'react-native';

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

const Stack = createStackNavigator<RootStackParamList>();
const client = new QueryClient();

export default function RootStack() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={client}>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={Start}
            options={{
              headerShown: true,
              cardStyle: themeStyles.container,
              headerStyle: themeStyles.container,
            }}
          />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false,
              cardStyle: themeStyles.container,
              headerStyle: themeStyles.container,
            }}
          />
          <Stack.Screen
            name="Modal"
            component={Modal}
            options={{
              presentation: 'modal',
              headerLeft: () => null,
              cardStyle: themeStyles.container,
              headerStyle: themeStyles.container,
            }}
          />
          <Stack.Screen
            name="Scenes"
            component={Scenes}
            options={{
              presentation: 'modal',
              headerLeft: () => null,
              cardStyle: themeStyles.container,
              headerStyle: themeStyles.container,
            }}
          />
          <Stack.Screen
            name="Characters"
            component={Characters}
            options={{
              presentation: 'modal',
              headerLeft: () => null,
              cardStyle: themeStyles.container,
              headerStyle: themeStyles.container,
            }}
          />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
