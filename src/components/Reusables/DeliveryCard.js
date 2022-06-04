import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import dayjs from 'dayjs';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const DeliveryCard = ({tracking, navigation}) => {
  Icon.loadFont();

  const onPress = () => {
    navigation.navigate('TrackingEdit', {id: tracking?.trackingNumber});
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.icon,
          {
            backgroundColor:
              tracking.status === 'DELIVERED'
                ? colors.greenLight
                : colors.primary,
          },
        ]}>
        <Icon
          name={tracking.status === 'DELIVERED' ? 'checkbox' : 'cube'}
          size={18}
          color={
            tracking.status === 'DELIVERED'
              ? colors.greenDark
              : colors.primaryDark
          }
        />
      </View>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.tracking}>{tracking?.order?.trackingNumber}</Text>
          <Text
            style={[
              styles.text,
              {
                color:
                  tracking.status === 'DELIVERED'
                    ? colors.green
                    : tracking.status === 'BOOKING'
                    ? colors.orange
                    : colors.primary,
              },
            ]}>
            {tracking.status.split('_').join(' ')}
          </Text>
        </View>
        <Text style={styles.date}>
          {dayjs(tracking?.createdAt).format('DD MMM YYYY')}
        </Text>
        {tracking?.instructions !== 'default' && (
          <Text style={styles.instructions}></Text>
        )}
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={{fontSize: 14}}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    position: 'relative',
    marginBottom: 10,
    borderTopColor: '#fff',
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 2,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderColor: '#000',
  },
  instructions: {
    backgroundColor: colors.secondary,
    width: 5,
    height: 5,
    borderRadius: 20,
  },
  button: {
    position: 'absolute',
    top: 6,
    right: 10,
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: colors.black,
    fontWeight: '600',
    backgroundColor: colors.light,
    borderRadius: 8,
  },
  icon: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 80,
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tracking: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000',
    letterSpacing: 1.05,
  },
  date: {
    color: '#888',
    fontSize: 10,
    position: 'absolute',
    top: -8,
    right: 20,
  },
  text: {
    fontSize: 12,
    color: '#555',
    fontWeight: '500',
    lineHeight: 20,
  },
});
