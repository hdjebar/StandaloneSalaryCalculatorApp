import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'lu.payroll.calculator',
  appName: 'Luxembourg Payroll Calculator',
  webDir: '.',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#667eea',
      showSpinner: false
    },
    StatusBar: {
      style: 'default',
      backgroundColor: '#667eea'
    },
    Keyboard: {
      resize: 'body',
      style: 'dark'
    }
  }
};

export default config;