import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../utils/types";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";

type OnboardingNav = StackNavigationProp<RootStackParams, "onboarding">;

const Onboarding = () => {
  const navigation = useNavigation<OnboardingNav>();
  return <Text>Onboarding</Text>;
};

export default Onboarding;
