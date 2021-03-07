import type { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack-common.config';

const config: Configuration = merge(commonConfig, {
  externals: {
    rxjs: 'rxjs',
    'rxjs/operators': 'rxjs.operators',
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/common/http': 'ng.common.http',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    '@angular/compiler': 'ng.compiler',
    '@angular/animations': 'ng.animations',
    '@angular/router': 'ng.router',
    '@angular/forms': 'ng.forms',
  },
});

export default config;
