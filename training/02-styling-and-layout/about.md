# Styling & Layout

## Summary

How styles, Flexbox and safe areas control the space and appearance of a screen.

## StyleSheet.create()

In React, we often use a CSS class. In standard React Native, I pass a JavaScript object through the `style` prop. `StyleSheet.create()` helps organize named styles and checks property names with TypeScript.

I write camelCase properties such as `backgroundColor`. Style arrays let me combine styles.

## Flexbox and dimensions

In a web flex container, the default direction is a row. In React Native, `flexDirection` defaults to `column`, so children normally stack vertically.

I use `justifyContent` along the main axis and `alignItems` along the cross axis. Changing direction changes those axes.

Numeric dimensions are density-independent layout units, not CSS strings like `20px` or physical screen pixels. Some properties also accept percentages. A child cannot fill useful space if its parent has no available size.

## Safe areas and notches

Keep important content away from the notch, status bar, and home indicator. With `react-native-safe-area-context`, a provider supplies safe-area information, and its `SafeAreaView` or `useSafeAreaInsets()` helps apply the appropriate spacing.

## Accessibility

An accessible label explains what a control does, a role explains what kind of control it is. An icon-only action needs a meaningful label, such as “Save profile,” rather than “Icon.”