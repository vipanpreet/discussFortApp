import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import colors from '../config/colors';

const MySafeArea = ({children}) => {
  return <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>;
};

export default MySafeArea;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    height: '100%',
    backgroundColor: colors.white,
  },
});
