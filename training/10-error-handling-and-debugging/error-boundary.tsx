import { Component, type ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error) {
    console.error('Render error:', error.message);
  }

  render() {
    if (this.state.failed) {
      return (
        <View style={styles.container}>
          <Text style={styles.error}>Something went wrong while displaying this content.</Text>
          <Pressable accessibilityRole="button" style={styles.button} onPress={() => this.setState({ failed: false })}>
            <Text style={styles.buttonText}>Try again</Text>
          </Pressable>
        </View>
      );
    }
    return this.props.children;
  }
}
