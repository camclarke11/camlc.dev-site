<script lang="ts">
	import { openSource, projects } from '$lib/site-content';
</script>

<section class="route-page">
	<header class="route-header">
		<h1>Projects</h1>
		<p>Selected work on policy structure, writing systems, and interface cleanup.</p>
	</header>

	<section class="route-block">
		<p class="section-label">selected</p>
		<div class="route-list">
			{#each projects as item}
				<div class="route-item">
					<a class="route-item-title" href={item.href}>{item.title}</a>
					<div class="route-item-meta">{item.tag}</div>
					<div class="route-item-copy">{item.summary}</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="route-block">
		<p class="section-label">open work</p>
		<div class="route-list">
			{#each openSource as item}
				<div class="route-item">
					<a class="route-item-title" href={item.href}>{item.title}</a>
					<div class="route-item-meta">{item.meta}</div>
					<div class="route-item-copy">{item.summary}</div>
				</div>
			{/each}
		</div>
	</section>
</section>
