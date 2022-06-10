import {StyleSheet, View} from 'react-native';
import React from 'react';
import s from '../../styles';
import BackButton from '../Reusables/BackButton';
import AppText from '../Text';

const CreateTaskHeader = ({navigation}) => {
  return (
    <View style={[s.justifyBetween, styles.container]}>
      <View>
        <AppText style={styles.title}>Create A Task</AppText>
      </View>
      <View>
        <BackButton
          bgColor="dark"
          color="white"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default CreateTaskHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '900',
  },
  container: {
    paddingVertical: 30,
  },
});
