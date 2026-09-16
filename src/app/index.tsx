import Example1 from '../../training/01-core-components-and-rendering/example';
import Example2 from '../../training/02-styling-and-layout/example';
import Example3 from '../../training/03-project-structure-and-environment/example';
import Example4 from '../../training/04-forms-and-input/example';
import Example5 from '../../training/05-navigation/example';
import Example6 from '../../training/06-lists-and-scrolling-data/example';
import Example7 from '../../training/07-networking-and-data-fetching/example';
import Example8 from '../../training/08-local-storage-and-auth-persistence/example';
import Example9 from '../../training/09-device-apis-and-media/example';
import Example10 from '../../training/10-error-handling-and-debugging/example';
import Example11 from '../../training/11-performance-and-animation/example';
import Example12 from '../../training/12-testing/example';
import Example13 from '../../training/13-running-and-testing-on-android-and-ios/example';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Example6 header={<>
        <Text style={styles.heading}>React Native practice</Text>
        <Text style={styles.intro}>My examples and notes · Sections 1–13</Text>
        <Text style={styles.section}>1. Core Components &amp; Rendering</Text>
        <Text style={styles.summary}>How React Native displays a screen using native components instead of HTML.</Text>
        <Example1 />
        <Text style={styles.notes}>Notes: View groups content, Text displays it, and TextInput accepts typing. Pressable handles a press; Platform.OS identifies the runtime.</Text>
        <Text style={styles.section}>2. Styling &amp; Layout</Text>
        <Text style={styles.summary}>How styles, Flexbox and safe areas control the space and appearance of a screen.</Text>
        <Example2 />
        <Text style={styles.notes}>Notes: Positive flex values share available space by proportion. Changing flexDirection changes the axis; StyleSheet keeps styles separate from content.</Text>
        <Text style={styles.section}>3. Project Structure &amp; Environment</Text>
        <Text style={styles.summary}>How project folders, environment values and development tools keep code organized.</Text>
        <Example3 />
        <Text style={styles.notes}>Notes: Routes belong in src/app. Examples stay in training. Public environment values are configuration, not secrets.</Text>
        <Text style={styles.section}>4. Forms &amp; Input</Text>
        <Text style={styles.summary}>How to read user input, manage its value and show useful validation messages.</Text>
        <Example4 />
        <Text style={styles.notes}>Notes: A controlled input reads its value from state. A change updates that state; validation decides whether the value is acceptable.</Text>
        <Text style={styles.section}>5. Navigation</Text>
        <Text style={styles.summary}>How screens connect, receive parameters and let the user return to the previous screen.</Text>
        <Example5 />
        <Text style={styles.notes}>Notes: router.push opens a route. Parameters carry small values, and router.back returns to the previous screen.</Text>
        <Text style={styles.section}>6. Lists &amp; Scrolling Data</Text>
        <Text style={styles.summary}>How to display data with FlatList and handle pagination, refreshing, empty results and errors.</Text>
      </>} footer={<>
        <Text style={styles.section}>7. Networking &amp; Data Fetching</Text>
        <Text style={styles.summary}>How I request data and handle loading, errors and cached results.</Text>
        <Example7 />
        <Text style={styles.section}>8. Local Storage &amp; Auth Persistence</Text>
        <Text style={styles.summary}>How I keep preferences and restore a demo session after reopening the app.</Text>
        <Example8 />
        <Text style={styles.section}>9. Device APIs &amp; Media</Text>
        <Text style={styles.summary}>How I request access to device features and display a selected photo.</Text>
        <Example9 />
        <Text style={styles.section}>10. Error Handling &amp; Debugging</Text>
        <Text style={styles.summary}>How I show useful errors and investigate problems without losing the whole page.</Text>
        <Example10 />
        <Text style={styles.section}>11. Performance &amp; Animation</Text>
        <Text style={styles.summary}>How I animate a view and respond to a simple drag gesture.</Text>
        <Example11 />
        <Text style={styles.section}>12. Testing</Text>
        <Text style={styles.summary}>How I check a function, a rendered component and a button interaction.</Text>
        <Example12 />
        <Text style={styles.section}>13. Running &amp; Testing on Android and iOS</Text>
        <Text style={styles.summary}>How I run the same app in a browser, simulator, emulator or physical device.</Text>
        <Example13 />
      </>} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FAFAF7' },
  heading: { fontSize: 28, fontWeight: '700', color: '#263342', marginTop: 12 },
  intro: { fontSize: 15, color: '#657080', marginTop: 8 },
  section: { fontSize: 21, fontWeight: '600', color: '#314F70', marginTop: 36, paddingTop: 20, borderTopWidth: 1, borderTopColor: '#DDE1E5' },
  summary: { fontSize: 16, lineHeight: 24, color: '#596575', marginTop: 8, marginBottom: 20 },
  notes: { fontSize: 14, lineHeight: 22, color: '#596575', marginTop: 8, marginBottom: 8, fontStyle: 'italic' },
});
