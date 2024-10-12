import { View, Text, Pressable } from "react-native";
import { useCountDown } from "../utils/hooks";

const InitScreen = () => {
  const { count, handleResetCount } = useCountDown();

  return (
    <View>
      <Text>InitScreen</Text>
      <Text>{count}</Text>
      <Pressable onPress={handleResetCount}>
        <Text>Reset Count</Text>
      </Pressable>
    </View>
  );
};

export default InitScreen;
