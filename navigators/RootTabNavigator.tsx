import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '@/screens/home'
import LearningCenterScreen from '@/screens/learning-center'
import PersonalCenterScreen from '@/screens/personal-center'
import { RootTabParamList } from './types'

import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator<RootTabParamList>()

export default function RootTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "首頁",
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
          tabBarActiveTintColor: "#0891b2",
        }}
      />
      <Tab.Screen
        name="LearningCenter"
        component={LearningCenterScreen}
        options={{
          tabBarLabel: "學習中心",
          tabBarIcon: ({ color }) => <AntDesign name="book" size={24} color={color} />,
          tabBarActiveTintColor: "#0891b2",
        }}
      />
      <Tab.Screen
        name="PersonalCenter"
        component={PersonalCenterScreen}
        options={{
          tabBarLabel: "個人中心",
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
          tabBarActiveTintColor: "#0891b2",
        }}
      />
    </Tab.Navigator>
  );
}