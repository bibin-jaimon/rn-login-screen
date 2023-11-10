import { Text, View } from 'react-native';

const GoogleSigninButton = () => {
  return (
    <View
      style={{
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Sign in with Google</Text>
    </View>
  );
};

export { GoogleSigninButton };
