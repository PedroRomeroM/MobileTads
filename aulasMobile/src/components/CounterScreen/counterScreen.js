import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-web";

const CounterScreen = () => {
const[counter, setCounter] = useState(0);

    return (
        <View>
            <Button onPress={() => setCounter(counter+1)} title="Incrementa"/>
            <Text>{ counter }</Text>
        </View>
    )
}

export default CounterScreen; 