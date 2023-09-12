import React from "react";
import { View, Text, } from "react-native";

export default function ResultImc(props) {
  return (
    <View>
      <Text>{props.media}</Text>
      <Text>{props.messageResult}</Text>
    </View>
  );
}
