import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppText from '../Text';
import dayjs from 'dayjs';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const TaskCard = ({task, navigation}) => {
  Icon.loadFont();

  console.log(task);
  const onPress = () => {
    // navigation.navigate('TrackingEdit', {id: tracking?.trackingNumber});
  };
  return (
    <View style={styles.container}>
      <AppText style={styles.name}>{task?.name}</AppText>
      <View style={styles.mt1}>
        <AppText>Team Members</AppText>
        <View style={styles.justifyBetween}>
          <View style={[styles.mt2, styles.users]}>
            {task?.assignedTo?.map(user => (
              <View style={styles.user}>
                <AppText style={styles.userLetter}>
                  {user.firstName.slice(0, 1) + user.lastName.slice(0, 1)}
                </AppText>
              </View>
            ))}
          </View>
          <View style={styles.mt2}>
            <AnimatedCircularProgress
              size={50}
              width={3}
              fill={task.completedPercentage}
              tintColor={colors.green}
              backgroundColor={colors.light}>
              {fill => <Text>{task.completedPercentage}%</Text>}
            </AnimatedCircularProgress>
          </View>
        </View>
      </View>
      {/* <View style={[styles.mt1, {flexDirection: 'row', alignItems: 'center'}]}>
        <Icon color={colors.danger} name="clockcircleo" />
        <AppText
          style={[
            styles.status,
            {
              color:
                task.status === 'COMPLETED'
                  ? colors.green
                  : task.status === 'IN PROGRESS'
                  ? colors.primary
                  : colors.orange,
            },
          ]}>
          {task.status}
        </AppText>
      </View> */}
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    flex: 1,
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 12,
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 2,
    marginBottom: 10,
  },
  justifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: '800',
  },
  mt1: {
    marginTop: 10,
  },
  mt2: {
    marginTop: 10,
  },
  users: {
    flexDirection: 'row',
  },
  user: {
    width: 28,
    height: 28,
    backgroundColor: colors.primary,
    borderRadius: 250,
    textAlign: 'center',
    paddingHorizontal: 7,
    paddingVertical: 8,
    marginRight: 6,
  },
  userLetter: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '800',
  },
  status: {
    fontWeight: '800',
    marginLeft: 12,
  },
  percentage: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 20,
  },
});
