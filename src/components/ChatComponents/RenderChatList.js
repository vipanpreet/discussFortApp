import {StyleSheet, TouchableHighlight, FlatList, View} from 'react-native';
import React from 'react';
import ChatCard from './ChatCard';

let chats = [
  {
    _id: 111,
    firstName: 'Prince',
    lastName: 'Mehmi',
    lastMessage: 'Hi How are you?',
  },
  {
    _id: 112,
    firstName: 'Ada',
    lastName: 'Wong',
    lastMessage: 'I am trying to eat something',
    unseen: 3,
  },
  {
    _id: 113,
    firstName: 'Leon',
    lastName: 'Kennedy',
    lastMessage: 'Give me some zombies',
  },
  {
    _id: 114,
    firstName: 'Ashley',
    lastName: 'Graham',
    lastMessage: 'Please Save me, they are after me.',
  },
];

const RenderChatList = ({navigation}) => {
  const onRefresh = () => {
    // dispatch(getTrackingsAction());
    console.log('OnRefresh Pressed');
  };

  const onPress = id => {
    // navigation.navigate('Task', {id});
    console.log('OnPress Pressed');
  };
  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => onPress(item?._id)}>
      <ChatCard item={item} navigation={navigation} />
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onRefresh={onRefresh}
        refreshing={false}
      />
    </View>
  );
};

export default RenderChatList;

const styles = StyleSheet.create({});
