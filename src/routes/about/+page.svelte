<script lang="ts">
	const recentBuilds = [
		'AI tools that generate learning courses from scratch',
		'data dashboards and scraping projects',
		'small web apps and experiments',
		'mapping tools for data ecosystems',
		'the occasional slightly ridiculous side project'
	];
</script>

<section class="route-page">
	<header class="route-header">
		<h1>About</h1>
		<p>
			I'm Cam Clarke - currently working in the Department for Business &amp; Trade on Smart
			Data and digital markets policy.
		</p>
	</header>

	<section class="route-block">
		<p class="section-label">current work</p>
		<div class="route-list">
			<div class="route-item">
				<div class="route-item-title">Department for Business &amp; Trade</div>
				<div class="route-item-meta">Smart Data / digital markets</div>
				<div class="route-item-copy">
					In simple terms, my job is thinking about how people should be able to access and
					move their data between services safely, and how governments can design systems that
					make that possible.
				</div>
			</div>
			<div class="route-item">
				<div class="route-item-title">Why I care about it</div>
				<div class="route-item-copy">
					I like the intersection of policy, technology, and product - the place where ideas
					turn into actual systems people use.
				</div>
			</div>
		</div>
	</section>

	<section class="route-block">
		<p class="section-label">outside work</p>
		<div class="route-list">
			{#each recentBuilds as item}
				<div class="route-item">
					<div class="route-item-copy">{item}</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="route-block">
		<p class="section-label">this site</p>
		<div class="route-list">
			<div class="route-item">
				<div class="route-item-copy">
					This site is my notebook for the things I'm building, thinking about, or quietly
					obsessing over.
				</div>
			</div>
		</div>
	</section>
</section>
