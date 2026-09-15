import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Example() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [savedName, setSavedName] = useState('');

  function save() {
    if (name.trim().length < 2) {
      setError('Please enter at least two characters.');
      setSavedName('');
      return;
    }
    setError('');
    setSavedName(name.trim());
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <View style={styles.container}>
        <Text style={styles.title}>A simple form</Text>
        <Text style={styles.text}>Your name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="e.g. Manuel" autoCapitalize="words" returnKeyType="done" onSubmitEditing={save} accessibilityLabel="Your name" />
        {error ? <Text style={styles.error} accessibilityRole="alert">{error}</Text> : null}

        <Pressable style={styles.button} accessibilityRole="button" onPress={save}>
          <Text style={styles.buttonText}>Save name</Text>
        </Pressable>
        
        {savedName ? <Text style={styles.text} accessibilityLiveRegion="polite">Saved: {savedName}</Text> : null}
        <Text style={styles.text}>This example keeps the name in memory only.</Text>
      </View>
      
    </KeyboardAvoidingView>
  );
}
