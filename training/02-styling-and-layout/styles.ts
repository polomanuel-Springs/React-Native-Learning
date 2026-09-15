import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { gap: 12, paddingBottom: 12 },
  title: { fontSize: 18, fontWeight: '600', color: '#263342' },
  text: { fontSize: 16, lineHeight: 24, color: '#465260' },
  button: { backgroundColor: '#E5EBF2', borderWidth: 1, borderColor: '#C4CFDD', borderRadius: 5, paddingVertical: 10, paddingHorizontal: 16, alignSelf: 'flex-start', minHeight: 44, justifyContent: 'center' },
  buttonText: { color: '#314F70', fontSize: 15, fontWeight: '500' },
  row: { flexDirection: 'row', gap: 10, height: 100, maxWidth: 540 },
  block: { padding: 10, borderRadius: 4, justifyContent: 'center', alignItems: 'center' },
});
