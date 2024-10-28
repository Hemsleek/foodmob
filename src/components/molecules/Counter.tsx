import { View, Text, Pressable } from "react-native";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useCountDown } from "../../utils/hooks";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../utils/types";

const products = [
  { name: "apple", price: 25 },
  { name: "apple", price: 25 },
  { name: "mango", price: 30 },
  { name: "banana", price: 90 },
];

type Navigation = StackNavigationProp<RootStackParams, "init">;

const Counter = ({ welcomeText }: { welcomeText?: string }) => {
  const { count, handleResetCount } = useCountDown();
  const [total, setTotal] = useState(0);
  const navigation = useNavigation<Navigation>();
  const resetCountText = useMemo(() => {
    return `you can reset in ${count} seconds`;
  }, [count]);

  //   const getTotal = () => {
  //     const total = products.reduce((acc, product) => {
  //       return acc + product.price;
  //     }, 0);

  //     setTotal(total);
  //   };

  const getTotal = useCallback(() => {
    const total = products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);

    setTotal(total);
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setTotal(0);
        handleResetCount();
      };
    }, [])
  );

  return (
    <View>
      <Text>{count}</Text>
      <Pressable onPress={handleResetCount}>
        <Text>Reset Count</Text>
      </Pressable>
      <Text>{resetCountText}</Text>
      <Pressable
        style={{ marginVertical: 10, padding: 10, backgroundColor: "grey" }}
        onPress={getTotal}
      >
        <Text>Get Total Products Price</Text>
      </Pressable>
      <Text>Total Products Price: {total}</Text>
      <Pressable
        style={{ marginVertical: 10, padding: 10, backgroundColor: "grey" }}
        onPress={() => {
          navigation.navigate("onboarding");
        }}
      >
        <Text>Goto another screen</Text>
      </Pressable>
    </View>
  );
};

export default memo(Counter);
