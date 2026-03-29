<script lang="ts">
	import '@fontsource-variable/geist-mono';
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { socialLinks } from '$lib/site-content';

	let { children } = $props();
	let dividerDirection = $state<'forward' | 'reverse'>('forward');
	let viewEl = $state<HTMLElement | null>(null);

	const navItems = [
		{ href: '/', label: 'home' },
		{ href: '/about', label: 'about' },
		{ href: '/projects', label: 'projects' },
		{ href: '/blog', label: 'writing' },
		{ href: '/pics', label: 'pics' },
		{ href: '/contact', label: 'contact' }
	];

	function isActive(pathname: string, href: string): boolean {
		if (href === '/') return pathname === '/';
		return pathname === href || pathname.startsWith(href + '/');
	}

	beforeNavigate(() => {
		if (viewEl) viewEl.classList.add('view-exit');
	});

	afterNavigate(({ from, to }) => {
		if (from && to && from.url.pathname !== to.url.pathname) {
			window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
		}

		if (viewEl) {
			viewEl.classList.remove('view-exit');
			viewEl.classList.add('view-enter');
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					if (viewEl) viewEl.classList.remove('view-enter');
				});
			});
		}
	});

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
	<link rel="icon" href="/logo.png" />
	<link rel="apple-touch-icon" href="/logo.png" />
	<meta
		name="description"
		content="Cam Clarke's site on data, technology, policy, and open ecosystems."
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
				<span class="brand-note"> data / technology / policy</span>
			</span>
		</a>

		<nav class="primary-nav" aria-label="Primary">
			{#each navItems as item}
				<a class:active={isActive(page.url.pathname, item.href)} class="nav-link" href={item.href} aria-current={isActive(page.url.pathname, item.href) ? 'page' : undefined}>
					{item.label}
				</a>
			{/each}
		</nav>
	</header>

	<div class="site-view" bind:this={viewEl}>
		{@render children()}
	</div>

	<footer class="site-footer">
		<div class="site-footer-inner">
			<div class="site-footer-copy">camlc.dev</div>
			<nav class="site-footer-links" aria-label="Footer">
				<a href="/contact">contact</a>
				{#each socialLinks as link}
					<a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
						{link.label.toLowerCase()}
					</a>
				{/each}
			</nav>
		</div>
	</footer>
</div>
