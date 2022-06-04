import React, {useEffect} from 'react';
import {FlatList, TouchableHighlight, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTrackingsAction} from '../../redux/tracking/trackingActions';
import TaskCard from '../Reusables/TaskCard';
import Loader from '../Layout/Loader/Loader';
import ProjectCard from '../Reusables/ProjectCard';

const RenderProjects = ({navigation}) => {
  const dispatch = useDispatch();

  const projects = [
    {
      _id: 1,
      name: 'Website',
      isCompleted: false,
      tasks: 10,
    },
    {
      _id: 2,
      name: 'Dashboard UI',
      isCompleted: false,
      tasks: 12,
    },
    {
      _id: 3,
      name: 'Sale',
      isCompleted: false,
      tasks: 4,
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
      <ProjectCard project={item} navigation={navigation} />
    </TouchableHighlight>
  );
  return (
    <View>
      <FlatList
        data={projects}
        renderItem={renderItem}
        keyExtractor={project => project._id}
        onRefresh={onRefresh}
        refreshing={false}
        horizontal
      />
    </View>
  );
};

export default RenderProjects;
