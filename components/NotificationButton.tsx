import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { LoginScreenProps } from "@/navigators/types";

export default function NotificationButton() {
  const navigation = useNavigation<LoginScreenProps['navigation']>()
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('Notifications')
    }}>
      <Ionicons name="notifications-outline" size={24} color="#0891b2" />
    </TouchableOpacity>
  )
}