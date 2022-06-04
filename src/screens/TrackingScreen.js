import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleTrackingAction} from '../redux/tracking/trackingActions';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/Feather';
import dayjs from 'dayjs';

const TrackingScreen = ({route, navigation}) => {
  Icon.loadFont();
  const {id} = route.params;
  const dispatch = useDispatch();

  const trackingState = useSelector(state => state.trackingState);
  const {singleTracking, loading} = trackingState;

  useEffect(() => {
    id && dispatch(getSingleTrackingAction(id));
  }, [id]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 120}}>
      <View style={styles.section}>
        <Text style={styles.lightText}>Tracking Id:</Text>
        <Text style={styles.h1}>{singleTracking?.order?.trackingNumber}</Text>
      </View>

      {/* INSTRUCTIONS */}
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
                style={{...styles.text, color: colors.dark, fontWeight: '600'}}>
                {dayjs(singleTracking?.rescheduledDateDate).format(
                  'ddd MMM YY',
                )}
              </Text>
            )}
            {singleTracking?.instructions === 'custom' && (
              <Text
                style={{...styles.text, color: colors.dark, fontWeight: '600'}}>
                {singleTracking?.instructionsExtra}
              </Text>
            )}
          </View>
        </>
      )}

      {/* LATEST LOCATION */}
      {singleTracking?.locations?.length > 0 && (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 8,
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}>
            <View style={{marginRight: 10}}>
              <Icon name="map-pin" size={22} color={colors.orange} />
            </View>

            <View>
              <Text style={styles.text}>
                {singleTracking &&
                  singleTracking?.locations &&
                  singleTracking?.locations[
                    singleTracking?.locations?.length - 1
                  ].action
                    .split('_')
                    .join(' ')}
              </Text>
              <Text style={styles.lightText}>
                {singleTracking &&
                  singleTracking?.locations &&
                  singleTracking?.locations[
                    singleTracking?.locations?.length - 1
                  ].checkpoint}
              </Text>
            </View>
          </View>
        </>
      )}
      {/* Delivery Address */}
      <View style={styles.section}>
        <Text style={styles.title}>Delivery Address</Text>
      </View>
      <View>
        <View style={styles.sectionWhite}>
          <Text style={styles.lightText}>Package Details</Text>
          <Text style={styles.text}>2 Items (300 grams)</Text>
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

      {/* Pickup Address */}
      <View style={styles.section}>
        <Text style={styles.title}>Pickup Address</Text>
      </View>
      <View>
        <View style={styles.sectionWhite}>
          <View>
            <Text style={styles.text}>
              {singleTracking?.order?.sender?.address?.addressLine},
            </Text>
            <Text style={styles.lightText}>
              {singleTracking?.order?.sender?.address?.city},
              {singleTracking?.order?.sender?.address?.pinCode},
              {singleTracking?.order?.sender?.address?.stateISO}
            </Text>
          </View>
        </View>
      </View>

      {/* Shipment Tracking */}

      <View style={styles.section}>
        <Text style={styles.title}>Shipment</Text>
      </View>
      {singleTracking?.locations?.length > 0 ? (
        <>
          <View style={styles.sectionWhite}>
            {singleTracking?.locations
              ?.slice(0)
              ?.reverse()
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
                      <Text style={styles.text}>{location?.checkpoint}</Text>
                      <Text style={styles.lightText}>{location?.action}</Text>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </>
      ) : (
        <View style={styles.sectionWhite}>
          <Text>No records found</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default TrackingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
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
    borderRadius: 10,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 8,
    margin: 8,
  },
  instructions: {
    marginBottom: 10,
    backgroundColor: colors.secondary,
    padding: 20,
    margin: 8,
    borderRadius: 10,
  },
  h1: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 12,
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
  lightText: {
    fontSize: 14,
    color: '#999',
    textTransform: 'capitalize',
  },
});
