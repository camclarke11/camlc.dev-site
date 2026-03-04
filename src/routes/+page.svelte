<script>
	// Home page
</script>

<svelte:head>
	<title>camlc.dev</title>
</svelte:head>

<main>
	<div class="container">
		<div class="row">
			<h1>Cam Clarke</h1>
			<!-- Minimalist Logo Placeholder -->
			<div class="logo">
				<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated logo">
					<g><line x1="27.92" y1="150" x2="272.66" y2="150" stroke="rgb(189, 99, 238)" stroke-width="19.84" stroke-linecap="round"></line></g>
					<g><line x1="27.92" y1="150" x2="272.66" y2="150" stroke="rgb(98, 98, 238)" stroke-width="19.84" stroke-linecap="round"></line></g>
					<g><line x1="27.92" y1="150" x2="272.66" y2="150" stroke="rgb(38, 187, 217)" stroke-width="19.84" stroke-linecap="round"></line></g>
				</svg>
			</div>
		</div>

		<p>I work on Smart Data policy that works in the real world. I help teams move from broad ambition to clear decisions, practical delivery plans, and outcomes people can actually use.</p>

		<nav>
			<a class="nav" href="/about"><span class="arrow">-&gt;</span><span class="slash">/</span>about</a>
			<a class="nav" href="/projects"><span class="arrow">-&gt;</span><span class="slash">/</span>projects</a>
			<a class="nav" href="/blog"><span class="arrow">-&gt;</span><span class="slash">/</span>blog</a>
			<a class="nav" href="/contact"><span class="arrow">-&gt;</span><span class="slash">/</span>contact</a>
		</nav>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		max-height: calc(100vh - 12rem);
		margin: 0 1.5rem;
		margin-top: 4rem; /* Offset for the header that is pushed up */
	}
	.row {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}
	.logo {
		width: 3.75rem;
		height: 3.75rem;
	}
	h1 {
		font-size: 3rem;
		margin: 0;
	}
	nav {
		display: flex;
		gap: 2rem;
	}
	nav a {
		font-size: 1.5rem;
		font-family: 'Space Mono', monospace;
	}
	p {
		font-size: 1.25rem;
		margin: 1.5rem 0;
		max-width: 600px;
	}

	@media(max-width: 600px) {
		nav {
			flex-direction: column;
			gap: 1rem;
		}
		.row {
			flex-direction: column-reverse;
			gap: .5rem;
			align-items: flex-start;
		}
	}
</style>