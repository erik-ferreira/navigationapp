import { Feather } from "@expo/vector-icons"
import { createDrawerNavigator } from "@react-navigation/drawer"

import { TabRoutes } from "./tab.routes"
import { StackRoutes } from "./stack.routes"

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

      <Screen
        name="profile"
        component={StackRoutes}
        options={{
          drawerLabel: "Meu Perfil",
          drawerIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
