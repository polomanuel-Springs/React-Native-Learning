# Core Components & Rendering

## Summary

How React Native displays a screen using native components instead of HTML and DOM.

## How rendering differs from React 

In React, I can describe the interface with JSX or TSX and React DOM updates HTML elements in the browser. In React Native on iOS and Android, I describe the interface with React components, but the renderer updates native views. The native screen is not an HTML page inside a browser.

## Core components

These are similar responsibilities, not identical APIs or automatic tag replacements.

| In React                           | In React Native            | What I use it for                         |
| ---------------------------------- | -------------------------- | ----------------------------------------- |
| `div`                              | `View`                     | Group content into a container.           |
| `p` / `span`                       | `Text`                     | Display words and numbers.                |
| `img`                              | `Image`                    | Display a picture.                        |
| `input`                            | `TextInput`                | Let the user enter text.                  |
| `button` with `onClick`            | `Pressable` with `onPress` | Respond to a press.                       |
| A container with scrolling enabled | `ScrollView`               | Scroll through content that does not fit. |

### View and Text

`View` it's used to organize a card, and `Text` for its title or description. Unlike an HTML `div`, a native `View` cannot directly contain a bare text string; I wrap the text in `Text`.

### Image

`Image` it's used for pictures in genral. A common React Native pattern uses `source` with a local asset or a URI instead of an HTML `img` with `src`.

### TextInput

Use `TextInput` for editable text. A `Text` component only displays content.

### Pressable

`Pressable` works as a interactive area and place visible content, such as `Text`, inside it. `onPress` handles the action. It does not supply a finished button design.

### ScrollView

We use `ScrollView` when a short screen needs scrolling. It renders all its children, so adding many children has a cost of performance.

## iOS, Android, and Platform

Sharing code does not guarantee identical appearance or behavior. Native controls and supported properties can differ between iOS and Android. For example, `Pressable` supports an Android ripple effect.

I use `Platform.OS` to identify the target: `ios` or `android` on native, and `web` in this project's browser version. `Platform.select()` lets me choose a value for each platform and provide a fallback.
