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
          <Text style={styles.tagline}>Discuss Fort</Text>
          <Text style={styles.text}>
            Join the journey of Secure Chat &amp; Project Management in all in
            one Application.
          </Text>
          <View style={styles.buttonsContainer}>
            <View>
              <AppButton
                onPress={() => navigation.navigate('Login')}
                title="Login to your account"
              />
            </View>
            <AppButton
              color="secondary"
              onPress={() => navigation.navigate('Register')}
              title="Register"
            />
          </View>
        </View>
        <View style={styles.background}>
          <View style={styles.background2}></View>
        </View>
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
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
    paddingVertical: 5,
    letterSpacing: 4,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
    color: colors.black,
  },
  text: {
    color: '$555',
    lineHeight: 24,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default WelcomeScreen;
