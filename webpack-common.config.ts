import { DefinePlugin } from 'webpack';

import type { Configuration } from 'webpack';

const config: Configuration = {
  plugins: [
    new DefinePlugin({
      STABLE_FEATURE: JSON.stringify(true),
      EXPERIMENTAL_FEATURE: JSON.stringify(false),
    }),
  ],
};

export default config;
