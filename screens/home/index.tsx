import { SafeAreaView, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import type { HomeScreenProps } from '@/navigators/types';

import ScreenHeader from '@/components/ScreenHeader';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <ScreenHeader title="首頁" />
    </SafeAreaView>
  )
}