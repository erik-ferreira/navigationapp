import { Feather } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { New } from "../pages/New"
import { Feed } from "../pages/Feed"

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="feed"
        component={Feed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="new"
        component={New}
        options={{
          tabBarLabel: "Novo",
          tabBarIcon: ({ size, color }) => (
            <Feather name="plus" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
