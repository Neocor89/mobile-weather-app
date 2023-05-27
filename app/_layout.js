import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
//+ RESTART HERE

export default function Layout({ children }) {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
      <StatusBar style="light" />
    </>
  );
}
