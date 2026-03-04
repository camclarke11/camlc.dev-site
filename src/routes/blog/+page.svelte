<script>
	// Blog page
</script>

<svelte:head>
	<title>blog - camlc.dev</title>
</svelte:head>

<main>
	<div class="header">
		<h1>blog<span class="count" aria-label="3 posts">[3]</span></h1>
	</div>

	<div class="posts">
		<a class="link" href="/blog/the-future-of-smart-data-policy">
			<div class="date">10/12/2024</div>
			<h2>
				<svg viewBox="0 0 256 256" width="1.2em" height="1.2em" class="icon"><path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-32-80a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></path></svg>
				The Future of Smart Data Policy<span class="arrow">-&gt;</span>
			</h2>
			<div class="description">What current UK Smart Data progress means in practice, and where execution still needs to improve.</div>
		</a>

		<a class="link" href="/blog/from-physics-to-policy">
			<div class="date">08/05/2024</div>
			<h2>
				<svg viewBox="0 0 256 256" width="1.2em" height="1.2em" class="icon"><path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-32-80a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></path></svg>
				From Physics to Policy<span class="arrow">-&gt;</span>
			</h2>
			<div class="description">What I carried from physics into government work, and what I had to relearn quickly.</div>
		</a>

		<a class="link" href="/blog/building-this-portfolio">
			<div class="date">05/20/2024</div>
			<h2>
				<svg viewBox="0 0 256 256" width="1.2em" height="1.2em" class="icon"><path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-32-80a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></path></svg>
				Building This Portfolio<span class="arrow">-&gt;</span>
			</h2>
			<div class="description">How I rebuilt this site so the story feels more honest, human, and easier to navigate.</div>
		</a>
	</div>
</main>

<style>
	main {
		margin: 0 1.5rem;
		padding-bottom: 4rem;
	}

	.header {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.count {
		font-size: 1.25rem;
		color: var(--txt-3);
		font-family: 'Space Mono', monospace;
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.date {
		color: var(--txt-2);
		font-family: 'Space Mono', monospace;
		margin-bottom: 0.25rem;
	}

	h2 {
		margin-bottom: 0.5rem;
		font-size: 1.5rem;
	}

	.description {
		line-height: 1.5;
		color: var(--txt-2);
		margin-left: 1.5em; /* indent relative to icon */
	}

	.link {
		transition: transform 0.2s ease;
	}
	
	.link:hover {
		transform: translateX(0.5rem);
	}
</style>