import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'playground-core',
  outputTargets: [
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: '../playground-react/lib/components/stencil-generated/',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
  extras: {
    enableImportInjection: true,
  },
};
