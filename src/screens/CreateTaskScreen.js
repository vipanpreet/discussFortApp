import {ScrollView, StyleSheet, TouchableHighlight, View} from 'react-native';
import React, {useRef} from 'react';

import MySafeArea from '../components/MySafeArea';
import * as Yup from 'yup';
import s from '../styles';

import {Picker} from '@react-native-picker/picker';

import CreateTaskHeader from '../components/CreateTaskComponents/CreateTaskHeader';
import {ErrorMessage, Form, FormField} from '../components/Form';
import {useState} from 'react';
import colors from '../config/colors';

import DateButton from '../components/Reusables/DateButton';
import AppButton from '../components/Button';

const CreateTaskScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [selectedLanguage, setSelectedLanguage] = useState();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    firstName: Yup.string().required().min(2).label('firstName'),
    lastName: Yup.string().required().min(2).label('lastName'),
  });

  const handleSubmit = values => {
    dispatch(login(values.email, values.password));
  };

  return (
    <MySafeArea>
      <ScrollView>
        <View style={styles.container}>
          <CreateTaskHeader navigation={navigation} />

          <Form
            initialValues={{
              email: '',
              password: '',
              firstName: '',
              lastName: '',
              phoneNumber: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            {/* <ErrorMessage
              error="Email Address Already Exists"
              visible={errorLogin}
            /> */}

            <FormField
              label="Task Name"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              name="name"
              placeholder="Task Name"
            />
            <FormField
              label="Description"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              name="description"
              multiline={true}
              placeholder="Task Description"
              style={{height: 80}}
            />

            {/* DATE & PRIORITY */}
            <View style={s.row}>
              <View style={[s.halfWidth, {marginRight: 2}]}>
                <DateButton date={date} setDate={setDate} />
              </View>
              <View style={[s.halfWidth, {marginLeft: 2}]}>
                <Picker
                  mode="dropdown"
                  itemStyle={styles.itemStyle}
                  numberOfLines={2}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }>
                  <Picker.Item label="Low Priority" value="LOW" />
                  <Picker.Item label="Medium " value="MEDIUM" />
                  <Picker.Item label="High Priority" value="HIGH" />
                  <Picker.Item label="Critical " value="CRITICAL" />
                </Picker>
              </View>
            </View>
          </Form>
        </View>
      </ScrollView>
    </MySafeArea>
  );
};

export default CreateTaskScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  customButton: {
    backgroundColor: colors.light,
    padding: 0,
    borderRadius: 8,
  },
  itemStyle: {
    height: 70,
    borderRadius: 8,
    fontSize: 18,
    letterSpacing: 1,
    color: colors.dark,
  },
});
