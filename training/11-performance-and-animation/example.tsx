import { useRef } from 'react';
import { Animated, PanResponder, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function Example() {
  const opacity = useRef(new Animated.Value(1)).current;
  const position = useRef(new Animated.ValueXY()).current;
  const gesture = useRef(PanResponder.create({
    onMoveShouldSetPanResponder: (_, movement) => Math.abs(movement.dx) > 5,
    onPanResponderMove: (_, movement) => position.setValue({ x: movement.dx, y: 0 }),
    onPanResponderRelease: () => position.setValue({ x: 0, y: 0 }),
    onPanResponderTerminate: () => position.setValue({ x: 0, y: 0 }),
  })).current;

  function animate() {
    Animated.sequence([
      Animated.timing(opacity, { toValue: 0.2, duration: 400, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Drag the square sideways. Release it to return it to the start.</Text>
      <View style={styles.track}>
        <Animated.View {...gesture.panHandlers} style={[styles.box, { opacity, transform: position.getTranslateTransform() }]} />
      </View>
      <Pressable accessibilityRole="button" style={styles.button} onPress={animate}>
        <Text style={styles.buttonText}>Animate opacity</Text>
      </Pressable>
    </View>
  );
}
