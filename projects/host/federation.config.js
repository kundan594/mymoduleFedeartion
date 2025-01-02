const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'host',
  exposes: {
    './Store': './projects/host/src/app/store/counter.reducer.ts',
    './Actions': './projects/host/src/app/store/counter.actions.ts',
  },
  // remotes: {
  //   microApp: 'http://localhost:4201/remoteEntry.js', // URL of the micro app
  // },


  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  // shared: {
  //   '@ngrx/store': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  //   '@angular/core': { singleton: true, strictVersion: true },
  // },

  

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});



