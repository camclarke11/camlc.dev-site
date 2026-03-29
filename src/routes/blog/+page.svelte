<script lang="ts">
	import { writingTopics } from '$lib/site-content';
</script>

<svelte:head>
	<title>Writing — camlc.dev</title>
</svelte:head>

<section class="route-page">
	<header class="route-header">
		<h1>Writing</h1>
		<p>
			I write occasionally about Smart Data policy, digital markets, how data ecosystems
			actually work, and things I'm learning while building projects.
		</p>
	</header>

	<section class="route-block">
		<p class="section-label">status</p>
		<div class="route-callout">
			<p>
				No finished essays are live here yet. Treat this as the publishing queue: the topics I
				am actively shaping into longer notes.
			</p>
			<div class="route-callout-links">
				<a class="showcase-link" href="/projects">Browse projects &rarr;</a>
				<a class="showcase-link" href="/contact">Suggest a topic &rarr;</a>
			</div>
		</div>
	</section>

	<section class="route-block">
		<p class="section-label">topic index</p>
		<div class="route-list">
			{#each writingTopics as item}
				<article class="route-item route-item-card" id={item.slug}>
					<a class="route-item-title" href={item.href}>{item.title}</a>
					<div class="route-item-meta">{item.meta}</div>
					<div class="route-item-copy">{item.summary}</div>
					<div class="route-item-copy">{item.focus}</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="route-block">
		<p class="section-label">format</p>
		<div class="route-list">
			<div class="route-item">
				<div class="route-item-copy">
					Some pieces will become structured essays. Others will probably stay as shorter notes
					or annotated links once I have something worth publishing.
				</div>
			</div>
		</div>
	</section>
</section>
