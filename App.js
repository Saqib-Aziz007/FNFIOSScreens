import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Dimensions, SafeAreaView, Text, View} from 'react-native';
import LineGraph from './app/component/graph';
import TabNavigator from './app/navigation/TabNavigator';



const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
