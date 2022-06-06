import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/Feather';
import TaskHeader from '../components/TaskComponents/TaskHeader';
import MySafeArea from '../components/MySafeArea';

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
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 120}}>
        <View>
          <TaskHeader navigation={navigation} />
        </View>
      </ScrollView>
    </MySafeArea>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});
