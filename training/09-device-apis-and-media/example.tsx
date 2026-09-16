import { useState } from 'react';
import { Linking, Pressable, Text, View } from 'react-native';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import * as Clipboard from 'expo-clipboard';
import { styles } from './styles';

export default function Example() {
  const [photo, setPhoto] = useState('');
  const [message, setMessage] = useState('Choose a device feature.');
  const [busy, setBusy] = useState(false);

  async function choosePhoto(camera: boolean) {
    if (camera) {
      const permission = await ImagePicker.requestCameraPermissionsAsync();
      if (!permission.granted) {
        setMessage('Camera permission denied. You can change it in device settings.');
        return;
      }
    }
    const result = camera
      ? await ImagePicker.launchCameraAsync({ mediaTypes: ['images'], quality: 0.5 })
      : await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], quality: 0.5 });
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
      setMessage('Photo selected.');
    }
  }

  async function showLocation() {
    const permission = await Location.requestForegroundPermissionsAsync();
    if (!permission.granted) {
      setMessage('Location permission denied. You can still use the other examples.');
      return;
    }
    const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
    setMessage(`${location.coords.latitude.toFixed(4)}, ${location.coords.longitude.toFixed(4)}`);
  }

  async function run(action: () => Promise<unknown>) {
    setBusy(true);
    try {
      await action();
    } catch {
      setMessage('Could not use this feature. Check permissions and device support.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Pressable accessibilityRole="button" style={[styles.button, busy && styles.disabled]} disabled={busy} onPress={() => run(() => choosePhoto(true))}>
          <Text style={styles.buttonText}>Camera</Text>
        </Pressable>
        <Pressable accessibilityRole="button" style={[styles.button, busy && styles.disabled]} disabled={busy} onPress={() => run(() => choosePhoto(false))}>
          <Text style={styles.buttonText}>Photo library</Text>
        </Pressable>
        <Pressable accessibilityRole="button" style={[styles.button, busy && styles.disabled]} disabled={busy} onPress={() => run(showLocation)}>
          <Text style={styles.buttonText}>Location</Text>
        </Pressable>
        <Pressable accessibilityRole="button" style={[styles.button, busy && styles.disabled]} disabled={busy} onPress={() => run(async () => {
          await Clipboard.setStringAsync('Learning React Native');
          setMessage('Copied to clipboard.');
        })}>
          <Text style={styles.buttonText}>Copy text</Text>
        </Pressable>
        <Pressable accessibilityRole="button" style={[styles.button, busy && styles.disabled]} disabled={busy} onPress={() => run(() => Linking.openURL('https://reactnative.dev'))}>
          <Text style={styles.buttonText}>Open website</Text>
        </Pressable>
      </View>
      {photo !== '' && <Image source={{ uri: photo }} style={styles.image} contentFit="cover" cachePolicy="memory-disk" accessibilityLabel="Selected photo" />}
      <Text style={styles.text}>{busy ? 'Waiting for the device…' : message}</Text>
    </View>
  );
}
