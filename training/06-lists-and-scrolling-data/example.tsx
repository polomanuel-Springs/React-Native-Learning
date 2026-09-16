import { useState, type ReactNode } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from 'react-native';
import { styles } from './styles';

const topics = [
  { id: '1', name: 'View' },
  { id: '2', name: 'Text' },
  { id: '3', name: 'Image' },
  { id: '4', name: 'TextInput' },
  { id: '5', name: 'Pressable' },
  { id: '6', name: 'ScrollView' },
];

export default function Example({ header, footer }: { header?: ReactNode; footer?: ReactNode }) {
  const [items, setItems] = useState(topics.slice(0, 2));
  const [status, setStatus] = useState('ready');
  const [error, setError] = useState('');

  async function load(reset = false, simulateError = false) {
    if (status !== 'ready') return;

    setStatus(reset ? 'refreshing' : 'loading');
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      if (simulateError) throw new Error('Could not load topics.');

      const total = reset ? 2 : items.length + 2;
      setItems(topics.slice(0, total));
    } catch {
      setItems([]);
      setError('Could not load topics. Try refreshing.');
    } finally {
      setStatus('ready');
    }
  }

  return (
    <FlatList
      style={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={styles.item}>
          {item.name}
        </Text>
      )}
      refreshing={status === 'refreshing'}
      onRefresh={() => load(true)}
      ListHeaderComponent={
        <View>
          {header}
          <View style={styles.header}>
          <Text style={styles.text}>
            ScrollView renders everything. Use FlatList for long
            or growing lists.
          </Text>

          <Pressable
            accessibilityRole="button"
            style={[styles.button, (status !== 'ready') && styles.disabled]}
            disabled={status !== 'ready'}
            onPress={() => load(true)}
          >
            <Text style={styles.buttonText}>Refresh</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            style={[styles.button, (status !== 'ready') && styles.disabled]}
            disabled={status !== 'ready'}
            onPress={() => {
              setError('');
              setItems([]);
            }}
          >
            <Text style={styles.buttonText}>Try an empty list</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            style={[styles.button, (status !== 'ready') && styles.disabled]}
            disabled={status !== 'ready'}
            onPress={() => load(true, true)}
          >
            <Text style={styles.buttonText}>Try an error</Text>
          </Pressable>
          </View>
        </View>
      }
      ListEmptyComponent={
        status === 'ready' ? (
          <Text style={error ? styles.error : styles.message}>{error || 'No topics to show.'}</Text>
        ) : null
      }
      ListFooterComponent={
        <View>
        {status !== 'ready' ? (
          <ActivityIndicator />
        ) : (
          <Pressable
            accessibilityRole="button"
            style={[styles.button, (items.length === topics.length || !!error) && styles.disabled]}
            disabled={items.length === topics.length || !!error}
            onPress={() => load()}
          >
            <Text style={styles.buttonText}>Load more</Text>
          </Pressable>
        )}
        {footer}
        </View>
      }
    />
  );
}
