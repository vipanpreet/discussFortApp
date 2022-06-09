/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  acceptTrackingAction,
  addCheckpointTrackingAction,
  getSingleTrackingAction,
  makeSchedulingAvailableAction,
} from '../redux/tracking/trackingActions';
import colors from '../config/colors';
import TextInput from '../components/TextInput';
import Icon from 'react-native-vector-icons/Feather';
import Loader from '../components/Layout/Loader/Loader';
import dayjs from 'dayjs';
const TrackingEditScreen = ({route, navigation}) => {
  Icon.loadFont();

  const {id} = route.params;
  const dispatch = useDispatch();
  const [selectedAction, setselectedAction] = useState('arrived');
  const [location, setlocation] = useState('');

  const trackingState = useSelector(state => state.trackingState);
  const {singleTracking, loading, error} = trackingState;

  useEffect(() => {
    dispatch(getSingleTrackingAction(id));
  }, [id]);

  const dispatchHandler = status => {
    dispatch(
      acceptTrackingAction(
        singleTracking?.order?._id,
        status,
        `Package is ${
          status.toLowerCase().charAt(0).toUpperCase() +
          status.toLowerCase().slice(1)
        } from ` + singleTracking?.order?.sender?.address?.city,
      ),
    );
  };

  const checkpointAddHandler = status => {
    let checkpoint = '';
    if (status === 'IN_TRANSIT') {
      if (selectedAction === 'arrived') {
        checkpoint = `Package is Arrived at ${location}`;
      } else {
        checkpoint = `Package is Shipped from ${location}`;
      }
    } else if (status === 'OUT_FOR_DELIVERY') {
      checkpoint = `Package is arriving soon at your location`;
    } else {
      checkpoint = `Package is DELIVERED`;
    }

    if (status === 'IN_TRANSIT' && location.length > 2) {
      dispatch(
        addCheckpointTrackingAction(singleTracking?._id, checkpoint, status),
      );
    } else {
      dispatch(
        addCheckpointTrackingAction(singleTracking?._id, checkpoint, status),
      );
    }
    setlocation('');
  };

  const enableSchedulingHandler = () => {
    return Alert.alert(
      'Are your sure?',
      'Are you sure you want to Enable Rescheduling?',
      [
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            dispatch(makeSchedulingAvailableAction(singleTracking?._id, true));
          },
        },
        // The "No" button
        {
          text: 'No',
        },
      ],
    );
  };

  const showConfirmDialog = status => {
    return Alert.alert(
      'Are your sure?',
      `Are you sure you want to change status to ${
        status.split('_').join(' ').toLowerCase().charAt(0).toUpperCase() +
        status.split('_').join(' ').toLowerCase().slice(1)
      }`,
      [
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            status === 'OUT_FOR_DELIVERY' || status === 'DELIVERED'
              ? checkpointAddHandler(status)
              : dispatchHandler(status);
          },
        },
        // The "No" button
        {
          text: 'No',
        },
      ],
    );
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 120}}>
      {error ? (
        <View style={styles.section}>
          <Text style={styles.title}>{error}</Text>
        </View>
      ) : loading ? (
        <View style={{height: 200}}>
          <Loader />
        </View>
      ) : (
        <>
          <View style={styles.section}>
            <Text style={styles.lightText}>Tracking Id:</Text>
            <Text style={styles.h1}>
              {singleTracking?.order?.trackingNumber}
            </Text>
          </View>
          {singleTracking?.instructions !== 'default' && (
            <>
              <View
                style={{
                  ...styles.sectionWhite,
                  backgroundColor: colors.primary,
                  borderRadius: 10,
                }}>
                <Text style={{...styles.text, color: colors.dark}}>
                  {singleTracking?.instructions}
                </Text>
                {singleTracking?.instructions === 'reschedule' && (
                  <Text
                    style={{
                      ...styles.text,
                      color: colors.dark,
                      fontWeight: '600',
                    }}>
                    {dayjs(singleTracking?.rescheduledDateDate).format(
                      'ddd MMM YY',
                    )}
                  </Text>
                )}
                {singleTracking?.instructions === 'custom' && (
                  <Text
                    style={{
                      ...styles.text,
                      color: colors.dark,
                      fontWeight: '600',
                    }}>
                    {singleTracking?.instructionsExtra}
                  </Text>
                )}
              </View>
            </>
          )}
          <View>
            <View style={styles.sectionWhite}>
              <Text style={styles.lightText}>Package Details</Text>
              <Text style={styles.text}>
                {singleTracking?.order?.items?.length} Items (
                {singleTracking?.order?.totalWeight} grams)
              </Text>
            </View>
            <View
              style={{
                ...styles.sectionWhite,
                borderTopColor: '#eee',
                borderTopWidth: 1,
              }}>
              <View>
                <Text style={styles.text}>
                  {singleTracking?.order?.receiver?.contact?.firstName +
                    ' ' +
                    singleTracking?.order?.receiver?.contact?.lastName}
                </Text>
                <Text style={styles.lightText}>
                  {singleTracking?.order?.receiver?.contact?.phone}
                </Text>
                <Text style={styles.lightText}>
                  {singleTracking?.order?.receiver?.address?.addressLine}
                </Text>
                <Text style={styles.lightText}>
                  {singleTracking?.order?.receiver?.address?.city},
                  {singleTracking?.order?.receiver?.address?.pinCode},
                  {singleTracking?.order?.receiver?.address?.stateISO}
                </Text>
              </View>
            </View>
          </View>

          {/* Options */}
          {(singleTracking?.status === 'IN_TRANSIT' ||
            singleTracking?.status === 'PICKUP') && (
            <>
              <View style={styles.section}>
                <Text style={styles.title}>Tracking</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginHorizontal: 8,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() => setselectedAction('arrived')}
                  style={{
                    ...styles.select,
                    borderColor:
                      selectedAction === 'arrived' ? colors.orange : '#eee',
                  }}>
                  <Text style={styles.selectText}>Arrived at</Text>
                </TouchableOpacity>
              </View>
              <View style={{paddingHorizontal: 20, margin: 8}}>
                <TextInput
                  placeholder="Please Add Location"
                  onChangeText={e => setlocation(e)}
                  value={location}
                />
              </View>
              <View style={{paddingHorizontal: 20, margin: 8}}>
                <TouchableOpacity
                  disabled={location?.length <= 2 ? true : false}
                  style={styles.button}
                  onPress={() => checkpointAddHandler('IN_TRANSIT')}>
                  <Text style={styles.buttonText}>Add Checkpoint</Text>
                </TouchableOpacity>
                {!singleTracking?.isRescheduledEnabled && (
                  <TouchableOpacity
                    onPress={() => enableSchedulingHandler()}
                    style={[
                      styles.button,
                      {marginTop: 10, backgroundColor: colors.medium},
                    ]}>
                    <Text style={styles.buttonText}>Enable Rescheduling</Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}
          {/* Shipment Tracking */}
          {singleTracking?.status !== 'BOOKING' && (
            <>
              <View style={styles.section}>
                <Text style={styles.title}>Shipment</Text>
              </View>
              <View style={styles.sectionWhite}>
                {singleTracking?.locations
                  .slice(0)
                  .reverse()
                  ?.map((location, i) => (
                    <View key={i}>
                      <Text style={{...styles.text, fontWeight: '600'}}>
                        {dayjs(location?.date).format('ddd MMM YY ,hh:mm A')}
                      </Text>
                      <View style={styles.trackingBox}>
                        <Icon
                          name="circle"
                          size={20}
                          color={i === 0 ? colors.green : colors.primary}
                        />
                        <View style={{marginLeft: 10}}>
                          <Text style={styles.text}>
                            {location?.checkpoint}
                          </Text>
                          <Text style={styles.lightText}>
                            {location?.action}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
              </View>
            </>
          )}

          {/* Dispatch button */}
          {singleTracking?.status === 'DELIVERED' ? (
            <View style={styles.section}>
              <Text
                style={{
                  backgroundColor: colors.orange,
                  paddingVertical: 6,
                  textAlign: 'center',
                  color: colors.white,
                }}>
                DELIVERED
              </Text>
            </View>
          ) : (
            <View style={styles.section}>
              <TouchableOpacity
                style={{
                  ...styles.button,
                  backgroundColor: colors.primary,
                  paddingVertical: 12,
                }}
                onPress={() =>
                  showConfirmDialog(
                    singleTracking?.status === 'BOOKING'
                      ? 'PICKUP'
                      : singleTracking?.status === 'IN_TRANSIT' ||
                        singleTracking?.status === 'PICKUP'
                      ? 'OUT_FOR_DELIVERY'
                      : 'DELIVERED',
                  )
                }>
                <Text style={{...styles.buttonText, color: colors.dark}}>
                  {singleTracking?.status === 'BOOKING'
                    ? 'Pickup / Accept'
                    : singleTracking?.status === 'IN_TRANSIT' ||
                      singleTracking?.status === 'PICKUP'
                    ? 'OUT FOR DELIVERY'
                    : 'MARK DELIVERED'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default TrackingEditScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryTint,
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
    marginBottom: 30,
  },
  trackingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionWhite: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginHorizontal: 12,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 8,
    margin: 8,
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
  selectText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  h1: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
    lineHeight: 24,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    textTransform: 'capitalize',
  },
  button: {
    backgroundColor: colors.orange,
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  lightText: {
    fontSize: 14,
    color: '#999',
    textTransform: 'capitalize',
  },
});
