import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function Example() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Open another screen</Text>
      <Text style={styles.text}>This button opens a detail screen and passes a name in the route parameters.</Text>
      
      <Pressable style={styles.button} accessibilityRole="button" onPress={() => router.push({ pathname: '/detail', params: { name: 'Manuel' } })}>
        <Text style={styles.buttonText}>Open details</Text>
      </Pressable>

    </View>
  );
}
