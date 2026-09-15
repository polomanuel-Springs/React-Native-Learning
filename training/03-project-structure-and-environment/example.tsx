import { Text, View } from 'react-native';
import { environment } from './environment';
import { styles } from './styles';

export default function Example() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Where things belong</Text>

      <View style={styles.card}>
        <Text style={styles.text}>src/app: screens and navigation</Text>
        <Text style={styles.text}>training: my six study sections</Text>
        <Text style={styles.text}>assets: images</Text>
      </View>

      <Text style={styles.title}>Environment: {environment}</Text>
      <Text style={styles.text}>The value comes from EXPO_PUBLIC_APP_ENV, or defaults to development.</Text>
      <Text style={styles.text}>For a larger app, reusable UI can go in components, hooks in hooks, and helpers in lib.</Text>
      
    </View>
  );
}
