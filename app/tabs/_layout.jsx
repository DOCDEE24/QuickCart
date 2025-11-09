import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="cart" options={{ title: "Cart" }} />
      <Tabs.Screen name="payment" options={{ title: "Payment" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}