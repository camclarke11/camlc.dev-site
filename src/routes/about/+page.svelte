<script>
	// About page
</script>

<svelte:head>
	<title>about - camlc.dev</title>
</svelte:head>

<main>
	<h1>about</h1>
	<p>I'm Cam Clarke, a Smart Data Policy Adviser at the Department for Business and Trade. My route into government was not linear, starting with a physics degree, and each step sharpened how I handle complexity, uncertainty, and execution. I do my best work when a team needs clear decisions in a messy environment.</p>

	<h2>journey</h2>
	
	<div class="timeline">
		<article class="card">
			<span class="sub">2024 - Present</span>
			<h3>Smart Data Policy Adviser</h3>
			<p class="org sub">Department for Business and Trade</p>
			<ul>
				<li>I shape policy direction with implementation constraints visible from day one.</li>
				<li>I turn strategic goals into concrete options, dependencies, and tradeoffs.</li>
				<li>I align policy, legal, and technical perspectives before ambiguity becomes delay.</li>
			</ul>
		</article>

		<article class="card">
			<span class="sub">2022 - 2024</span>
			<h3>PSA Development Team</h3>
			<p class="org sub">Ministry of Defence</p>
			<ul>
				<li>I worked at the edge of policy, analysis, and operational constraints.</li>
				<li>I helped decision-makers and technical specialists get to shared language faster.</li>
				<li>I learned to stress-test policy ideas against real timelines and practical limits.</li>
			</ul>
		</article>

		<article class="card">
			<span class="sub">2023</span>
			<h3>Physics Graduate</h3>
			<p class="org sub">University of Surrey</p>
			<ul>
				<li>I built a strong base in structured problem-solving and evidence-led thinking.</li>
				<li>I learned to turn abstract models into clear, actionable conclusions.</li>
				<li>I developed resilience with uncertainty, iteration, and complex systems.</li>
			</ul>
		</article>
	</div>

	<h2>how I work</h2>
	<div class="principles">
		<article class="card">
			<h3>Make Complexity Usable</h3>
			<p>I break large policy questions into options people can act on immediately.</p>
		</article>
		<article class="card">
			<h3>Build Delivery Confidence</h3>
			<p>I make sure policy intent survives contact with operational reality.</p>
		</article>
		<article class="card">
			<h3>Align Mixed Teams</h3>
			<p>I create shared language across policy, legal, product, and technical stakeholders.</p>
		</article>
		<article class="card">
			<h3>Keep Decisions Evidence-Led</h3>
			<p>I use data, constraints, and user impact to support confident recommendations.</p>
		</article>
	</div>
</main>

<style>
	main {
		margin: 0 1.5rem;
		padding-bottom: 4rem;
	}

	.timeline, .principles {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 1rem;
	}

	.card {
		background: var(--bg-2);
		padding: 1.5rem;
		border-left: 2px solid var(--txt-3);
		transition: border-color 0.2s;
	}

	.card:hover {
		border-color: var(--txt);
	}

	.card h3 {
		margin: 0.5rem 0;
	}

	.card p {
		margin: 0.5rem 0;
	}

	.org {
		font-family: 'Space Mono', monospace;
	}

	ul {
		font-size: 1.125rem;
		line-height: 1.75;
		margin-top: 1rem;
		padding-left: 1.5rem;
	}

	li {
		margin: 0.5rem 0;
	}
</style>