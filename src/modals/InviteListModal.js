import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import AppText from '../components/Text';
import s from '../styles';

const items = [
  {
    _id: 111,
    firstName: 'Vipanpreet',
    lastName: 'Singh',
    team: 'Developer',
  },
  {
    _id: 112,
    firstName: 'Prince',
    lastName: 'Mehmi',
    team: 'Developer',
  },
  {
    _id: 113,
    firstName: 'Abhi',
    lastName: 'Abrol',
    team: 'Management',
  },
  {
    _id: 114,
    firstName: 'Satwant',
    lastName: 'Baliaan',
    team: 'Production',
  },
];
const ContactItem = ({item, navigation}) => {
  return (
    <View style={styles.item}>
      <View style={s.justifyBetween}>
        <View style={s.justifyCenter}>
          <View style={styles.user}>
            <View>
              <AppText style={styles.userLetter}>
                {item.firstName.slice(0, 1) + item.lastName.slice(0, 1)}
              </AppText>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <AppText style={styles.name}>
              {item.firstName + ' ' + item.lastName}
            </AppText>
            <AppText style={styles.team}>{item.team}</AppText>
          </View>
        </View>
        <TouchableOpacity style={styles.plus}>
          <View>
            <AppText style={styles.plusIcon}>+</AppText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const InviteListModal = ({navigation}) => {
  const onPress = id => {
    console.log('ON PRESS');
  };
  const onRefresh = () => {
    console.log('ON REFRESH');
  };
  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => onPress(item?._id)}>
      <ContactItem item={item} navigation={navigation} />
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Participants</AppText>
      <View style={s.mt2}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          onRefresh={onRefresh}
          refreshing={false}
        />
      </View>
    </View>
  );
};

export default InviteListModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: colors.darker,
  },
  title: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '900',
  },
  item: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },

  user: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userLetter: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '800',
  },
  nameContainer: {
    marginLeft: 10,
  },
  name: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '800',
  },
  team: {
    color: colors.white,
  },
  plus: {
    width: 40,
    height: 40,
    borderRadius: 250,
    borderColor: colors.gray,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '800',
  },
});
