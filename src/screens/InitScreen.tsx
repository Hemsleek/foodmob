import { View, Text, Pressable } from "react-native";
import { useCountDown } from "../utils/hooks";
import Counter from "../components/molecules/Counter";
import { useState } from "react";

const randomText =
  "Hello There,Hello wasaski kaboka, Hello John Wick, Hello Jane Doe".split(
    ","
  );

const InitScreen = () => {
  const [welcomeText, setWelcomeText] = useState("Hello");
  return (
    <View>
      <Text>InitScreen</Text>
      <Text>{welcomeText}</Text>
      <Pressable
        style={{ marginVertical: 10, padding: 10, backgroundColor: "grey" }}
        onPress={() => {
          const randomIndex = Math.random();
          const index = Math.round(randomIndex * (randomText.length - 1));
          setWelcomeText(randomText[index]);
        }}
      >
        <Text>Update Welcome Text</Text>
      </Pressable>
      <Counter welcomeText={welcomeText} />
    </View>
  );
};

export default InitScreen;
