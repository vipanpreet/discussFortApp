import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/HomeScreen';
import TrackingScreen from '../screens/TrackingScreen';
import TrackingEditScreen from '../screens/TrackingEditScreen';

const Stack = createNativeStackNavigator();

const TasksNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Tasks'}} />
      <Stack.Screen
        name="Tracking"
        component={TrackingScreen}
        options={{title: 'Tracking'}}
      />
      <Stack.Screen
        name="TrackingEdit"
        component={TrackingEditScreen}
        options={{title: 'Edit'}}
      />
    </Stack.Navigator>
  );
};

export default TasksNavigator;
