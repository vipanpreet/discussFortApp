import React, {Suspense} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import BarcodeScanner from 'react-native-scan-barcode';
// import RenderTrackings from '../components/HomeComponents/RenderTrackings';
const RenderTrackings = React.lazy(() =>
  import('../components/HomeComponents/RenderTrackings'),
);
import colors from '../config/colors';
import Button from '../components/Button';

const HomeScreen = ({navigation}) => {
  Icon.loadFont();

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Track Parcel</Text>

          <RenderTrackings navigation={navigation} />
        </View>
      </SafeAreaView>
    </Suspense>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  search: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
    marginRight: 10,
  },
  select: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#eee',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  relative: {
    position: 'relative',
  },
  selectText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    color: colors.black,
  },
  text: {
    fontSize: 12,
    color: '#555',
    lineHeight: 20,
    fontWeight: '400',
  },
  qrBtn: {
    backgroundColor: colors.orange,
    width: 38,
    height: 38,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zeroContainer: {
    height: 0,
    flex: 0,
  },
  cameraContainer: {
    height: Dimensions.get('window').height,
    zIndex: 50,
  },
  cameraMenu: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 60,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuItem: {
    marginHorizontal: 10,
  },
});
