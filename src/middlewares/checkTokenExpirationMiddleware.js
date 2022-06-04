import jwtDecode from 'jwt-decode';
import EncryptedStorage from 'react-native-encrypted-storage';

export const checkTokenExpirationMiddleware = store => next => async action => {
  const token =
    (await EncryptedStorage.getItem('userInfo')) &&
    JSON.parse(await EncryptedStorage.getItem('userInfo'))['token'].substring(
      'Bearer '.length,
    );
  if (token) {
    if (jwtDecode(token).exp < Date.now() / 1000) {
      next(action);
      await EncryptedStorage.clear();
    }
  }
  next(action);
};
