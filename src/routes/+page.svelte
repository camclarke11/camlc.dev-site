<script lang="ts">
	import { onMount } from 'svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import {
		introParagraphs,
		openSource,
		posts,
		projects,
		socialLinks,
		talks
	} from '$lib/site-content';

	let portalPage: HTMLElement;
	let stickyViewport: HTMLElement;
	let portalBoard: HTMLElement;

	let isDesktop = false;
	let prefersReducedMotion = false;
	let portalHeight = '';
	let boardTransform = 'translate3d(0px, 0, 0)';
	let progressScale = 0;
	let hoveredPreviewId: string | null = null;
	let pinnedPreviewId: string | null = null;

	let maxScroll = 0;
	let sectionTop = 0;
	let targetX = 0;
	let currentX = 0;
	let rafId = 0;

	const desktopQuery = '(min-width: 761px)';
	const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

	function isPreviewOpen(id: string) {
		return (pinnedPreviewId ?? hoveredPreviewId) === id;
	}

	function openPreview(id: string) {
		hoveredPreviewId = id;
	}

	function closePreview(id: string) {
		if (hoveredPreviewId === id) {
			hoveredPreviewId = null;
		}
	}

	function handlePreviewClick(event: MouseEvent, id: string) {
		if (pinnedPreviewId === id) {
			return;
		}

		event.preventDefault();
		pinnedPreviewId = id;
	}

	function handlePreviewFocusOut(event: FocusEvent, id: string) {
		const nextTarget = event.relatedTarget;
		if (
			nextTarget instanceof Node &&
			event.currentTarget instanceof HTMLElement &&
			event.currentTarget.contains(nextTarget)
		) {
			return;
		}

		closePreview(id);
	}

	function clamp(value: number, min: number, max: number) {
		return Math.min(max, Math.max(min, value));
	}

	function applyTransform(x: number) {
		boardTransform = `translate3d(${-x}px, 0, 0)`;
		progressScale = maxScroll > 0 ? x / maxScroll : 0;
	}

	function stopAnimation() {
		if (!rafId) return;
		cancelAnimationFrame(rafId);
		rafId = 0;
	}

	function getDocumentTop(node: HTMLElement) {
		let top = 0;
		let current: HTMLElement | null = node;

		while (current) {
			top += current.offsetTop;
			current = current.offsetParent as HTMLElement | null;
		}

		return top;
	}

	function animate() {
		const delta = targetX - currentX;
		currentX += delta * 0.11;

		if (Math.abs(delta) < 0.1) {
			currentX = targetX;
		}

		applyTransform(currentX);

		if (Math.abs(targetX - currentX) >= 0.1) {
			rafId = requestAnimationFrame(animate);
			return;
		}

		rafId = 0;
	}

	function syncFromScroll() {
		if (!isDesktop) return;

		targetX = clamp(window.scrollY - sectionTop, 0, maxScroll);

		if (prefersReducedMotion) {
			currentX = targetX;
			applyTransform(currentX);
			stopAnimation();
			return;
		}

		if (!rafId) {
			rafId = requestAnimationFrame(animate);
		}
	}

	function measure() {
		if (!portalPage || !stickyViewport || !portalBoard) return;

		isDesktop = window.matchMedia(desktopQuery).matches;
		prefersReducedMotion = window.matchMedia(reducedMotionQuery).matches;

		if (!isDesktop) {
			portalHeight = '';
			maxScroll = 0;
			sectionTop = 0;
			targetX = 0;
			currentX = 0;
			applyTransform(0);
			stopAnimation();
			return;
		}

		maxScroll = Math.max(portalBoard.scrollWidth - window.innerWidth, 0);
		sectionTop = getDocumentTop(portalPage);
		portalHeight = `${stickyViewport.offsetHeight + maxScroll}px`;
		syncFromScroll();
	}

	onMount(() => {
		const mediaQuery = window.matchMedia(desktopQuery);
		const motionQuery = window.matchMedia(reducedMotionQuery);
		const resizeObserver = new ResizeObserver(() => measure());

		resizeObserver.observe(portalBoard);
		resizeObserver.observe(stickyViewport);

		mediaQuery.addEventListener('change', measure);
		motionQuery.addEventListener('change', measure);

		measure();
		requestAnimationFrame(() => requestAnimationFrame(measure));

		return () => {
			stopAnimation();
			resizeObserver.disconnect();
			mediaQuery.removeEventListener('change', measure);
			motionQuery.removeEventListener('change', measure);
		};
	});
</script>

<svelte:window onscroll={syncFromScroll} onresize={measure} />

