import { StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";

type CustomButtonProps = {
  title: string;
  size?: 'small' | 'large';
  onPressButton: (title: string) => void;
}

const CustomButton = (props: CustomButtonProps) => {
  const buttonSize = props.size || 'small';

  const buttonStyle = {
    ...styles.button,
    ...(buttonSize === 'small' && styles.small),
    ...(buttonSize === 'large' && styles.large)
  }

  return (
    <TouchableOpacity style={buttonStyle}>
      <Button
        title={props.title}
        onPress={() => props.onPressButton(props.title)}
      ></Button>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '15%',
  },
  small: {
    width: '15%'
  },
  large: {
    width: '33%'
  }
});

export default CustomButton;
