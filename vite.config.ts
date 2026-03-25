import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		external: ['cloudflare:email']
	},
	build: {
		rollupOptions: {
			external: ['cloudflare:email']
		}
	}
});
