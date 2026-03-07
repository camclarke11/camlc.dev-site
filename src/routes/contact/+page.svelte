<script lang="ts">
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { socialLinks } from '$lib/site-content';
</script>

<section class="route-page">
	<header class="route-header">
		<h1>Contact</h1>
		<p>Reach out with context, constraints, and what needs to change.</p>
	</header>

	<section class="route-block">
		<p class="section-label">links</p>
		<div class="route-list">
			{#each socialLinks as item}
				<div class="route-item">
					<div class="route-item-title route-item-title-with-icon">
						<SocialIcon kind={item.kind} />
						<span>{item.label}</span>
					</div>
					<div class="route-item-meta">{item.value}</div>
					<div class="route-item-copy">
						<a href={item.href} target="_blank" rel="noreferrer">{item.href}</a>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="route-block">
		<p class="section-label">message</p>
		<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
			<label>
				Name
				<input type="text" name="name" required />
			</label>
			<label>
				Email
				<input type="email" name="email" required />
			</label>
			<label>
				Message
				<textarea name="message" rows="7" required></textarea>
			</label>
			<button type="submit">Submit -&gt;</button>
		</form>
	</section>
</section>
