import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text> AoraSDFDS!</Text>
      <StatusBar style="auto"></StatusBar>
   
   <Link href={"/profile"}
    style={{color:'blue'}}
   >
   

    Go to Profile</Link>
    </View>
  );
}

