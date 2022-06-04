import React from 'react';
import {useFormikContext} from 'formik';

import TextInput from '../Form/FormField';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, width, ...otherProps}) {
  const {setFieldTouched, setFieldValue, errors, touched, values} =
    useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;

// export const TextAreaField = ({label, ...props}) => {
//   const [field, meta] = useField(props);
//   return (
//     <div className="mb-4">
//       <label className="my-label" htmlFor={field.name}>
//         {label}
//       </label>
//       <textarea
//         className={`my-input ${
//           meta.touched && meta.error && 'border-solid border border-red-300'
//         }`}
//         {...field}
//         {...props}
//         autoComplete="off"
//       />
//       <ErrorMessage
//         component="div"
//         name={field.name}
//         className="text-red-400 text-xs"
//       />
//     </div>
//   );
// };
// export const SelectField = ({children, label, ...props}) => {
//   const [field, meta] = useField(props);
//   return (
//     <div className="mb-4">
//       <label className="my-label" htmlFor={field.name}>
//         {label}
//       </label>
//       <Field
//         name="brand"
//         as="select"
//         {...field}
//         {...props}
//         className={`my-input  ${
//           meta.touched && meta.error && 'border-solid border border-red-300'
//         }`}>
//         {children}
//       </Field>
//       <ErrorMessage
//         component="div"
//         name={field.name}
//         className="text-red-400 text-xs"
//       />
//     </div>
//   );
// };
