import { SafeAreaView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import type { LearningCenterScreenProps } from '@/navigators/types'

import ScreenHeader from '@/components/ScreenHeader'

export default function LearningCenterScreen({ navigation }: LearningCenterScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <ScreenHeader title="學習中心" />
    </SafeAreaView>
  )
}

