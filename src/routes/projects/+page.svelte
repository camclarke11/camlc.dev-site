<script lang="ts">
	import { projects } from '$lib/site-content';
</script>

<section class="route-page">
	<header class="route-header">
		<h1>Projects</h1>
		<p>
			I tend to build small projects quickly rather than plan them for months. Some examples are
			collected here, and more will appear as I build them.
		</p>
	</header>

	<section class="route-block">
		<p class="section-label">examples</p>
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
</section>
