import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import AppButton from '../components/Button';
import colors from '../config/colors';

function WelcomeScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={{marginTop: 400}}>
          <Text style={styles.tagline}>Arktastic Delivery</Text>
          <Text style={styles.text}>
            We just not deliver products, we make customers love &amp; trust
            through our shipping.
          </Text>
          <View style={styles.buttonsContainer}>
            <View>
              <AppButton
                onPress={() => navigation.navigate('Login')}
                title="Login to your account"
              />
            </View>
          </View>
        </View>
        <ImageBackground
          style={styles.background}
          source={require('../assets/welcome.jpg')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 28,
  },

  background: {
    flex: 1,
    height: 320,
    width: '100%',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  buttonsContainer: {
    width: '100%',
    // flexDirection: 'row',
    marginTop: 10,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 22,
    fontWeight: '700',
    paddingVertical: 5,
    letterSpacing: 1.4,
    marginBottom: 8,
    textAlign: 'center',
    color: colors.black,
  },
  text: {
    color: '#888',
    lineHeight: 24,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default WelcomeScreen;
