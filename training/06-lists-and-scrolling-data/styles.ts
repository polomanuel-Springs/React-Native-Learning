import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 40, width: '100%', maxWidth: 820, alignSelf: 'center' },
  button: { backgroundColor: '#E5EBF2', borderWidth: 1, borderColor: '#C4CFDD', borderRadius: 5, paddingVertical: 10, paddingHorizontal: 16, alignSelf: 'flex-start', minHeight: 44, justifyContent: 'center' },
  buttonText: { color: '#314F70', fontSize: 15, fontWeight: '500' },
  disabled: { opacity: 0.5 },
  header: { gap: 10, marginBottom: 16 },
  text: { fontSize: 16, lineHeight: 24, color: '#333333' },
  item: { fontSize: 16, color: '#333333', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#DDDDDD' },
  message: { fontSize: 16, color: '#666666', paddingVertical: 20 },
  error: { fontSize: 16, color: '#B33232', paddingVertical: 20 },
});
