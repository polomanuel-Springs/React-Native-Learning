# Running & Testing on Android and iOS

## Summary

How I run the same app in a browser, simulator, emulator or physical device.

## Simulators and emulators

For iOS, I install Xcode on macOS, complete its setup and install an iOS Simulator runtime. For Android, I install Android Studio, an Android SDK and create a virtual device.

From the project folder:

```bash
npm start
```

I press i for iOS Simulator or a for Android Emulator. I can also run npm run ios or npm run android. These scripts start Expo and open the selected target; they do not build a custom native app.

## Expo Go on a phone

I install a compatible Expo Go version and scan the QR code. On iOS, I use the Camera app; on Android, I use Expo Go. My phone and computer normally need the same Wi-Fi network. If that connection is blocked, I can try npx expo start --tunnel.

Expo Go contains a fixed set of native modules. Custom native code requires a development build.

## Development builds

When I need a custom native app, I install expo-dev-client and configure EAS Build:

```bash
npx expo install expo-dev-client
npx eas-cli@latest build:configure
```

In eas.json, I use a development profile with developmentClient: true and distribution: internal. Then I build the platform I need:

```bash
npx eas-cli@latest build --profile development --platform android
npx eas-cli@latest build --profile development --platform ios
```

For a physical iOS device, I need Apple Developer membership and register the device using npx eas-cli@latest device:create before building. I install the signed build using its installation link. A simulator build uses a separate profile with ios.simulator: true.

On Android, I install the development APK. For USB testing, I enable Developer options and USB debugging, authorize my computer and can install with adb install followed by the APK path. Wireless debugging is another option on supported devices.

Once the development build is installed:

```bash
npx expo start --dev-client
```

## Debugging on device

I shake a physical device to open the development menu. On iOS Simulator I use Cmd+D; on Android Emulator I can use Ctrl+M, or Cmd+M on macOS. Fast Refresh applies saved code changes. In a connected native development session, I press j in the terminal and read the DevTools console. A full reload can reset local component state.

## Try it

Open this example on two targets, check the platform label and press the button. Edit its final sentence and save to test Fast Refresh. Try the module 9 camera and permissions on a physical phone.

[Environment setup](https://docs.expo.dev/get-started/set-up-your-environment/)
[Development builds](https://docs.expo.dev/develop/development-builds/create-a-build/)
