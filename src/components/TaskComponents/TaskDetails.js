import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../Text';
import colors from '../../config/colors';
import importedStyles from '../../styles';

const TaskDetails = ({task}) => {
  return (
    <View>
      <View style={styles.project}>
        <AppText style={styles.projectText}>{task?.project?.name}</AppText>
      </View>
      <View style={styles.container}>
        <AppText style={styles.name}>{task?.name}</AppText>
      </View>
      <View style={importedStyles.my1}>
        <AppText style={importedStyles.paragraph}>{task?.description}</AppText>
      </View>
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  project: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: colors.primaryTint,
    borderRadius: 50,
    width: 'auto',
  },
  projectText: {
    fontWeight: '800',
    fontSize: 14,
    color: colors.primary,
  },
  name: {
    fontSize: 30,
    fontWeight: '400',
  },
});
