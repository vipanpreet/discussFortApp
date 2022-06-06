import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import colors from '../config/colors';

function AppButton({
  title,
  onPress,
  text = '#ffffff',
  color = 'primary',
  inline,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {width: inline ? styles.width : 'auto', backgroundColor: colors[color]},
      ]}
      onPress={onPress}>
      <Text style={[styles.text, {color: text}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },

  width: {width: '100%'},
  text: {
    color: colors.white,
    fontSize: 14,
    textTransform: 'capitalize',
    fontWeight: '600',
  },
});

export default AppButton;
