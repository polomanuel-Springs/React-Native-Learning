import { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, Text, View } from 'react-native';
import { Redirect } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { styles } from './styles';

export default function PrivateScreen() {
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function loadProfile() {
      try {
        const token = Platform.OS === 'web' ? null : await SecureStore.getItemAsync('learning-token');
        if (!token) {
          setStatus('signed-out');
          return;
        }
        const headers = { Authorization: `Bearer ${token}` };
        const profile = await demoRequest(headers);
        setMessage(`Welcome, ${profile.name}. The demo request included your token.`);
        setStatus('ready');
      } catch {
        setStatus('signed-out');
      }
    }
    loadProfile();
  }, []);

  if (status === 'loading') return <ActivityIndicator />;
  if (status === 'signed-out') return <Redirect href="/" />;

  return <View style={[styles.container, { padding: 20 }]}><Text style={styles.text}>{message}</Text></View>;
}

async function demoRequest(headers: { Authorization: string }) {
  if (headers.Authorization !== 'Bearer demo-token') throw new Error('Unauthorized');
  return { name: 'Student' };
}