<section class="portal-page" bind:this={portalPage} style:height={portalHeight || undefined}>
	<div class="portal-sticky" bind:this={stickyViewport}>
		<div class="portal-guidance" aria-hidden={!isDesktop} aria-label="Scroll to move through the index">
			<div class="portal-guidance-icon" aria-hidden="true">
				<svg viewBox="0 0 40 14" fill="none">
					<path d="M2 7h24" />
					<path d="m20 2 6 5-6 5" />
					<path d="m30 2 6 5-6 5" />
				</svg>
			</div>
			<div class="portal-progress-track">
				<div class="portal-progress-bar" style:transform={`scaleX(${progressScale})`}></div>
			</div>
		</div>

		<div class="portal-viewport" class:portal-viewport-at-start={progressScale <= 0.001}>
			<div
				class="portal-board"
				class:portal-board-static={!isDesktop}
				bind:this={portalBoard}
				aria-label="Site portal"
				style:transform={isDesktop ? boardTransform : undefined}
			>
				<article class="portal-column">
					<div class="column-stack">
						<section class="column-section">
							<div class="visual-block">
								<img src="/me1.jpg" alt="Cam Clarke at a computer" />
								<div class="visual-caption">Cam Clarke</div>
							</div>
						</section>

						<section class="column-section">
							<p class="section-label">intro</p>
							<div class="mono-display">
								{#each introParagraphs as paragraph, index}
									<p>{paragraph}</p>
									{#if index < introParagraphs.length - 1}
										<br />
									{/if}
								{/each}
							</div>
						</section>

						<div class="section-rule" aria-hidden="true"></div>

						<section class="column-section">
							<p class="section-label">links</p>
							<div class="link-list">
								{#each socialLinks as link}
									<div class="link-row" data-kind={link.kind}>
										<SocialIcon kind={link.kind} />
										<a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
										<a class="link-row-value" href={link.href} target="_blank" rel="noreferrer">
											<span class="link-row-separator" aria-hidden="true">|</span>
											{link.value}
										</a>
									</div>
								{/each}
							</div>
						</section>
					</div>
				</article>

				<article class="portal-column">
					<div class="column-header">
						<span>assorted projects</span>
					</div>

					<div class="column-stack">
						<section class="column-section">
							<div class="item-list">
								{#each projects as project}
									<div
										class:item-preview-open={isPreviewOpen(`project-${project.title}`)}
										class="item item-previewable"
										role="group"
										onmouseenter={() => openPreview(`project-${project.title}`)}
										onmouseleave={() => closePreview(`project-${project.title}`)}
										onfocusin={() => openPreview(`project-${project.title}`)}
										onfocusout={(event) => handlePreviewFocusOut(event, `project-${project.title}`)}
									>
										<a
											class="item-title"
											href={project.href}
											onclick={(event) => handlePreviewClick(event, `project-${project.title}`)}
										>
											{project.title}
										</a>
										<div class="item-meta">{project.tag}</div>
										<div class="item-preview">
											<div class="item-copy">{project.summary}</div>
										</div>
									</div>
								{/each}
							</div>
						</section>
					</div>
				</article>

				<article class="portal-column">
					<div class="column-header">
						<span>posts</span>
					</div>

					<div class="column-stack">
						<section class="column-section">
							<p class="section-label">posts</p>
							<div class="item-list">
								{#each posts as post}
									<div
										class:item-preview-open={isPreviewOpen(`post-${post.title}`)}
										class="item item-previewable"
										role="group"
										onmouseenter={() => openPreview(`post-${post.title}`)}
										onmouseleave={() => closePreview(`post-${post.title}`)}
										onfocusin={() => openPreview(`post-${post.title}`)}
										onfocusout={(event) => handlePreviewFocusOut(event, `post-${post.title}`)}
									>
										<a
											class="item-title"
											href={post.href}
											onclick={(event) => handlePreviewClick(event, `post-${post.title}`)}
										>
											{post.title}
										</a>
										<div class="item-date">{post.date}</div>
										<div class="item-preview">
											<div class="item-copy">{post.preview}</div>
										</div>
									</div>
								{/each}
							</div>
						</section>
					</div>
				</article>

				<article class="portal-column">
					<div class="column-header">
						<span>talks</span>
					</div>

					<div class="column-stack">
						<section class="column-section">
							<p class="section-label">talks</p>
							<div class="item-list">
								{#each talks as talk}
									<div
										class:item-preview-open={isPreviewOpen(`talk-${talk.title}`)}
										class="item item-previewable"
										role="group"
										onmouseenter={() => openPreview(`talk-${talk.title}`)}
										onmouseleave={() => closePreview(`talk-${talk.title}`)}
										onfocusin={() => openPreview(`talk-${talk.title}`)}
										onfocusout={(event) => handlePreviewFocusOut(event, `talk-${talk.title}`)}
									>
										<a
											class="item-title"
											href={talk.href}
											onclick={(event) => handlePreviewClick(event, `talk-${talk.title}`)}
										>
											{talk.title}
										</a>
										<div class="item-date">{talk.date}</div>
										<div class="item-preview">
											<div class="item-copy">{talk.preview}</div>
										</div>
									</div>
								{/each}
							</div>
						</section>
					</div>
				</article>

				<article class="portal-column">
					<div class="column-header">
						<span>open work</span>
					</div>

					<div class="column-stack">
						<section class="column-section">
							<p class="section-label">open work</p>
							<div class="item-list">
								{#each openSource as item}
									<div
										class:item-preview-open={isPreviewOpen(`work-${item.title}`)}
										class="item item-previewable"
										role="group"
										onmouseenter={() => openPreview(`work-${item.title}`)}
										onmouseleave={() => closePreview(`work-${item.title}`)}
										onfocusin={() => openPreview(`work-${item.title}`)}
										onfocusout={(event) => handlePreviewFocusOut(event, `work-${item.title}`)}
									>
										<a
											class="item-title"
											href={item.href}
											onclick={(event) => handlePreviewClick(event, `work-${item.title}`)}
										>
											{item.title}
										</a>
										<div class="item-meta">{item.meta}</div>
										<div class="item-preview">
											<div class="item-copy">{item.summary}</div>
										</div>
									</div>
								{/each}
							</div>
						</section>
					</div>
				</article>

				<article class="portal-column">
					<div class="column-header">
						<span>contact</span>
					</div>

					<div class="column-stack">
						<section class="column-section">
							<p class="section-label">contact</p>
							<div class="item-list">
								<div class="item">
									<div class="item-title">Email</div>
									<div class="item-copy">cam.clarke@example.com</div>
								</div>
								<div class="item">
									<div class="item-title">Available for</div>
									<div class="item-copy">policy structure, interface cleanup, and writing systems</div>
								</div>
								<div class="item">
									<a class="item-title" href="/contact">Open contact page</a>
								</div>
							</div>
						</section>
					</div>
				</article>
			</div>
		</div>
	</div>
</section>
