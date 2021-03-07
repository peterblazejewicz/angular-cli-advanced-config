import { merge } from 'webpack-merge';

import commonConfig from './webpack-common.config';

import type { Configuration } from 'webpack';

const config: Configuration = merge(commonConfig);

export default config;
