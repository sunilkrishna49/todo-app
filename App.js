// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import WelcomeScreen from "./src/screens/WelcomeScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import HomeScreen from "./src/screens/HomeScreen";
// import UserScreen from "./src/screens/UserScreen";
// import { Ionicons } from "@expo/vector-icons";

// export default function App() {
//   const Drawer = createDrawerNavigator();
//   return (
//     <>
//       <StatusBar style="light" />
//       <NavigationContainer>
//         <Drawer.Navigator
//           screenOptions={{
//             headerStyle: { backgroundColor: "#3c0a6b" },
//             headerTintColor: "white",
//             headerTitleAlign: "center",
//             drawerActiveTintColor: "#3c0a6b",
//             drawerActiveBackgroundColor: "#f0e1ff",
//             // drawerStyle: { backgroundColor: "#ccc" },
//           }}
//         >
//           <Drawer.Screen name="Welcome" component={WelcomeScreen} />
//           <Drawer.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{
//               drawerLabel: "Home",
//               drawerIcon: ({ color, size }) => (
//                 <Ionicons name="home" color={color} size={size} />
//               ),
//             }}
//           />
//           <Drawer.Screen
//             name="User"
//             component={UserScreen}
//             options={{
//               drawerIcon: ({ color, size }) => (
//                 <Ionicons name="person" color={color} size={size} />
//               ),
//             }}
//           />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import BottomNavigation from "./src/navigation/BottomNavigation";

const App = () => {
  // return <DrawerNavigation />;
  return <BottomNavigation />;
};

export default App;

const styles = StyleSheet.create({});
