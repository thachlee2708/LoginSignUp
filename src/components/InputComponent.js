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
export default CustomInput = ({
  isValid,
  onendEditing,
  onchangeText,
  secureTextEntry,
  placeholder,
  helperTextMessage,
}) => {
  const [isPassHide, setIsPassHide] = useState(secureTextEntry ? true : false);
  const [icon, setIcon] = useState('eye');
  const onPressHidePass = () => {
    isPassHide ? setIsPassHide(false) : setIsPassHide(true);
    isPassHide ? setIcon('eye-slash') : setIcon('eye');
  };
  return (
    <SafeAreaView>
      <View style={isValid === false ? styles.wrapInvalid : styles.wrap}>
        <TextInput
          onEndEditing={onendEditing}
          onChangeText={onchangeText}
          style={styles.input}
          secureTextEntry={isPassHide}
          placeholder={placeholder}></TextInput>
        {secureTextEntry && (
          <TouchableOpacity style={styles.icon} onPress={onPressHidePass}>
            <Icon name={icon} size={20} color="#05A4C5" />
          </TouchableOpacity>
        )}
      </View>

      {isValid === false ? (
        <Text style={styles.helperText}>{helperTextMessage}</Text>
      ) : null}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  helperText: {
    marginLeft: 10,
    color: '#F11111',
  },
  wrap: {
    borderWidth: 0.8,
    borderRadius: 8,
    padding: 6,
    margin: 10,
    flexDirection: 'row',
  },
  wrapInvalid: {
    borderColor: '#F11111',
    borderWidth: 0.8,
    borderRadius: 8,
    padding: 15,
    margin: 10,
    flexDirection: 'row',
  },
  input: {
    fontSize: 15,
    flex: 1,
  },
  icon: {
    alignSelf: 'center',
  },
});
