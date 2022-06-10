import React from 'react';
import {StyleSheet} from 'react-native';
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
        tabBarActiveTintColor: colors.white,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: colors.dark,
          left: 20,
          right: 20,
          paddingTop: 16,
          bottom: 15,
          elevation: 0,
          borderRadius: 18,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Tasks"
        component={TasksNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon
              name="reader"
              size={size}
              color={color}
              style={{textAlignVertical: 'center'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={TasksNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon
              name="ios-chatbox"
              size={size}
              color={color}
              style={{textAlignVertical: 'center'}}
            />
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
            <Icon
              name="calendar-sharp"
              size={size}
              color={color}
              style={{textAlignVertical: 'center'}}
            />
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
            <Icon
              name="reorder-four"
              size={size}
              color={color}
              style={{textAlignVertical: 'center'}}
            />
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
