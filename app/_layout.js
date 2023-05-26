import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

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
