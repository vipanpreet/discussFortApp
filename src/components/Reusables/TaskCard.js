import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppText from '../Text';
import dayjs from 'dayjs';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import AppButton from '../Button';

const TaskCard = ({task, navigation}) => {
  Icon.loadFont();

  console.log(task);
  const onPress = () => {
    // navigation.navigate('TrackingEdit', {id: tracking?.trackingNumber});
  };
  return (
    <View style={styles.container}>
      <View style={styles.project}>
        <AppText style={styles.projectText}>{task?.project?.name}</AppText>
      </View>

      <AppText style={styles.name}>{task?.name}</AppText>
      <AppText style={styles.description}>
        {task?.description.slice(0, 75) + '...'}
      </AppText>

      <View style={styles.mt1}>
        <View style={[styles.relative, styles.justifyBetween]}>
          <View style={styles.row}>
            <Icon size={18} name="time-outline" />
            <AppText style={styles.ml1}>
              {task?.itemsCompleted}/{task?.items?.length}
            </AppText>
          </View>
          <View style={[styles.row, styles.usersAbs]}>
            <View style={styles.users}>
              {task?.assignedTo?.map(user => (
                <View style={styles.user}>
                  <AppText style={styles.userLetter}>
                    {user.firstName.slice(0, 1) + user.lastName.slice(0, 1)}
                  </AppText>
                </View>
              ))}
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('InviteListModal')}
              style={styles.invite}>
              <AppText style={styles.inviteText}>Invite</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    borderColor: '#f2f2f2',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 25,
    flex: 1,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 12,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 12,
    marginBottom: 10,
  },
  justifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  relative: {
    position: 'relative',
    height: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: '800',
  },
  description: {
    fontSize: 14,
    color: colors.gray,
    marginVertical: 10,
  },
  project: {
    position: 'absolute',
    top: 20,
    left: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: colors.terinaryTint,
    borderRadius: 50,
    width: 'auto',
  },
  projectText: {
    fontWeight: '800',
    fontSize: 12,
    color: colors.terinary,
  },
  mt1: {
    marginTop: 10,
  },
  ml1: {
    marginLeft: 10,
  },
  mt2: {
    marginTop: 10,
  },
  users: {
    flexDirection: 'row',
  },
  usersAbs: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
  user: {
    width: 30,
    height: 30,
    backgroundColor: '#777',
    borderRadius: 250,
    textAlign: 'center',
    paddingHorizontal: 7,
    paddingVertical: 8,
    marginRight: -6,
  },
  invite: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginLeft: 10,
  },
  inviteText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '800',
  },
  userLetter: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '800',
  },
});
