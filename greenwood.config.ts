import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginImportJsx } from '@greenwood/plugin-import-jsx';
import type { Config } from '@greenwood/cli';

export default {
  plugins: [
    greenwoodPluginImportJsx({
      inferredObservability: true,
    }),
    greenwoodPluginAdapterVercel({
      runtime: 'nodejs22.x'
    })
  ]
} satisfies Config;