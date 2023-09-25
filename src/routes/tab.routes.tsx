import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons"

import { New } from "../pages/New"
import { Feed } from "../pages/Feed"
import { Profile } from "../pages/Profile"

const { Navigator, Screen } = createBottomTabNavigator()

interface TabRoutesProps {}

export function TabRoutes({ ...rest }: TabRoutesProps) {
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
