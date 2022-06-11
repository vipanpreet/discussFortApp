import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import AppText from '../Text';
import DatePicker from 'react-native-date-picker';
import colors from '../../config/colors';
import s from '../../styles';
import Icon from 'react-native-vector-icons/Feather';

const DateButton = ({date, setDate}) => {
  Icon.loadFont();

  const [open, setOpen] = useState(false);
  return (
    <>
      <TouchableHighlight
        style={styles.customButton}
        onPress={() => setOpen(true)}>
        <View style={s.row}>
          <View style={styles.icon}>
            <Icon color={colors.white} name="calendar" size={24} />
          </View>
          <View style={s.ml1}>
            <AppText>Start Date</AppText>
            <AppText style={styles.customButtonDate}>
              {date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear()}
            </AppText>
          </View>
        </View>
      </TouchableHighlight>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DateButton;

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  customButtonDate: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.dark,
  },
  icon: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
});
