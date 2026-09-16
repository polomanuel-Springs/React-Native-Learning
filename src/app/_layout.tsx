import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorBoundary from '../../training/10-error-handling-and-debugging/error-boundary';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ErrorBoundary>
      <StatusBar style="dark" />
      <Stack screenOptions={{ contentStyle: { backgroundColor: '#FAFAF7' } }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="detail" options={{ title: 'Navigation example' }} />
        <Stack.Screen name="private" options={{ title: 'Private screen' }} />
      </Stack>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
