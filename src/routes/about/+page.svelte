<script lang="ts">
	const snapshotCards = [
		{
			title: 'Current work',
			meta: 'Department for Business & Trade',
			copy:
				'I work on Smart Data and digital markets policy, mostly thinking about how rights, incentives, and actual delivery constraints line up in practice.'
		},
		{
			title: 'What I care about',
			meta: 'Policy x product',
			copy:
				'I like the point where policy has to become an operating system: standards, APIs, governance, incentives, and the product decisions that make those abstractions real.'
		},
		{
			title: 'What this site is for',
			meta: 'Notebook',
			copy:
				'This is where I keep ongoing threads: projects, notes, half-finished ideas, and the occasional more complete write-up.'
		}
	];

	const recentBuilds = [
		'AI tools that generate learning courses from scratch',
		'data dashboards and scraping projects',
		'small web apps and experiments',
		'mapping tools for data ecosystems',
		'the occasional slightly ridiculous side project'
	];

	const workingNotes = [
		'Build something small as soon as the idea stops being legible in prose.',
		'Prefer boring systems with clear edges over clever systems with hidden failure modes.',
		'Use prototypes to test whether the structure is real, not just whether the pitch sounds convincing.'
	];
</script>

<svelte:head>
	<title>About — camlc.dev</title>
</svelte:head>

<section class="route-page">
	<header class="route-header">
		<h1>About</h1>
		<p>
			I'm Cam Clarke. I work across data, technology, and policy, and I am especially interested
			in what happens when institutional ideas meet real systems.
		</p>
	</header>

	<section class="route-block">
		<p class="section-label">snapshot</p>
		<div class="about-grid">
			{#each snapshotCards as card}
				<article class="about-card">
					<div class="about-card-meta">{card.meta}</div>
					<h2 class="about-card-title">{card.title}</h2>
					<p class="about-card-copy">{card.copy}</p>
				</article>
			{/each}
		</div>
	</section>

	<section class="route-block">
		<p class="section-label">outside work</p>
		<div class="about-list">
			{#each recentBuilds as item}
				<div class="about-list-item">{item}</div>
			{/each}
		</div>
	</section>

	<section class="route-block">
		<p class="section-label">how I tend to work</p>
		<div class="about-notes">
			{#each workingNotes as note}
				<p>{note}</p>
			{/each}
		</div>
	</section>
</section>
