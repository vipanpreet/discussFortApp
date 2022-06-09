import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React from 'react';
import importedStyles from '../../styles';
import AppText from '../Text';
import CheckBox from '@react-native-community/checkbox';
import MyCheckbox from '../CheckBox';
import colors from '../../config/colors';

const TaskItems = ({task}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState([...task?.items]);
  return (
    <View>
      <View>
        {toggleCheckBox.map((item, i) => (
          <View key={item._id} style={[importedStyles.my1, importedStyles.row]}>
            <View style={importedStyles.mr1}>
              <MyCheckbox
                circle={true}
                disabled={false}
                value={item.isCompleted}
                onValueChange={newValue => {
                  item.isCompleted = newValue;
                  setToggleCheckBox([...toggleCheckBox]);
                }}
              />
            </View>
            <View>
              <AppText
                style={[
                  item.isCompleted ? styles.strike : styles.todo,
                  styles.normal,
                ]}>
                {item.name}
              </AppText>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TaskItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  strike: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  todo: {
    color: colors.dark,
  },
  normal: {
    fontWeight: '600',
  },
  item: {},
});
