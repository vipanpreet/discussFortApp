import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import ProfileNavigator from './ProfileNavigator';
import TasksNavigator from './TasksNavigator';
import colors from '../config/colors';

const AppNavigator = () => {
  Icon.loadFont();

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primaryDark,
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
          width: '100%',
          backgroundColor: '#ffffff',
          height: 80,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Tasks"
        component={TasksNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="albums" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={TasksNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="chatbubble" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Calender"
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Calender',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="options" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  shadow: {
    borderTopColor: '#fff',
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
