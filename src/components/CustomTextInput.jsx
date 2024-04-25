import React, { useState } from "react";
import styles from "./style";
import { View, Text, TextInput } from "react-native";

const CustomTextInput = ({title, placeholder}) => {
    const [isFocused, setIsFocused] = useState(false);
  return (
    <>
    <View style={styles.inputWrapper}>
        <Text style={styles.label}>{title}</Text>
        <TextInput style={isFocused ? styles.inputHighlighted : styles.input} placeholder={placeholder} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
    </View>
    </>
  );
};

export default CustomTextInput;


