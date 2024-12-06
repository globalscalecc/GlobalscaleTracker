import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'

// rollup.config.mjs
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript'

const config = [
  {
    input: 'src/index.ts', // replace with your entry file
    output: [
      {
        file: 'dist/globalscale.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/globalscale.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/globalscale.tracker.js',
        format: 'umd',
        sourcemap: true,
        name: 'GlobalscaleTracker',
      },
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      typescript(),
      json(),
      terser() // minify, but only in production
    ]
  },
  {
    input: "./dist/types/index.d.ts",
    output: [{ file: "dist/globalscale.esm.d.ts", format: "es" }],
    plugins: [dts()],
  }
];

export default config;
