import { SafeAreaView, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import type { PersonalCenterScreenProps } from '@/navigators/types';

import ScreenHeader from '@/components/ScreenHeader';

export default function PersonalCenterScreen({ navigation }: PersonalCenterScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}