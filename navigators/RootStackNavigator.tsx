import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "@/screens/login"
import NotificationsScreen from "@/screens/notifications"
import RootTabNavigator from "./RootTabNavigator"
import { RootStackParamList } from "./types"
import ScreenHeaderBackground from "@/components/ScreenHeaderBackground"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          // header title
          headerTitle: '訊息中心',
          headerBackground: ScreenHeaderBackground,
        }}
      />
      <Stack.Screen
        name="RootTabNavigator"
        component={RootTabNavigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}