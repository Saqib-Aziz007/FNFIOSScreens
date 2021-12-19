import React from 'react';
import {Dimensions, SafeAreaView, Text, View} from 'react-native';
import LineGraph from './app/component/graph';

const {width, height} = Dimensions.get('screen');
const data = [
  {date: 11, excercise_hours: 2},
  {date: 12, excercise_hours: 2.5},
  {date: 13, excercise_hours: 3},
  {date: 14, excercise_hours: 2.5},
  {date: 15, excercise_hours: 3},
  {date: 16, excercise_hours: 4},
  {date: 17, excercise_hours: 5},
];

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text> ==Line Graph</Text>
      </View>
      <LineGraph data={data} />
    </SafeAreaView>
  );
};

export default App;
