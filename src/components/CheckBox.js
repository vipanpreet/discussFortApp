import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {View} from 'react-native';
import colors from '../config/colors';

function MyCheckbox({circle, ...rest}) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.dark,
        height: 22,
        width: 22,
        borderRadius: circle ? 20 : 6,
        backgroundColor: colors.dark,
      }}>
      <CheckBox
        {...rest}
        tintColors={{
          colorValue: '#fff',
        }}
        onCheckColor="#fff"
        hideBox
        style={{height: 20, width: 20}}
      />
    </View>
  );
}

export default MyCheckbox;
