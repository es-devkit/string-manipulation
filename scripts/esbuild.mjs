import { build } from 'esbuild';

const sharedConfig = {
  entryPoints: ['src/lib/index.mts', 'src/lib/casing/index.mts'],
  outdir: 'dist',
  bundle: true,
  minify: true,
};

build({
  ...sharedConfig,
  platform: 'node',
  outExtension: { '.js': '.cjs' },
});

build({
  ...sharedConfig,
  platform: 'neutral',
  format: 'esm',
  outExtension: { '.js': '.mjs' },
});

build({
  ...sharedConfig,
  platform: 'browser',
  format: 'iife',
});
