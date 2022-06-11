import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen';
// import TrackingEditScreen from '../screens/TrackingEditScreen';
import CreateTaskScreen from '../screens/CreateTaskScreen';
import InviteListModal from '../modals/InviteListModal';

const Stack = createNativeStackNavigator();

const TasksNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Tasks'}} />

      <Stack.Screen
        name="Task"
        component={TaskScreen}
        options={{title: 'Task'}}
      />

      <Stack.Screen
        name="CreateTask"
        component={CreateTaskScreen}
        options={{title: 'Create'}}
      />

      <Stack.Screen
        // screenOptions={{presentation: 'modal'}}

        name="InviteListModal"
        component={InviteListModal}
        options={{title: 'Invite', presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default TasksNavigator;
