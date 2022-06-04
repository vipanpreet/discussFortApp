import React, {useEffect} from 'react';
// import {Button, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import AuthNavigator from './src/navigations/AuthNavigator';
import AppNavigator from './src/navigations/AppNavigator';
import {useSelector} from 'react-redux';
import OfflineNotice from './src/components/OfflineNotice';
import {getCreds} from './src/redux/user/userActions';
import {useDispatch} from 'react-redux';
import {LogBox} from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <OfflineNotice />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
};

const Main = () => {
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const {userInfo} = auth;

  useEffect(() => {
    !userInfo && dispatch(getCreds());
  }, []);

  return <>{!userInfo ? <AppNavigator /> : <AuthNavigator />}</>;
};
export default App;
