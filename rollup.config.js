import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import sass from 'rollup-plugin-sass';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import visualizer from 'rollup-plugin-visualizer';

import pkg from './package.json';

export default {
  input: './src/components/marquee.js',
  external: ['./src/components/marquee.module.scss', './src/styles/globals.scss'],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [
    peerDepsExternal(),
    postcss(),
    sass({
      insert: true,
      output: true,
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    image(),
    visualizer()
  ]
};
