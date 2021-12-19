import {VictoryLine, VictoryChart, VictoryTheme} from 'victory-native';

import React from 'react';
import {View} from 'react-native';

const LineGraph = ({data}) => {
  return (
    <View>
      {/* <VictoryChart theme={VictoryTheme.material}> */}
      <VictoryLine
        data={data}
        x={'date'}
        y={'excercise_hours'}
        animate
        // width={width / 1}
        style={{data: {stroke: 'green', strokeWidth: 3}}}
      />
      {/* </VictoryChart> */}
    </View>
  );
};

export default LineGraph;
