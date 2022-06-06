import React, {useEffect} from 'react';
import {FlatList, TouchableHighlight, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTrackingsAction} from '../../redux/tracking/trackingActions';
import TaskCard from '../Reusables/TaskCard';
import Loader from '../Layout/Loader/Loader';

const RenderTasks = ({navigation}) => {
  const dispatch = useDispatch();

  const tasks = [
    {
      _id: 1,
      name: 'Create Awesome UI for dashboard',
      isCompleted: false,
      status: 'IN PROGRESS',
      priority: 'HIGH',
      itemsCompleted: 0,
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
        name: 'Merchant Dashboard',
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
    },

    {
      _id: 2,
      name: 'Chat App UI Complete',
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
    },
  ];
  // useEffect(() => {
  //   dispatch(getTrackingsAction());
  // }, [dispatch]);

  const onRefresh = () => {
    // dispatch(getTrackingsAction());
    console.log('OnRefresh Pressed');
  };

  const onPress = id => {
    navigation.navigate('Tracking', {id});
  };
  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => onPress(item?._id)}>
      <TaskCard task={item} navigation={navigation} />
    </TouchableHighlight>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={task => task._id}
        onRefresh={onRefresh}
        refreshing={false}
      />
    </View>
  );
};

export default RenderTasks;
const styles = StyleSheet.create({
  container: {
    height: 480,
    paddingHorizontal: 12,
  },
});
