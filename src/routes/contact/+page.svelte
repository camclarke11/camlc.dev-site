<script lang="ts">
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { socialLinks } from '$lib/site-content';
	import type { ActionData } from './$types';

	type Props = {
		form?: ActionData;
	};

	let { form }: Props = $props();
</script>

<svelte:head>
	<title>Contact — camlc.dev</title>
</svelte:head>

<section class="route-page">
	<header class="route-header">
		<h1>Contact</h1>
		<p>
			If you want to talk about data ecosystems, AI projects, policy, or interesting internet
			ideas, feel free to reach out.
		</p>
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
		{#if form?.success}
			<div class="form-status form-status-success" role="status">
				<p>{form.message}</p>
				<button class="showcase-link" type="button" onclick={() => { form = undefined; }}>Send another &rarr;</button>
			</div>
		{:else}
			<form class="contact-form" method="POST">
				{#if form?.error}
					<p class="form-status form-status-error" role="alert">{form.error}</p>
				{/if}

				<label class="contact-form-honeypot" aria-hidden="true">
					Company
					<input type="text" name="company" tabindex="-1" autocomplete="off" />
				</label>
				<label>
					Name
					<input type="text" name="name" required autocomplete="name" value={form?.values?.name ?? ''} />
				</label>
				<label>
					Email
					<input type="email" name="email" required autocomplete="email" value={form?.values?.email ?? ''} />
				</label>
				<label>
					Message
					<textarea
						name="message"
						rows="7"
						required
						placeholder="What are you building, exploring, or trying to figure out?"
					>{form?.values?.message ?? ''}</textarea>
				</label>
				<button type="submit">Send message -&gt;</button>
			</form>
		{/if}
	</section>
</section>
