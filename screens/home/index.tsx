import { SafeAreaView, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import type { HomeScreenProps } from '@/navigators/types';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <Text>Home Screen</Text>
    </SafeAreaView>
  )
}