<script lang="ts">
	import { page } from '$app/state';
</script>

<section class="route-page">
	<header class="route-header">
		<p class="section-label">error {page.status}</p>
		<h1>{page.status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
		<p>
			{#if page.status === 404}
				There's nothing here. It may have moved, or it may never have existed.
			{:else}
				{page.error?.message ?? 'An unexpected error occurred.'}
			{/if}
		</p>
	</header>

	<nav class="route-block">
		<p class="section-label">navigate</p>
		<div class="error-nav">
			<a class="showcase-link" href="/">Home</a>
			<a class="showcase-link" href="/projects">Projects</a>
			<a class="showcase-link" href="/blog">Writing</a>
			<a class="showcase-link" href="/contact">Contact</a>
		</div>
	</nav>
</section>
