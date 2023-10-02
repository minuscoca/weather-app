import { StyleSheet, View, Text, ViewProps } from 'react-native'

export default function ScreenHeaderRight({
  children
}: ViewProps) {
  return (
    <View style={styles.containerRoot}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  containerRoot: {
    marginRight: 16
  },
})