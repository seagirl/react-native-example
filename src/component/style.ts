import { StyleSheet } from 'react-native'

export const colors = StyleSheet.create({
  label: { color: '#333' },
  icon: { color: '#fff' },
  theme: { color: '#22304F' },
  active: { color: '#c33' },
  disabled: { color: '#ccc' },
})

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    ...colors.label,
    fontSize: 36
  },
  h2: {
    ...colors.label,
    fontSize: 28
  },
  h3: {
    ...colors.label,
    fontSize: 24
  },
  label: {
    ...colors.label,
    fontSize: 16
  },
  spacer: {
    height: 16
  }
})
