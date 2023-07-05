import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import DetailsScreen from './DetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Provider store={store}>
       <NavigationContainer>
              <stack.Navigator initialRouteName="Home">
                <stack.Screen name="Home" component={App} options={{headerShown: false}} />
                <stack.Screen name="Details" component={DetailsScreen} />
              </stack.Navigator>
            </NavigationContainer>
  </Provider>
);

AppRegistry.registerComponent(appName, () => StackNavigation);


