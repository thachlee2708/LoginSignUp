import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default LoginScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(null);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(null);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(null);
  const [isPassHide, setIsPassHide] = useState(true);
  const [icon, setIcon] = useState('eye');
  const onPressHidePass = () => {
    isPassHide ? setIsPassHide(false) : setIsPassHide(true);
    isPassHide ? setIcon('eye-slash') : setIcon('eye');
  };
  const checkValidName = name => {
    name.length > 0 ? setIsValidName(true) : setIsValidName(false);
  };
  const checkValidEmail = email => {
    email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
      ? setIsValidEmail(true)
      : setIsValidEmail(false);
  };
  const checkValidPhone = phone => {
    phone.toString().length <= 10 &&
    !isNaN(phone) &&
    phone.toString().length > 0
      ? setIsValidPhone(true)
      : setIsValidPhone(false);
  };
  const checkValidPassword = password => {
    password.length > 0 ? setIsValidPassword(true) : setIsValidPassword(false);
  };
  const checkSignUp = () => {
    checkValidName(name);
    checkValidEmail(email);
    checkValidPhone(phone);
    checkValidPassword(password);
    isValidName && isValidEmail && isValidPhone && isValidPassword
      ? navigation.navigate('Login Screen')
      : null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.signup}>Creat Account</Text>
        <TextInput
          onEndEditing={() => checkValidName(name)}
          style={isValidName === false ? styles.inputInvalid : styles.input}
          placeholder="Name*"
          onChangeText={setName}></TextInput>
        {isValidName === false ? (
          <Text style={styles.helperText}>Name required</Text>
        ) : null}
        <TextInput
          onEndEditing={() => checkValidEmail(email)}
          style={isValidEmail === false ? styles.inputInvalid : styles.input}
          placeholder="Email*"
          onChangeText={setEmail}></TextInput>
        {isValidEmail === false ? (
          <Text style={styles.helperText}>
            {email.length === 0 ? 'Email required' : 'Email invalid'}
          </Text>
        ) : null}
        <TextInput
          onEndEditing={() => checkValidPhone(phone)}
          style={isValidPhone === false ? styles.inputInvalid : styles.input}
          placeholder="Phone*"
          onChangeText={setPhone}></TextInput>
        {isValidPhone === false ? (
          <Text style={styles.helperText}>
            {phone.toString().length === 0
              ? 'Phone required'
              : 'Phone invalid, 10 digits required'}
          </Text>
        ) : null}
        <View
          style={
            isValidPassword === false
              ? styles.wrapPasswordInvalid
              : styles.wrapPassword
          }>
          <TextInput
            onEndEditing={() => checkValidPassword(password)}
            onChangeText={setPassword}
            style={styles.inputPass}
            secureTextEntry={isPassHide}
            placeholder="Password*"></TextInput>
          <TouchableOpacity onPress={onPressHidePass}>
            <Icon name={icon} size={20} color="#05A4C5" />
          </TouchableOpacity>
        </View>
        {isValidPassword === false ? (
          <Text style={styles.helperText}>Password required</Text>
        ) : null}
        <TouchableOpacity style={styles.buttonSignUp} onPress={checkSignUp}>
          <Text style={styles.buttonSignUpColorText}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.wrapLogin}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login Screen')}>
            <Text style={styles.loginText}>Login</Text>
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
  signup: {
    marginVertical: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  helperText: {
    marginLeft: 10,
    color: '#F11111',
  },
  input: {
    fontSize: 15,
    borderWidth: 0.8,
    padding: 15,
    margin: 10,
    borderRadius: 8,
  },
  inputInvalid: {
    borderColor: '#F11111',
    fontSize: 15,
    borderWidth: 0.8,
    padding: 15,
    margin: 10,
    borderRadius: 8,
  },
  wrapPassword: {
    borderWidth: 0.8,
    borderRadius: 8,
    padding: 15,
    margin: 10,
    flexDirection: 'row',
  },
  wrapPasswordInvalid: {
    borderColor: '#F11111',
    borderWidth: 0.8,
    borderRadius: 8,
    padding: 15,
    margin: 10,
    flexDirection: 'row',
  },
  inputPass: {
    fontSize: 15,
    flex: 1,
  },
  buttonSignUp: {
    margin: 20,
    padding: 20,
    backgroundColor: '#05A4C5',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonSignUpColorText: {
    color: '#fff',
    fontSize: 15,
  },
  wrapLogin: {
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  loginText: {
    color: '#05A4C5',
    fontSize: 15,
  },
});
