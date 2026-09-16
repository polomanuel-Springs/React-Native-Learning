import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export function addOne(value: number) {
  return value + 1;
}

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Pressable accessibilityRole="button" style={styles.button} onPress={() => setCount(addOne(count))}>
        <Text style={styles.buttonText}>Add one</Text>
      </Pressable>
    </View>
  );
}
