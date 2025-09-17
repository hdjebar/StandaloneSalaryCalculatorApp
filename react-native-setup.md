# React Native Setup for Luxembourg Payroll Calculator

## Prerequisites
```bash
npm install -g @react-native-community/cli
# For iOS (macOS only)
sudo gem install cocoapods
# For Android
# Install Android Studio and SDK
```

## Create React Native Project
```bash
npx react-native init LuxembourgPayrollApp
cd LuxembourgPayrollApp
```

## Install WebView Component
```bash
npm install react-native-webview
# For iOS
cd ios && pod install && cd ..
```

## App.js Implementation
```javascript
import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://your-domain.com/index.html' }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
  webview: {
    flex: 1,
  },
});

export default App;
```

## Build Commands
```bash
# Android
npx react-native run-android

# iOS (macOS only)
npx react-native run-ios
```