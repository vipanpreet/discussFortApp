import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ChatScreen from '../screens/ChatScreen';
import InviteListModal from '../modals/InviteListModal';

const Stack = createNativeStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{title: 'Chat'}}
      />

      <Stack.Screen
        name="InviteListModal"
        component={InviteListModal}
        options={{title: 'Invite', presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
