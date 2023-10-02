import { SafeAreaView, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { NotificationsScreenProps } from '@/navigators/types';

export default function NotificationsScreen({ navigation }: NotificationsScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}