import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function Detail() {
  const { name } = useLocalSearchParams<{ name?: string | string[] }>();
  const displayName = typeof name === 'string' && name.trim() ? name : 'friend';
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Hello, {displayName}!</Text>
      <Text style={styles.text}>The name arrived through the route parameters.</Text>
      
      <Pressable style={styles.button} accessibilityRole="button" onPress={() => router.canGoBack() ? router.back() : router.replace('/')}>
        <Text style={styles.buttonText}>Go back</Text>
      </Pressable>

    </View>
  );
}
