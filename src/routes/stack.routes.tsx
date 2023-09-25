import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Profile } from "../pages/Profile"

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Profile} />
    </Navigator>
  )
}
