import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-web";
import tmdb from "../../api/tmdb";

const ApiView = () => {
  const [nome, setNome] = useState("");
  const [resultado, setResultado] = useState([])

  const searchTmdb = async (query) => {
    const response = await tmdb.get('/search/movie', {
      params: {
        query,
        include_adult: false,
      },
    });
    console.log(response)
    setResultado(response);
  };

  return (
    <View>
      <Text>Nome do filme</Text>
      <TextInput
        onChangeText={setNome}
        value={nome}
        placeholder="Pesquisar por filmes"
        inputMode="text"
      ></TextInput>
      <Button onPress={() => searchTmdb(nome)} title="Buscar" />
      <Text>{resultado}</Text>
    </View>
  );
};

export default ApiView;
