<script lang="ts">
	let { data } = $props();
	let project = $derived(data.project);
	let prev = $derived(data.prev);
	let next = $derived(data.next);
</script>

<svelte:head>
	<title>{project.title} — camlc.dev</title>
</svelte:head>

<section class="route-page showcase-page">
	<nav class="showcase-breadcrumb">
		<a href="/projects">Projects</a>
		<span class="showcase-breadcrumb-sep">/</span>
		<span>{project.title}</span>
	</nav>

	<header class="showcase-page-header">
		<div class="showcase-header">
			<h1 class="showcase-title showcase-title-lg">{project.title}</h1>
			<span class="showcase-status" data-status={project.status}>{project.status}</span>
		</div>
		<div class="project-card-meta">{project.tag}</div>
		<p class="showcase-hero-summary">{project.summary}</p>
	</header>

	<div class="showcase-detail-grid">
		<div class="showcase-detail-main">
			<div class="showcase-prose">
				<h2 class="showcase-section-title">Why this exists</h2>
				<p>{project.motivation}</p>
			</div>

			<div class="showcase-prose">
				<h2 class="showcase-section-title">How it works</h2>
				{#each project.description as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>

			{#if project.features.length > 0}
				<div class="showcase-prose">
					<h2 class="showcase-section-title">What it does</h2>
					<ul class="showcase-features">
						{#each project.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>

		<aside class="showcase-detail-sidebar">
			{#if project.stack.length > 0}
				<div class="showcase-sidebar-block">
					<p class="section-label">stack</p>
					<div class="showcase-stack">
						{#each project.stack as tech}
							<span class="showcase-tag">{tech}</span>
						{/each}
					</div>
				</div>
			{/if}

			{#if project.links.length > 0}
				<div class="showcase-sidebar-block">
					<p class="section-label">links</p>
					<div class="showcase-sidebar-links">
						{#each project.links as link}
							<a
								class="showcase-link"
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								data-kind={link.kind}
							>
								{#if link.kind === 'github'}
									<svg class="showcase-link-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
										<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
									</svg>
								{:else if link.kind === 'live'}
									<svg class="showcase-link-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
										<path d="M6 10l4-4m0 0H6.5m3.5 0V9.5M14 8A6 6 0 112 8a6 6 0 0112 0z"/>
									</svg>
								{:else}
									<svg class="showcase-link-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
										<path d="M6.75 3.25h-3.5a1 1 0 00-1 1v8.5a1 1 0 001 1h8.5a1 1 0 001-1v-3.5m-5-5L14 2m0 0h-4m4 0v4"/>
									</svg>
								{/if}
								{link.label}
								<span class="showcase-link-arrow">&rarr;</span>
							</a>
						{/each}
					</div>
				</div>
			{/if}

			<div class="showcase-sidebar-block">
				<p class="section-label">status</p>
				<span class="showcase-status showcase-status-lg" data-status={project.status}>{project.status}</span>
			</div>
		</aside>
	</div>


	{#if project.lessons.length > 0}
		<div class="showcase-lessons-section">
			<h2 class="showcase-section-title">What I learned</h2>
			<div class="showcase-lessons">
				{#each project.lessons as lesson, i}
					<div class="showcase-lesson">
						<span class="showcase-lesson-index">{String(i + 1).padStart(2, '0')}</span>
						<p>{lesson}</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if prev || next}
		<nav class="showcase-nav">
			{#if prev}
				<a class="showcase-nav-link" href={`/projects/${prev.slug}`}>
					<span class="showcase-nav-direction">&larr; prev</span>
					<span class="showcase-nav-title">{prev.title}</span>
				</a>
			{:else}
				<div></div>
			{/if}
			{#if next}
				<a class="showcase-nav-link showcase-nav-link-next" href={`/projects/${next.slug}`}>
					<span class="showcase-nav-direction">next &rarr;</span>
					<span class="showcase-nav-title">{next.title}</span>
				</a>
			{/if}
		</nav>
	{/if}
</section>
