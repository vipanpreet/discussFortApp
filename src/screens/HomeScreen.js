import React, {Suspense} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from '../components/Text';
import colors from '../config/colors';
import MySafeArea from '../components/MySafeArea';
import s from '../styles';
import AppButton from '../components/Button';
// import BarcodeScanner from 'react-native-scan-barcode';
// import RenderTasks from '../components/HomeComponents/RenderTasks';
const RenderTasks = React.lazy(() =>
  import('../components/HomeComponents/RenderTasks'),
);

const HomeScreen = ({navigation}) => {
  Icon.loadFont();

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <MySafeArea>
        <View style={styles.container}>
          <AppText style={styles.myTasks}>My Tasks</AppText>
          <AppText style={styles.myTasksCount}>
            You Have 2 Tasks for{' '}
            <AppText style={styles.underline}>Today</AppText>
          </AppText>

          <View style={[s.fullWidth, s.mt2]}>
            <AppButton
              onPress={() => navigation.navigate('CreateTask')}
              color="dark"
              title="Create Task"
            />
          </View>
          <View style={styles.subContainer}>
            {/* TASKS */}
            <AppText style={styles.title}>Tasks</AppText>
            <RenderTasks navigation={navigation} />
          </View>
        </View>
      </MySafeArea>
    </Suspense>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  subContainer: {
    paddingVertical: 20,
  },
  myTasks: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.dark,
    marginTop: 20,
    marginLeft: 10,
  },
  justifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myTasksCount: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 6,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: '600',
    paddingLeft: 10,
  },
});
