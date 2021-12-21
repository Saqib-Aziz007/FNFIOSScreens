import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Settings from '../../screens/Settings';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconicIcon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#F16889"
      inactiveColor="#1B5157"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color = 'red'}) => (
            <MaterialCommunityIcon name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color = 'red'}) => (
            <MaterialIconicIcon name="person" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({color = 'red'}) => (
            <MaterialIconicIcon name="settings" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
