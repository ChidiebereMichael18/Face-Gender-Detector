// app/(tabs)/_layout.js
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#262626",
        tabBarInactiveTintColor: "#262626",
        tabBarStyle: {
          // height: 60,
          // paddingBottom: 8,
          paddingTop: 6,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ?"search" : 'search-outline' } size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Reels"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Activity"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "videocam-outline" : 'videocam-outline'} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color,focused }) => (
            <Ionicons name={focused ?"person-circle" : 'person-circle-outline'} size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}