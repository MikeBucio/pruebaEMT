// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  production: false,
  hmr: true,
  version: env.npm_package_version + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES'],
  firebaseConfig: {
    apiKey: 'AIzaSyCNLW8eXLSu6tpl2mt7VTsuyR91PzffnTM',
    authDomain: 'numerosm-1f94a.firebaseapp.com',
    databaseURL: 'https://numerosm-1f94a.firebaseio.com',
    projectId: 'numerosm-1f94a',
    storageBucket: 'numerosm-1f94a.appspot.com',
    messagingSenderId: '857480746060',
    appId: '1:857480746060:web:fffd6271d487ec297e50e9',
    measurementId: 'G-ZTYHL922JK',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
