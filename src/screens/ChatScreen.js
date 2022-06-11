import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import ChatSearch from '../components/ChatComponents/ChatSearch';
import RenderChatList from '../components/ChatComponents/RenderChatList';
import s from '../styles';
const ChatScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ChatSearch navigation={navigation} />
        <View style={s.mt1}>
          <ScrollView contentContainerStyle={{paddingBottom: 120}}>
            <RenderChatList />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 12,
    height: '100%',
    backgroundColor: '#fbfbfa',
  },
  container: {
    // backgroundColor: '#fbfbfa',
    paddingHorizontal: 20,
  },
});
