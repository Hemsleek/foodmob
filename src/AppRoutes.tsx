import { View, StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Onboarding from "./screens/Onboarding";
import InitScreen from "./screens/InitScreen";
import { RootStackParams } from "./utils/types";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Stack = createStackNavigator<RootStackParams>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;
  return (
    <View style={[styles.container, styles.statusBarHeight]}>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName="init">
        <Screen name="onboarding" component={Onboarding} />
        <Screen name="init" component={InitScreen} />
      </Navigator>
    </View>
  );
};

export default AppRoutes;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  statusBarHeight: {
    paddingTop: hp(5.5),
  },
});
