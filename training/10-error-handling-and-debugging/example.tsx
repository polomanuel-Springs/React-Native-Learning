import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import ErrorBoundary from './error-boundary';
import { styles } from './styles';

function ErrorPractice() {
  const [crash, setCrash] = useState(false);
  const [error, setError] = useState('');

  if (crash) throw new Error('Practice render error');

  async function failRequest() {
    try {
      await Promise.reject(new Error('Practice request failure'));
    } catch {
      setError('The request failed. You can keep using the screen.');
    }
  }

  return (
    <View style={styles.container}>
      <Pressable accessibilityRole="button" style={styles.button} onPress={failRequest}>
        <Text style={styles.buttonText}>Try a request error</Text>
      </Pressable>
      <Pressable accessibilityRole="button" style={styles.button} onPress={() => setCrash(true)}>
        <Text style={styles.buttonText}>Try a render error</Text>
      </Pressable>
      <Pressable accessibilityRole="button" style={styles.button} onPress={() => console.log('Module 10: button pressed')}>
        <Text style={styles.buttonText}>Write a log</Text>
      </Pressable>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

export default function Example() {
  return <ErrorBoundary><ErrorPractice /></ErrorBoundary>;
}
