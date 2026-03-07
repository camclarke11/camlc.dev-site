<script lang="ts">
	import { posts, talks } from '$lib/site-content';
</script>

<section class="route-page">
	<header class="route-header">
		<h1>Blog</h1>
		<p>Writing and talks on policy execution, structure, and systems.</p>
	</header>

	<section class="route-block">
		<p class="section-label">posts</p>
		<div class="route-list">
			{#each posts as item}
				<div class="route-item">
					<a class="route-item-title" href={item.href}>{item.title}</a>
					<div class="route-item-meta">{item.date}</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="route-block">
		<p class="section-label">talks</p>
		<div class="route-list">
			{#each talks as item}
				<div class="route-item">
					<a class="route-item-title" href={item.href}>{item.title}</a>
					<div class="route-item-meta">{item.date}</div>
				</div>
			{/each}
		</div>
	</section>
</section>
