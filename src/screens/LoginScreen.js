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
  const [isPassHide, setIsPassHide] = useState(true);
  const [icon, setIcon] = useState('eye');
  const onPressHidePass = () => {
    isPassHide ? setIsPassHide(false) : setIsPassHide(true);
    isPassHide ? setIcon('eye-slash') : setIcon('eye');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.emailPassword}>Email Address</Text>
        <TextInput style={styles.emailInput}></TextInput>
        <Text style={styles.emailPassword}>Password</Text>
        <View style={styles.wrapPasswordInput}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={isPassHide}></TextInput>

          <TouchableOpacity onPress={onPressHidePass}>
            <Icon name={icon} size={20} color="#05A4C5" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonLogin}>
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
    marginTop: 5,
    fontSize: 15,
  },
  emailInput: {
    paddingVertical: 5,
    fontSize: 20,
    borderBottomWidth: 0.8,
  },
  wrapPasswordInput: {
    borderBottomWidth: 0.8,
    flexDirection: 'row',
  },
  passwordInput: {
    paddingVertical: 5,
    flex: 1,
    fontSize: 20,
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
});
