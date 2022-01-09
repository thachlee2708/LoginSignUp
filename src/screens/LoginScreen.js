import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
export default LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);
  const [password, setPassword] = useState('');
  const checkValidEmail = email => {
    email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
      ? setIsValidEmail(true)
      : setIsValidEmail(false);
  };
  const checkValidPassword = password => {
    password.length > 0 ? setIsValidPassword(true) : setIsValidPassword(false);
  };
  const [isPassHide, setIsPassHide] = useState(true);
  const [icon, setIcon] = useState('eye');
  const onPressHidePass = () => {
    isPassHide ? setIsPassHide(false) : setIsPassHide(true);
    isPassHide ? setIcon('eye-slash') : setIcon('eye');
  };
  const checkLogin = () => {
    checkValidEmail(email);
    checkValidPassword(password);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.emailPassword}>Email Address</Text>
        <TextInput
          style={
            isValidEmail === false
              ? styles.emailInputInvalid
              : styles.emailInput
          }
          onChangeText={setEmail}></TextInput>
        {isValidEmail === false ? (
          <Text style={styles.helperText}>
            {email.length === 0 ? 'Email required' : 'Email invalid'}
          </Text>
        ) : null}
        <Text style={styles.emailPassword}>Password</Text>
        <View
          style={
            isValidPassword === false
              ? styles.wrapPasswordInputInvalid
              : styles.wrapPasswordInput
          }>
          <TextInput
            onChangeText={setPassword}
            style={styles.passwordInput}
            secureTextEntry={isPassHide}></TextInput>
          <TouchableOpacity onPress={onPressHidePass}>
            <Icon name={icon} size={20} color="#05A4C5" />
          </TouchableOpacity>
        </View>
        {isValidPassword === false ? (
          <Text style={styles.helperText}>Password required</Text>
        ) : null}
        <TouchableOpacity style={styles.buttonLogin} onPress={checkLogin}>
          <Text style={styles.buttonLoginColorText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.wrapRegister}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp Screen')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  login: {
    marginVertical: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  emailPassword: {
    marginVertical: 15,
    fontSize: 15,
  },
  emailInput: {
    paddingVertical: 5,
    fontSize: 15,
    borderBottomWidth: 0.8,
    borderColor: '#000',
  },
  emailInputInvalid: {
    paddingVertical: 5,
    fontSize: 18,
    borderBottomWidth: 0.8,
    borderColor: '#F11111',
  },
  wrapPasswordInput: {
    borderBottomWidth: 0.8,
    flexDirection: 'row',
  },
  wrapPasswordInputInvalid: {
    borderBottomWidth: 0.8,
    flexDirection: 'row',
    borderColor: '#F11111',
  },
  passwordInput: {
    paddingVertical: 5,
    flex: 1,
    fontSize: 15,
  },
  buttonLogin: {
    margin: 20,
    padding: 20,
    backgroundColor: '#05A4C5',
    alignItems: 'center',
  },
  buttonLoginColorText: {
    color: '#fff',
    fontSize: 15,
  },
  forgotText: {
    color: '#05A4C5',
    fontSize: 15,
    alignSelf: 'center',
  },
  wrapRegister: {
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  registerText: {
    color: '#05A4C5',
    fontSize: 15,
  },
  helperText: {
    paddingVertical: 10,
    color: '#F11111',
  },
});
