import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import s from '../../styles';
import AppText from '../Text';
import colors from '../../config/colors';
const ChatCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[s.justifyBetween]}>
        <View style={s.justifyCenter}>
          <View style={styles.user}>
            <View>
              <AppText style={styles.userLetter}>
                {item?.firstName.slice(0, 1) + item?.lastName.slice(0, 1)}
              </AppText>
            </View>
          </View>
          <View style={s.ml1}>
            <AppText style={styles.name}>
              {item?.firstName + ' ' + item?.lastName}
            </AppText>
            <AppText style={styles.message}>{item?.lastMessage}</AppText>
          </View>
        </View>
        <View style={styles.date}>
          <AppText style={styles.dateText}>09:30 PM</AppText>
        </View>
        {item?.unseen && (
          <View style={styles.badge}>
            <View>
              <AppText style={styles.badgeText}>2</AppText>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 12,
    position: 'relative',
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
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  message: {
    fontSize: 13,
    color: colors.gray,
  },
  date: {
    position: 'absolute',
    top: 2,
    right: 4,
  },
  dateText: {
    fontSize: 12,
    color: '#777',
  },
  badge: {
    top: 12,
    right: 10,
    backgroundColor: colors.terinary,
    borderRadius: 20,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '800',
  },
});
