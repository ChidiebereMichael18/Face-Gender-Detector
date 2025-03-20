import { Stack } from "expo-router";
import "../global.css";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return ( 
      <Stack>
        {/* <Stack.Screen name="Login" options={{headerShown:false}} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <StatusBar style="auto" />
      </Stack>
  );
}
