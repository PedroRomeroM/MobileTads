import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import ResultMedia from "../Result";
import { Button } from "react-native-web";

export default function Form() {
  const [media1, setMedia1] = useState(null);
  const [media2, setMedia2] = useState(null);
  const [message, setMessage] = useState("preencha as notas");
  const [media, setMedia] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function calculator() {
    return setMedia((parseInt(media1)+parseInt(media2))/2);
  }
  function validation() {
    if (media1 != null && media2 != null) {
      calculator();
      setMessage("Sua média é: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setMedia(null);
    setTextButton("Calcular");
    setMessage("preencha as notas");
  }

  return (
    <View>
      <View>
        <Text>Nota 1</Text>
        <TextInput
          onChangeText={setMedia1}
          value={media1}
          placeholder="Ex. 1.75"
          inputMode="numeric"
        ></TextInput>
        <Text>Nota 2</Text>
        <TextInput
          onChangeText={setMedia2}
          value={media2}
          placeholder="Ex. 70.10"
          inputMode="numeric"
        />
        <Button onPress={() => validation()}title="Calcular Media" />
        <ResultMedia messageResult={message} media={media}/>
      </View>
    </View>
  );
}
