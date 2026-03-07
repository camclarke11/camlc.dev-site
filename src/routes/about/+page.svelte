<script lang="ts">
	import { principles } from '$lib/site-content';

	const journey = [
		{
			period: '2024 - present',
			title: 'Smart Data Policy Adviser',
			org: 'Department for Business and Trade',
			copy: 'Policy direction, implementation constraints, and decision framing.'
		},
		{
			period: '2022 - 2024',
			title: 'PSA Development Team',
			org: 'Ministry of Defence',
			copy: 'Worked across policy, analysis, and operational constraints.'
		},
		{
			period: '2023',
			title: 'Physics Graduate',
			org: 'University of Surrey',
			copy: 'Built a base in structured reasoning and evidence-led analysis.'
		}
	];
</script>

<section class="route-page">
	<header class="route-header">
		<h1>About</h1>
		<p>
			I work best where complexity needs to be made usable. My route through physics, defence, and
			business policy gave me a bias toward clarity, structure, and practical delivery.
		</p>
	</header>

	<section class="route-block">
		<p class="section-label">journey</p>
		<div class="route-list">
			{#each journey as item}
				<div class="route-item">
					<div class="route-item-title">{item.title}</div>
					<div class="route-item-meta">{item.period} / {item.org}</div>
					<div class="route-item-copy">{item.copy}</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="route-block">
		<p class="section-label">principles</p>
		<div class="route-list">
			{#each principles as item}
				<div class="route-item">
					<div class="route-item-copy">{item}</div>
				</div>
			{/each}
		</div>
	</section>
</section>
