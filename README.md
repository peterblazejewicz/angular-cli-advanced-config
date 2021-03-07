# angular-cli-advanced-config

Angular 11 CLI based project with example implementation for `externals`, custom Webpack configurations (shared, app only and tests only), TS support for Webpack, Karma. Webpack version 4.\*.

## Features

- externals configuration for `@angular/*` and `rxjs`
- custom Webpack configs for any plugin
- TypeScript support for Webpack configuration files
- TypeScript support for Karma configuration files

Details of `externals` are to be done by actual implementation.
For example this could be Rollup build that creates your projects shared dependencies bundles.
Here, just example configuration is used based on mix of Webpack configuration and `angular.json` custom setup to fetch UMD modules from custom configured assets.

## Author

@peterblazejewicz
