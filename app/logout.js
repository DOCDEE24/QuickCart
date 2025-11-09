import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/logout');
    }, 1500);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Logging out...</Text>
    </View>
  )};