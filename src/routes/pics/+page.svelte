<script lang="ts">
	import { photoFrames } from '$lib/site-content';

	const photoCount = `[${String(photoFrames.length).padStart(2, '0')}]`;
	let activeFrame = $state<(typeof photoFrames)[number] | null>(null);
	let loadedFrames = $state<Record<string, boolean>>({});
	let activeIndex = $derived(activeFrame ? photoFrames.indexOf(activeFrame) : -1);
	let hasPrev = $derived(activeIndex > 0);
	let hasNext = $derived(activeIndex >= 0 && activeIndex < photoFrames.length - 1);

	const openFrame = (frame: (typeof photoFrames)[number]) => {
		activeFrame = frame;
	};

	const closeFrame = () => {
		activeFrame = null;
	};

	const goToPrev = () => {
		if (hasPrev) activeFrame = photoFrames[activeIndex - 1];
	};

	const goToNext = () => {
		if (hasNext) activeFrame = photoFrames[activeIndex + 1];
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') closeFrame();
		if (event.key === 'ArrowLeft') goToPrev();
		if (event.key === 'ArrowRight') goToNext();
	};
</script>

<svelte:head>
	<title>Pics — camlc.dev</title>
</svelte:head>

<svelte:window onkeydown={handleKeydown} />
<svelte:body class:pics-lightbox-open={activeFrame !== null} />

<section class:blurred={activeFrame !== null} class="route-page route-page-wide pics-page">
	<header class="route-header pics-header">
		<p class="section-label">photo index</p>
		<h1>
			pics <span>{photoCount}</span>
		</h1>
		<p>
			A small photo archive. Full-resolution web conversions from the original phone images,
			kept fairly close to as-found.
		</p>
	</header>

	<section class="pics-grid" aria-label="Photo grid">
		{#each photoFrames as frame}
			<figure class:pic-card-loaded={loadedFrames[frame.src]} class="pic-card">
				<button
					class="pic-button"
					type="button"
					onclick={() => {
						openFrame(frame);
					}}
					aria-label={`Open ${frame.label}`}
				>
					<img
						class="pic-media"
						src={frame.src}
						alt={frame.alt}
						loading="lazy"
						onload={() => {
							loadedFrames = { ...loadedFrames, [frame.src]: true };
						}}
					/>
				</button>
				<figcaption class="pic-meta">
					<span>{frame.label}</span>
					<span>{frame.meta}</span>
				</figcaption>
			</figure>
		{/each}
	</section>
</section>

{#if activeFrame}
	<div
		class="pic-lightbox"
		role="dialog"
		aria-modal="true"
		aria-label={`${activeFrame.label} expanded`}
		tabindex="-1"
	>
		<button class="pic-lightbox-backdrop" type="button" aria-label="Close image" onclick={closeFrame}></button>

		{#if hasPrev}
			<button class="pic-lightbox-nav pic-lightbox-prev" type="button" aria-label="Previous image" onclick={goToPrev}>
				&larr;
			</button>
		{/if}

		{#if hasNext}
			<button class="pic-lightbox-nav pic-lightbox-next" type="button" aria-label="Next image" onclick={goToNext}>
				&rarr;
			</button>
		{/if}

		<figure class="pic-lightbox-frame">
			<img class="pic-lightbox-image" src={activeFrame.src} alt={activeFrame.alt} loading="eager" />
			<figcaption class="pic-lightbox-meta">
				<div>
					<span>{activeFrame.label}</span>
					<span>{activeFrame.meta}</span>
				</div>
				<span class="pic-lightbox-counter">{activeIndex + 1} / {photoFrames.length}</span>
			</figcaption>
		</figure>
	</div>
{/if}
