import { Feather } from "@expo/vector-icons"
import { createDrawerNavigator } from "@react-navigation/drawer"

import { TabRoutes } from "./tab.routes"

const { Navigator, Screen } = createDrawerNavigator()

export function DrawerRoutes() {
  return (
    <Navigator screenOptions={{ title: "" }}>
      <Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
