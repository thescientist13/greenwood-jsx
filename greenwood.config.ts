import type { Config } from '@greenwood/cli';
import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginImportJsx } from '@greenwood/plugin-import-jsx';
import { greenwoodPluginImportRaw } from '@greenwood/plugin-import-raw';

export default {
  plugins: [
    greenwoodPluginImportJsx({
      servePages: true
    }),
    greenwoodPluginImportRaw(),
    greenwoodPluginAdapterVercel({
      runtime: 'nodejs22.x'
    })
  ]
} satisfies Config;