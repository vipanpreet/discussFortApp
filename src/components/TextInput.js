import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import defaultStyles from '../config/styles';

function AppTextInput({icon, width = '100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 6,
    backgroundColor: '#f2f2f2',
  },
});

export default AppTextInput;
