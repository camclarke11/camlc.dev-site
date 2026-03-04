<script>
	import '../app.css';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<title>camlc.dev</title>
	<meta name="description" content="Cam Clarke's personal website" />
</svelte:head>

<header class:home={page.url.pathname === '/'}>
	<div class="row">
		<a class="pfp" href="/" aria-label="homepage">
			<!-- Minimalist Logo Placeholder -->
			<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated logo">
				<g><line x1="27.92" y1="150" x2="272.66" y2="150" stroke="rgb(189, 99, 238)" stroke-width="19.84" stroke-linecap="round"></line></g>
				<g><line x1="27.92" y1="150" x2="272.66" y2="150" stroke="rgb(98, 98, 238)" stroke-width="19.84" stroke-linecap="round"></line></g>
				<g><line x1="27.92" y1="150" x2="272.66" y2="150" stroke="rgb(38, 187, 217)" stroke-width="19.84" stroke-linecap="round"></line></g>
			</svg>
		</a>
		<a href="/"><h1>camlc.dev</h1></a>
	</div>
	<nav>
		<a class="nav" href="/about"><span class="arrow">-&gt;</span><span class="slash">/</span>about</a>
		<a class="nav" href="/projects"><span class="arrow">-&gt;</span><span class="slash">/</span>projects</a>
		<a class="nav" href="/blog"><span class="arrow">-&gt;</span><span class="slash">/</span>blog</a>
		<a class="nav" href="/contact"><span class="arrow">-&gt;</span><span class="slash">/</span>contact</a>
	</nav>
</header>

<div class="container">
	<div class="transition">
		{@render children()}
	</div>
</div>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 4rem;
		height: 5rem;
		overflow: hidden;
		transition: transform .1s ease;
		transform: translateY(0);
		flex-shrink: 0;
	}
	header.home {
		/* On home page, we might want to hide the header or change its style, but let's just keep it visible for now, or match refact0r's translated header */
		transform: translateY(-70%);
	}
	header .row {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}
	header .row .pfp {
		display: flex;
		width: 2rem;
		height: 2rem;
	}
	header .row h1 {
		font-size: 1.375rem;
		color: var(--txt);
		margin: 0;
	}
	header nav {
		display: flex;
		gap: 2.5rem;
	}
	header nav a {
		font-size: 1.375rem;
		font-family: 'Space Mono', monospace;
	}
	.container {
		height: 100%;
		display: grid;
	}
	.transition {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;
		min-width: 0;
	}

	@media(max-width: 850px) {
		header {
			padding: 0 1.5rem;
			gap: 1.5rem;
		}
		header nav {
			gap: 1.5rem;
		}
	}
	@media(max-width: 700px) {
		header nav {
			display: none;
		}
	}
</style>