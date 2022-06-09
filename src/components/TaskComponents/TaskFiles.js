import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import AppText from '../Text';
import colors from '../../config/colors';
import importedStyles from '../../styles';

let files = [
  {_id: 12312, fileType: 'Document', name: 'DataUpdation.pdf'},
  {_id: 12314, fileType: 'Image', name: 'poc.jpg'},
  {_id: 12315, fileType: 'Image', name: 'pasfoc.jpg'},
  {_id: 12316, fileType: 'Image', name: 'pasoc.jpg'},
  {_id: 12317, fileType: 'Image', name: 'povc.jpg'},
];
const onPress = id => {
  console.log(id);
};

const renderItem = ({item}) => (
  <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={() => onPress(item?._id)}>
    <View style={[styles.file, importedStyles.ml1]}>
      <AppText>{item.name}</AppText>
    </View>
  </TouchableHighlight>
);
const TaskFiles = ({}) => {
  return (
    <View style={importedStyles.fullWidth}>
      <View style={importedStyles.my1}>
        <AppText>Files</AppText>
      </View>
      <FlatList
        data={files}
        renderItem={renderItem}
        keyExtractor={file => file._id}
        refreshing={false}
        horizontal
      />
    </View>
  );
};

export default TaskFiles;

const styles = StyleSheet.create({
  file: {
    flex: 1,
    padding: 25,
    borderRadius: 10,
    backgroundColor: colors.greenTint,
  },
});
