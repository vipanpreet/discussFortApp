import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={require('./loader.json')}
        autoSize={true}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    zIndex: 50,
    width: '100%',
    position: 'absolute',
    // opacity: 0.5,
    left: 10,
    // left: 15,
  },
  animation: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
