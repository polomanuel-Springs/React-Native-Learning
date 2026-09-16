import { useEffect, useState } from 'react';
import { Platform, Pressable, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';
import { styles } from './styles';

export default function Example() {
  const [name, setName] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    async function restore() {
      try {
        setName((await AsyncStorage.getItem('learning-name')) ?? '');
        if (Platform.OS !== 'web') setToken(await SecureStore.getItemAsync('learning-token'));
      } catch {
        setMessage('Could not restore saved data.');
      } finally {
        setBusy(false);
      }
    }
    restore();
  }, []);

  async function saveName() {
    try {
      await AsyncStorage.setItem('learning-name', name);
      setMessage('Name saved. Reload the app to check it.');
    } catch {
      setMessage('Could not save the name.');
    }
  }

  async function toggleLogin() {
    setBusy(true);
    try {
      if (token) {
        await SecureStore.deleteItemAsync('learning-token');
        setToken(null);
      } else {
        await SecureStore.setItemAsync('learning-token', 'demo-token');
        setToken('demo-token');
      }
      setMessage('Demo session updated.');
    } catch {
      setMessage('Could not update the session.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Your name" accessibilityLabel="Your name" />
      <Pressable accessibilityRole="button" style={[styles.button, busy && styles.disabled]} disabled={busy} onPress={saveName}>
        <Text style={styles.buttonText}>Save name</Text>
      </Pressable>
      <Text style={styles.text}>Demo login: {token ? 'Signed in' : 'Signed out'}</Text>
      <Text style={styles.text}>This example uses a fake token. Secure login persistence runs on Android and iOS.</Text>
      <View style={styles.buttons}>
        <Pressable accessibilityRole="button" style={[styles.button, (busy || Platform.OS === 'web') && styles.disabled]} disabled={busy || Platform.OS === 'web'} onPress={toggleLogin}>
          <Text style={styles.buttonText}>{token ? 'Log out' : 'Demo login'}</Text>
        </Pressable>
        {token && <Pressable accessibilityRole="button" style={styles.button} onPress={() => router.push('/private')}>
          <Text style={styles.buttonText}>Open private screen</Text>
        </Pressable>}
      </View>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}
