import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LineGraph from '../../component/graph';

const data = [
  {date: 11, excercise_hours: 2},
  {date: 12, excercise_hours: 2.5},
  {date: 13, excercise_hours: 3},
  {date: 14, excercise_hours: 2.5},
  {date: 15, excercise_hours: 3},
  {date: 16, excercise_hours: 4},
  {date: 17, excercise_hours: 5},
];

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screens</Text>
        <LineGraph data={data} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
