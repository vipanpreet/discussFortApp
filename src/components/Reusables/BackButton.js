import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';

const BackButton = ({onPress, color, bgColor}) => {
  Icon.loadFont();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: colors[bgColor || 'white']}]}>
      <View>
        <Icon
          size={22}
          name="arrow-left-thin"
          color={colors[color ?? 'dark']}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 13,
    backgroundColor: colors.white,
  },
});
