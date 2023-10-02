import { SafeAreaView, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import type { PersonalCenterScreenProps } from '@/navigators/types';

export default function PersonalCenterScreen({ navigation }: PersonalCenterScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <Text>Personal Center Screen</Text>
    </SafeAreaView>
  )
}