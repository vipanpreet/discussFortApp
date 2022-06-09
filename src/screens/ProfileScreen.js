import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../config/colors';
import {switchHideCompletedAction} from '../redux/tracking/trackingActions';
import {logout} from '../redux/user/userActions';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const {userInfo} = auth;

  const trackingState = useSelector(state => state.trackingState);
  const {hideCompleted} = trackingState;

  const logoutHandler = () => {
    dispatch(logout());
  };
  const handleCompleted = () => {
    dispatch(switchHideCompletedAction(!hideCompleted));
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileAvatar}>
        <View style={styles.profile}></View>
        <Text style={styles.text}>{userInfo?.firstName}</Text>
        <Text style={styles.lightText}>Delivery Agent</Text>
      </View>
      {/* <View style={styles.profileStats}>
        <View>
          <Text style={styles.text}>10 Packages</Text>
          <Text style={styles.lightText}>On going</Text>
        </View>
        <View>
          <Text style={styles.text}>15 Packages</Text>
          <Text style={styles.lightText}>Delivered</Text>
        </View>
      </View> */}
      <TouchableOpacity style={styles.list}>
        <Text>Hide Completed</Text>
        <TouchableOpacity onPress={handleCompleted}>
          <Text
            style={{
              backgroundColor: hideCompleted
                ? colors.green
                : colors.primaryDark,
              textAlign: 'center',
              color: '#fff',
              textTransform: 'uppercase',
              fontWeight: '600',
              paddingHorizontal: 6,
              paddingVertical: 2,
              borderRadius: 40,
            }}>
            {String(hideCompleted)}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity onPress={logoutHandler} style={styles.list}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  list: {
    backgroundColor: colors.primaryTint,
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '100%',
    borderRadius: 8,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    width: 180,
    height: 180,
    borderRadius: 250,
    borderWidth: 2,
    borderColor: colors.orange,
    backgroundColor: '#f5f5f5',
  },
  profileAvatar: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileStats: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderTopColor: '#f6f6f6',
    borderTopWidth: 1,
    borderBottomColor: '#f6f6f6',
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 24,
  },
  lightText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#999',
  },
});
