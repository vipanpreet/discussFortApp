import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import s from '../../styles';
import colors from '../../config/colors';
import AppTextInput from '../TextInput';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatSearch = ({navigation}) => {
  Icon.loadFont();
  return (
    <View style={s.justifyBetween}>
      <View style={[s.relative, {flex: 1}]}>
        <View style={styles.searchIcon}>
          <Icon color={colors.gray} size={20} name="search" />
        </View>
        <AppTextInput
          placeholder="Search for chat"
          style={s.ml2}
          autoCapitalize="none"
          autoCorrect={false}
          name="search"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('InviteListModal')}
        style={[s.justifyCenter, styles.createIcon]}>
        <Icon color={colors.gray} size={24} name="ios-create-outline" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatSearch;

const styles = StyleSheet.create({
  searchIcon: {
    position: 'absolute',
    zIndex: 2,
    left: 10,
    top: '30%',
  },
  createIcon: {
    backgroundColor: colors.light,
    paddingVertical: 10,
    paddingHorizontal: 12,

    marginLeft: 10,
    borderRadius: 6,
  },
});
