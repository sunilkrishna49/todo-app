import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <Button title="Open Drawer" onPress={onPressHandler} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
