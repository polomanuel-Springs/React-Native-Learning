# Performance & Animation

## Summary

How I animate a view and respond to a simple drag gesture.

## JS and UI threads

JavaScript runs my component logic and event handlers. Native UI work happens on the UI thread. Long synchronous JavaScript work can delay interactions. In the opacity example, useNativeDriver sends the animation to native so it can keep running without a JavaScript update for each frame.

## Gestures and animation

Animated.Value holds opacity and Animated.timing changes it over time. PanResponder reads a sideways drag and moves the square. Releasing it resets the position. This simple gesture uses JavaScript; Gesture Handler and Reanimated provide tools for more demanding interactions on the UI thread.

## FlatList performance

I use stable keys, small rows and appropriately sized images. I can tune initialNumToRender and windowSize after measuring. getItemLayout helps when row sizes are known. I avoid wrapping a vertical FlatList in a vertical ScrollView. I only add memoization when repeated rendering is a measured problem.

## Try it

Drag the square sideways, release it, and press Animate opacity. Change duration from 400 to 800 to compare the speed. Test performance in a release build because development adds overhead.

[Animated reference](https://reactnative.dev/docs/animated)
