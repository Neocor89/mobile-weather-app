import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function _layout({ children }) {
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
