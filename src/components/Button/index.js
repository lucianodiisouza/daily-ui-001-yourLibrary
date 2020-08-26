import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = (props) => {
  const {btnStyle, txtStyle, btnLabel} = props;
  const btnType = btnStyle === 'full' ? styles.full : styles.outlined;
  const textType = txtStyle === 'white' ? styles.white : styles.blue;

  return (
    <TouchableOpacity style={btnType} onClick={props.onClick}>
      <Text style={textType}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  full: {
    backgroundColor: '#223370',
    borderWidth: 1,
    borderColor: '#223370',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderRadius: 4,
    marginVertical: 2.5,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#223370',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderRadius: 4,
    marginVertical: 2.5,
  },
  white: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  blue: {
    color: '#223370',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Button;
