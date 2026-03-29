<script lang="ts">
	import { projects } from '$lib/site-content';
</script>

<svelte:head>
	<title>Projects — camlc.dev</title>
</svelte:head>

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
			{#each projects as project, i}
				<a class="project-card" href={`/projects/${project.slug}`}>
					<div class="project-card-top">
						<span class="project-card-index">{String(i + 1).padStart(2, '0')}</span>
						<h2 class="project-card-title">{project.title}</h2>
						<span class="showcase-status" data-status={project.status}>{project.status}</span>
					</div>
					<div class="project-card-meta">{project.tag}</div>
					<p class="project-card-summary">{project.summary}</p>
					<div class="project-card-stack">
						{#each project.stack as tech}
							<span class="showcase-tag">{tech}</span>
						{/each}
					</div>
					<span class="project-card-arrow">→</span>
				</a>
			{/each}
		</div>
	</section>
</section>
