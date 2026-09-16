import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { gap: 12, paddingBottom: 12 },
  text: { fontSize: 16, lineHeight: 24, color: '#465260' },
  buttons: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  button: { backgroundColor: '#E5EBF2', borderWidth: 1, borderColor: '#C4CFDD', borderRadius: 5, paddingVertical: 10, paddingHorizontal: 16, alignSelf: 'flex-start', minHeight: 44, justifyContent: 'center' },
  buttonText: { color: '#314F70', fontSize: 15, fontWeight: '500' },
  disabled: { opacity: 0.5 },
  error: { color: '#A13232', fontSize: 15 },
  input: { borderWidth: 1, borderColor: '#BBC5D0', borderRadius: 5, padding: 12, fontSize: 16, color: '#263342', backgroundColor: 'white', maxWidth: 440 },
});
