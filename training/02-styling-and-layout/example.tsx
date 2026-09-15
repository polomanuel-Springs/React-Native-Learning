import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function Example() {
  const [secondFlex, setSecondFlex] = useState(2);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sharing space</Text>
      <Text style={styles.text}>The second block gets {secondFlex} times the space of the first.</Text>

      <View style={styles.row}>
        <View style={[styles.block, { flex: 1, backgroundColor: '#D6E2EF' }]}>
          <Text style={styles.buttonText}>flex: 1</Text>
        </View>

        <View style={[styles.block, { flex: secondFlex, backgroundColor: '#DCE6DF' }]}>
          <Text style={styles.buttonText}>flex: {secondFlex}</Text>
        </View>
        
      </View>

      <Pressable style={styles.button} accessibilityRole="button" onPress={() => setSecondFlex(secondFlex === 2 ? 3 : 2)}>
        <Text style={styles.buttonText}>Change the proportion</Text>
      </Pressable>

      <Text style={styles.text}>Open styles.ts and change flexDirection from row to column.</Text>
      
    </View>
  );
}
