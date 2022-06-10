import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../config/colors';
import AppText from '../Text';
import BackButton from '../Reusables/BackButton';

const task = {
  _id: 1,
  name: 'Create Awesome UI for dashboard',
  isCompleted: false,
  status: 'IN PROGRESS',
  priority: 'HIGH',
  completedPercentage: '40',
  startDate: new Date(),
  endingDate: new Date(),
  assignedTo: [
    {
      _id: 11,
      firstName: 'Vipanpreet',
      lastName: 'Singh',
    },
    {
      _id: 12,
      firstName: 'Prince',
      lastName: 'Mehmi',
    },
  ],
  project: {
    _id: 13,
    name: 'Dashboard UI FIX',
  },

  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum....',
  items: [
    {
      name: 'To Start Planning',
      isCompleted: true,
    },
    {
      name: 'Implement UI',
      isCompleted: false,
    },
    {
      name: 'Deployment',
      isCompleted: false,
    },
  ],
};

const TaskHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.justifyBetween}>
        <BackButton
          bgColor="dark"
          color="white"
          onPress={() => navigation.navigate('Home')}
        />
        <View style={styles.row}>
          <View style={styles.users}>
            {task?.assignedTo?.map(user => (
              <View style={styles.user}>
                <AppText style={styles.userLetter}>
                  {user.firstName.slice(0, 1) + user.lastName.slice(0, 1)}
                </AppText>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.invite}>
            <AppText style={styles.inviteText}>Invite</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
  },
  justifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  user: {
    width: 40,
    height: 40,
    backgroundColor: '#777',
    borderRadius: 250,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginRight: -6,
  },
  invite: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: colors.secondary,
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
