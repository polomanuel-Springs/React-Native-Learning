import { useState } from 'react';
import { Image, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Example() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ScrollView style={{ height: 360 }} nestedScrollEnabled contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

      <View style={styles.card}>
        <Image source={require('../../assets/study-mark.png')} style={styles.image} />
        <Text style={styles.title}>My profile</Text>
        <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} accessibilityLabel="Your name" />

        <Pressable style={styles.button} accessibilityRole="button" onPress={() => setMessage(`Hello, ${name.trim() || 'friend'}!`)}>
          <Text style={styles.buttonText}>Say hello</Text>
        </Pressable>

        <Text style={styles.text} accessibilityLiveRegion="polite">{message}</Text>
        <Text style={styles.text}>Platform: {Platform.OS}</Text>
      </View>
      
    </ScrollView>
  );
}
