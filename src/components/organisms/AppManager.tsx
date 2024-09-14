import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AppManager = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppManager;
