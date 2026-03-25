<script lang="ts">
	import { writingTopics } from '$lib/site-content';
</script>

<section class="route-page">
	<header class="route-header">
		<h1>Writing</h1>
		<p>
			I write occasionally about Smart Data policy, digital markets, how data ecosystems
			actually work, and things I'm learning while building projects.
		</p>
	</header>

	<section class="route-block">
		<p class="section-label">topic index</p>
		<div class="route-list">
			{#each writingTopics as item}
				<article class="route-item" id={item.slug}>
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
					Some pieces are structured essays. Others are just notes that seemed worth writing
					down.
				</div>
			</div>
		</div>
	</section>
</section>
