import React from 'react';
import {useFormikContext} from 'formik';
import {View} from 'react-native';
import s from '../../styles';
import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';
import AppText from '../Text';

function AppFormField({name, label, width, ...otherProps}) {
  const {setFieldTouched, setFieldValue, errors, touched, values} =
    useFormikContext();

  return (
    <View style={s.mb2}>
      {label && <AppText>{label}</AppText>}
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFormField;
