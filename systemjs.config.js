/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/core.d.ts',
      '@angular/common': 'npm:@angular/common/common.d.ts',
      '@angular/compiler': 'npm:@angular/compiler/compiler.d.ts',
      '@angular/platform-browser': 'npm:@angular/platform-browser/platform-browser.d.ts',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/platform-browser-dynamic.d.ts',
      '@angular/router': 'npm:@angular/router/router.d.ts',
      '@angular/forms': 'npm:@angular/forms/forms.d.ts',
      '@angular/common/http': 'npm:@angular/common/common.d.ts',
      // other libraries
      'rxjs': 'npm:rxjs',
      'tslib': 'npm:tslib/tslib.js',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
