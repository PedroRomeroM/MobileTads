import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/components/Home/HomeScreen';
import Home2 from './src/components/Home2/Home2';
import CounterScreen from './src/components/counterScreen/counterScreen';
import ColorList from './src/components/ColorList/ColorList';
import ApiView from './src/components/ApiView/ApiView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen }/>
        <Stack.Screen name="Home2" component={ Home2 }/>
        <Stack.Screen name="Medias" component={ Main }/>
        <Stack.Screen name="Contador" component={ CounterScreen }/>
        <Stack.Screen name="Colors" component={ ColorList }/>
        <Stack.Screen name="Filmes" component={ ApiView }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

