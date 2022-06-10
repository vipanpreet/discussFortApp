import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MySafeArea from '../components/MySafeArea';
import * as Yup from 'yup';

import CreateTaskHeader from '../components/CreateTaskComponents/CreateTaskHeader';
import {ErrorMessage, Form, FormField} from '../components/Form';

const CreateTaskScreen = ({navigation}) => {
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
});
