import { generateAssets } from '@/core/generators/generate-assets.js';
import { generateHtml } from '@/core/generators/generate-html.js';
import { Home } from '@/home/Home.js';

await generateHtml(<Home />, 'index');
await generateAssets();
