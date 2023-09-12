import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, FlatList } from "react-native-web";

const ColorList = () => {
  const [colors, setColors] = useState([]);

  const addColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    setColors((prevColors) => [...prevColors, `rgb(${r},${g},${b})`]);
  };

  return (
    <View>
      <Button title="Nova cor" onPress={() => addColor()} />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: item,
              width: 100,
              height: 100,
            }}
          ></View>
        )}
      />
    </View>
  );
};

export default ColorList;
