import React, {useEffect} from 'react';
import {StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';

import {Form, FormField, SubmitButton, ErrorMessage} from '../components/Form';
import Loader from '../components/Layout/Loader/Loader';
import AppText from '../components/Text';
import {login} from '../redux/user/userActions';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const {loading, errorLogin} = auth;

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  });

  const handleSubmit = values => {
    dispatch(login(values.email, values.password));
  };

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Image style={styles.logo} source={require('../assets/logo.png')} />

          <Form
            initialValues={{email: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            <ErrorMessage
              error="Invalid email / Password."
              visible={errorLogin}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Login" />
          </Form>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
