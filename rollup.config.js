'use strict';

import buble from 'rollup-plugin-buble';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  input: './src/index.js',
  plugins: [
    buble(),
    uglify({}, minify)
  ],
  output: [
    {format: 'umd', file: 'dist/wordpress-admin-notifications.min.js', name: 'PemediaNotification', sourcemap: true},
    {format: 'esm', file: 'dist/wordpress-admin-notifications.es.min.js', name: 'PemediaNotification', sourcemap: true}
  ],
  watch: {
    include: ['./src/**/*']
  }
};
