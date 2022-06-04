import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppText from '../Text';
import dayjs from 'dayjs';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const ProjectCard = ({project, navigation}) => {
  Icon.loadFont();

  console.log(project);
  const onPress = () => {
    // navigation.navigate('TrackingEdit', {id: tracking?.trackingNumber});
  };
  return (
    <View style={styles.container}>
      <AppText style={styles.name}>{project?.name}</AppText>
      <AppText>{project?.tasks} Projects</AppText>
    </View>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 40,
    paddingVertical: 25,
    // flex: 1,
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
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '800',
  },
  mt1: {
    marginTop: 10,
  },
  mt2: {
    marginTop: 10,
  },
});
