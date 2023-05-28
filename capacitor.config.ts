import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.thnvn.pokemon',
  appName: 'pokemon',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
