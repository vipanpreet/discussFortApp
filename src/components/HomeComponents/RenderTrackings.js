import React, {useEffect} from 'react';
import {FlatList, TouchableHighlight, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTrackingsAction} from '../../redux/tracking/trackingActions';
import DeliveryCard from '../Reusables/DeliveryCard';
import Loader from '../Layout/Loader/Loader';

const RenderTrackings = ({navigation}) => {
  const dispatch = useDispatch();
  const trackingState = useSelector(state => state.trackingState);
  const {trackings, trackingsLoading} = trackingState;

  useEffect(() => {
    dispatch(getTrackingsAction());
  }, [dispatch]);

  const onRefresh = () => {
    dispatch(getTrackingsAction());
  };
  const onPress = id => {
    navigation.navigate('Tracking', {id});
  };
  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => onPress(item?.trackingNumber)}>
      <DeliveryCard tracking={item} navigation={navigation} />
    </TouchableHighlight>
  );
  return (
    <View>
      {trackingsLoading ? (
        <Loader />
      ) : (
        <View style={{height: 480}}>
          <FlatList
            data={trackings}
            renderItem={renderItem}
            keyExtractor={tracking => tracking._id}
            onRefresh={onRefresh}
            refreshing={trackingsLoading}
          />
        </View>
      )}
    </View>
  );
};

export default RenderTrackings;
