<script lang="ts">
	import '@fontsource-variable/geist-mono';
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	let { children } = $props();
	let dividerDirection = $state<'forward' | 'reverse'>('forward');

	const navItems = [
		{ href: '/', label: 'home' },
		{ href: '/about', label: 'about' },
		{ href: '/projects', label: 'projects' },
		{ href: '/blog', label: 'blog' },
		{ href: '/pics', label: 'pics' },
		{ href: '/contact', label: 'contact' }
	];

	onMount(() => {
		let lastPointerX = 0;
		const handlePointerMove = (event: PointerEvent) => {
			if (lastPointerX === 0) {
				lastPointerX = event.clientX;
				return;
			}

			const deltaX = event.clientX - lastPointerX;
			if (Math.abs(deltaX) > 2) {
				dividerDirection = deltaX > 0 ? 'forward' : 'reverse';
			}

			lastPointerX = event.clientX;
		};

		window.addEventListener('pointermove', handlePointerMove, { passive: true });

		return () => {
			window.removeEventListener('pointermove', handlePointerMove);
		};
	});
</script>

<svelte:head>
	<title>camlc.dev</title>
	<link rel="icon" href="/logo.png" />
	<link rel="apple-touch-icon" href="/logo.png" />
	<meta
		name="description"
		content="Cam Clarke's site on policy, systems, and interface work."
	/>
</svelte:head>

<svelte:body
	class:portal-route={page.url.pathname === '/'}
	class:standard-route={page.url.pathname !== '/'}
	class:divider-forward={dividerDirection === 'forward'}
	class:divider-reverse={dividerDirection === 'reverse'}
/>

<div class="site-shell">
	<header class="site-header">
		<a class="brand" href="/" aria-label="Homepage">
			<img class="brand-mark" src="/logo.png" alt="" aria-hidden="true" />
			<span>
				<span class="brand-name">camlc.dev</span>
				<span class="brand-note"> policy / systems / interface</span>
			</span>
		</a>

		<nav class="primary-nav" aria-label="Primary">
			{#each navItems as item}
				<a class:active={page.url.pathname === item.href} class="nav-link" href={item.href}>
					{item.label}
				</a>
			{/each}
		</nav>
	</header>

	<div class="site-view">
		{@render children()}
	</div>
</div>
