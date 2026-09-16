import { useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

type Post = { id: number; title: string };

export default function Example() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  async function loadPost(refresh = false) {
    if (loading) return;
    if (post && !refresh) {
      setMessage('Using the cached post.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) throw new Error('Request failed');
      const data: Post = await response.json();
      setPost(data);
      setMessage('Loaded from the internet.');
    } catch {
      setError('Could not load the post. Check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{post?.title ?? 'No post loaded yet.'}</Text>
      <View style={styles.buttons}>
        <Pressable accessibilityRole="button" style={[styles.button, loading && styles.disabled]} disabled={loading} onPress={() => loadPost()}>
          <Text style={styles.buttonText}>Load post</Text>
        </Pressable>
        <Pressable accessibilityRole="button" style={[styles.button, loading && styles.disabled]} disabled={loading} onPress={() => loadPost(true)}>
          <Text style={styles.buttonText}>Refetch</Text>
        </Pressable>
      </View>
      {loading && <ActivityIndicator />}
      {error ? <Text style={styles.error}>{error}</Text> : <Text style={styles.text}>{message}</Text>}
    </View>
  );
}
