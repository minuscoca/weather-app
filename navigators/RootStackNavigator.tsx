import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "@/screens/login"
import RootTabNavigator from "./RootTabNavigator"
import { RootStackParamList } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RootTabNavigator" component={RootTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}