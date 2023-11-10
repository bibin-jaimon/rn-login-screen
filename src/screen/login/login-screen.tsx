import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useLoginFormValidator } from '../../custom-hooks';
import { InputField } from '../../components';
import { GoogleSigninButton } from './google-signin-button';

const STRINGS = {
  signinToDribble: 'Sign in to Dribble',
  orSigninWithEamil: 'Sign in to Dribble',
  signin: 'Sign In',
  forgot: 'Forgot?',
};

const LoginScreen = () => {
  const [form, setForm] = useState(() => ({
    username: '',
    password: '',
  }));

  const { username, password } = form;
  const [isValid, error] = useLoginFormValidator(form);

  const onChangeUsername = (text: string) => {
    setForm(prevState => ({
      ...prevState,
      username: text,
    }));
  };

  const onChangePassword = (text: string) =>
    setForm(prevState => ({
      ...prevState,
      password: text,
    }));

  const onPressForgot = () => {
    console.log('onPressForgot');
  };

  const onPressSignin = () => {
    console.log('Login with', username, password);
  };

  return (
    <ScrollView>
      <View style={{ padding: '12%' }}>
        <View style={styles.topBanner}>
          <Text style={[styles.label, { fontSize: 25 }]}>
            {STRINGS.signinToDribble}
          </Text>
        </View>

        <GoogleSigninButton />

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>{STRINGS.orSigninWithEamil}</Text>
        </View>

        <View>
          <InputField
            value={username}
            placeholder="Email"
            onChange={onChangeUsername}
            error={error.username}
          />

          <InputField
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            onChange={onChangePassword}
            rightButton={
              <Pressable onPress={onPressForgot}>
                <Text style={styles.forgotText}>{STRINGS.forgot}</Text>
              </Pressable>
            }
            error={error.password}
          />

          <TouchableOpacity
            onPress={onPressSignin}
            disabled={!isValid}
            style={[
              styles.loginButton,
              {
                backgroundColor: isValid
                  ? 'rgba(0, 0, 0, 1)'
                  : 'rgba(0, 0, 0, 0.5)',
              },
            ]}>
            <Text style={styles.loginText}>{STRINGS.signin}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dividerContainer: {
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 50,
  },
  dividerText: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    backgroundColor: 'white',
  },
  dividerLine: {
    height: 0.5,
    backgroundColor: 'black',
  },
  topBanner: {
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: 'white',
  },
  forgotText: {
    textDecorationLine: 'underline',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});

export { LoginScreen };
