import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Button } from "react-native-elements";

const SigninScreen = () => {
  return (
    <SafeAreaView>
      <Text h2> SigninScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default SigninScreen;
