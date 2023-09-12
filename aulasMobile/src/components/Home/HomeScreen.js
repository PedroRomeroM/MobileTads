import React from "react";
import { View, Text } from "react-native";
import { Button, StyleSheet } from "react-native-web";

const HomeScreen = ({navigation}) => {
  return (
    <View style={Style.mainView}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Home2')} title="Galeria"/>
      <Button onPress={() => navigation.navigate('Medias')} title="Calculadora de medias"/>
      <Button onPress={() => navigation.navigate('Contador')} title="Contador"/>
      <Button onPress={() => navigation.navigate('Colors')} title="Cores"/>
    </View>
  );
};

export default HomeScreen;

const Style = StyleSheet.create({
  mainView: { flex: 1, alingItems: "center", justifyContent: "center" },
});
