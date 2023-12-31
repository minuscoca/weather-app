import { SafeAreaView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import type { LearningCenterScreenProps } from '@/navigators/types'

export default function LearningCenterScreen({ navigation }: LearningCenterScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

