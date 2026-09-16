import { useState } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import * as Device from 'expo-device';
import { styles } from './styles';

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Platform: {Platform.OS}</Text>
      <Text style={styles.text}>Running on: {Platform.OS === 'web' ? 'Web browser' : Device.isDevice ? 'Physical device' : 'Simulator or emulator'}</Text>
      <Text style={styles.text}>Button presses: {count}</Text>
      <Pressable accessibilityRole="button" style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Test on this device</Text>
      </Pressable>
      <Text style={styles.text}>Edit this text and save to try Fast Refresh.</Text>
    </View>
  );
}
