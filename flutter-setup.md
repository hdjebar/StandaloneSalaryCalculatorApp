# Flutter Setup for Luxembourg Payroll Calculator

## Prerequisites
```bash
# Install Flutter SDK
# https://docs.flutter.dev/get-started/install

flutter doctor  # Check installation
```

## Create Flutter Project
```bash
flutter create luxembourg_payroll_app
cd luxembourg_payroll_app
```

## Add WebView Dependency
Add to `pubspec.yaml`:
```yaml
dependencies:
  flutter:
    sdk: flutter
  webview_flutter: ^4.4.2
  url_launcher: ^6.2.1
```

## Main App Implementation
```dart
// lib/main.dart
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Luxembourg Payroll Calculator',
      theme: ThemeData(
        primarySwatch: Colors.indigo,
        primaryColor: const Color(0xFF667eea),
      ),
      home: const WebViewScreen(),
    );
  }
}

class WebViewScreen extends StatefulWidget {
  const WebViewScreen({super.key});

  @override
  State<WebViewScreen> createState() => _WebViewScreenState();
}

class _WebViewScreenState extends State<WebViewScreen> {
  late final WebViewController controller;

  @override
  void initState() {
    super.initState();
    controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(
        NavigationDelegate(
          onProgress: (int progress) {
            // Update loading bar
          },
          onPageStarted: (String url) {},
          onPageFinished: (String url) {},
        ),
      )
      ..loadRequest(Uri.parse('https://your-domain.com/index.html'));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Luxembourg Payroll'),
        backgroundColor: const Color(0xFF667eea),
        foregroundColor: Colors.white,
      ),
      body: WebViewWidget(controller: controller),
    );
  }
}
```

## Build Commands
```bash
# Android
flutter build apk --release

# iOS (macOS only)
flutter build ios --release
```