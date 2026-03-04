<script>
	// Projects page
</script>

<svelte:head>
	<title>projects - camlc.dev</title>
</svelte:head>

<main>
	<div class="header">
		<h1>projects<span class="count" aria-label="3 projects">[3]</span></h1>
	</div>

	<div class="posts">
		<a class="link" href="/projects/smart-data-policy">
			<h2>
				<svg viewBox="0 0 256 256" width="1.2em" height="1.2em" class="icon"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"></path></svg>
				Smart Data Policy Framework<span class="arrow">-&gt;</span>
			</h2>
			<div class="description">Built a practical framework for Smart Data decisions: scheme scope, safeguards, interoperability needs, and phased implementation choices.</div>
		</a>

		<a class="link" href="/projects/portfolio">
			<h2>
				<svg viewBox="0 0 256 256" width="1.2em" height="1.2em" class="icon"><path fill="currentColor" d="M69.12 94.15L28.5 128l40.62 33.85a8 8 0 1 1-10.24 12.29l-48-40a8 8 0 0 1 0-12.29l48-40a8 8 0 0 1 10.24 12.3m176 27.7l-48-40a8 8 0 1 0-10.24 12.3L227.5 128l-40.62 33.85a8 8 0 1 0 10.24 12.29l48-40a8 8 0 0 0 0-12.29m-82.39-89.37a8 8 0 0 0-10.25 4.79l-64 176a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 96 224a8 8 0 0 0 7.52-5.27l64-176a8 8 0 0 0-4.79-10.25"></path></svg>
				Personal Portfolio Platform<span class="arrow">-&gt;</span>
			</h2>
			<div class="description">Designed and built this site to tell a clearer story about my work, with tighter structure, stronger copy, and better user flow.</div>
		</a>

		<a class="link" href="/projects/physics-research">
			<h2>
				<svg viewBox="0 0 256 256" width="1.2em" height="1.2em" class="icon"><path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-32-80a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></path></svg>
				Physics Research Track<span class="arrow">-&gt;</span>
			</h2>
			<div class="description">Research work that shaped how I handle uncertainty, structure analysis, and make evidence-backed recommendations.</div>
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