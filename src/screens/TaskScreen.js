import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import TaskHeader from '../components/TaskComponents/TaskHeader';
import MySafeArea from '../components/MySafeArea';
import TaskDetails from '../components/TaskComponents/TaskDetails';
import TaskFiles from '../components/TaskComponents/TaskFiles';
import TaskItems from '../components/TaskComponents/TaskItems';
import AppText from '../components/Text';
import AppButton from '../components/Button';
import colors from '../config/colors';
import importedStyles from '../styles';

const task = {
  _id: 2,
  name: 'Chat App UI To Commute with merchants',
  isCompleted: false,
  status: 'COMPLETED',
  priority: 'MEDIUM',
  itemsCompleted: 2,
  startDate: new Date(),
  endingDate: new Date(),
  assignedTo: [
    {
      _id: 22,
      firstName: 'Vipanpreet',
      lastName: 'Singh',
    },
    {
      _id: 22,
      firstName: 'Prince',
      lastName: 'Mehmi',
    },
    {
      _id: 23,
      firstName: 'Narinder',
      lastName: 'Kumar',
    },
  ],
  project: {
    _id: 24,
    name: 'Dashboard',
  },

  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  items: [
    {
      _id: 1,
      name: 'To Start Planning',
      isCompleted: true,
    },
    {
      _id: 2,
      name: 'Implement UI',
      isCompleted: false,
    },
    {
      _id: 3,
      name: 'Deployment',
      isCompleted: false,
    },
  ],
};
const TaskScreen = ({route, navigation}) => {
  Icon.loadFont();
  const {id} = route.params;
  const dispatch = useDispatch();

  // const trackingState = useSelector(state => state.trackingState);
  // const {singleTracking, loading} = trackingState;

  // useEffect(() => {
  //   id && dispatch(getSingleTrackingAction(id));
  // }, [id]);

  return (
    <MySafeArea>
      <ScrollView contentContainerStyle={{paddingBottom: 120}}>
        <View style={styles.container}>
          <TaskHeader navigation={navigation} />
          <TaskDetails task={task} />
          <TaskFiles />
        </View>
        <View style={styles.itemsContainer}>
          <View style={importedStyles.justifyBetween}>
            <View>
              <AppText style={styles.heading}>Todos</AppText>
            </View>
            <View>
              <AppButton title="+ Add Task" />
            </View>
          </View>
          <TaskItems task={task} />
        </View>
      </ScrollView>
    </MySafeArea>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  heading: {
    fontSize: 20,
    color: colors.black,
    marginBottom: 10,
  },
  itemsContainer: {
    backgroundColor: '#fafafa',
    paddingHorizontal: 20,
    marginTop: 20,
    paddingVertical: 20,
    borderTopColor: '#f5f5f5',
    borderTopWidth: 2,
  },
});
