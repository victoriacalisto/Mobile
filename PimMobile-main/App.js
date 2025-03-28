import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import WelcomeScreen from './src/pages/welcome';
import LoginScreen from './src/pages/login';
import HomeScreen from './src/pages/home';
import EmployeeScreen from './src/pages/employee';
import RegisterEmployeeScreen from './src/pages/registerEmployee';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Employee" component={EmployeeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RegisterEmployee" component={RegisterEmployeeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
