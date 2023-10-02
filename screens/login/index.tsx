import { Text, Button, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import type { LoginScreenProps } from '@/navigators/types';

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <Text>Login Screen</Text>
      <Button title='Go to tab navigator' onPress={() => navigation.replace("RootTabNavigator")} />
    </SafeAreaView>
  )
}