import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { babel } from '@rollup/plugin-babel';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		react(),
		babel({
			babelrc: false,
			plugins: [
				[
					'import',
					{
						libraryName: 'antd',
						libraryDirectory: 'es',
						style: true,
					},
					'antd',
				],
			],
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			babelHelpers: 'bundled',
		}),
	],
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
		},
	},
});
