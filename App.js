import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigator/>
    </NavigationContainer>
  );
}

