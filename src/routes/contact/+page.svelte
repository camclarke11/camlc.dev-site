<script>
	// Contact page
</script>

<svelte:head>
	<title>contact - camlc.dev</title>
</svelte:head>

<main>
	<h1>contact</h1>
	<p>ways to get in touch.</p>

	<div class="info">
		<svg viewBox="0 0 256 256" width="1.2em" height="1.2em" class="icon"><path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"></path></svg>
		email <span class="sub">-&gt;</span> <a href="mailto:cam.clarke@example.com" class="external">cam.clarke@example.com<span class="arrow">/&gt;</span></a>
	</div>

	<div class="info">
		<svg viewBox="0 0 256 256" width="1.2em" height="1.2em" class="icon"><path fill="currentColor" d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.8 43.8 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.8 43.8 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.7 41.7 0 0 1 7 22.52Z"></path></svg>
		github <span class="sub">-&gt;</span> <a href="https://github.com/camclarke11" class="external">camclarke11<span class="arrow">/&gt;</span></a>
	</div>
	
	<div class="info">
		<svg viewBox="0 0 16 16" width="1.2em" height="1.2em" class="icon"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.473 0 16 .513 16 1.146v13.708c0 .633-.527 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 13.394V6.169H2.542v7.225h2.401zM3.743 5.182c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.251c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193V6.169H6.542v7.225h2.109z"/></svg>
		linkedin <span class="sub">-&gt;</span> <a href="https://linkedin.com/in/camclarke" class="external">camclarke<span class="arrow">/&gt;</span></a>
	</div>

	<br><br>

	<h3>contact form</h3>
	<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
		<input type="text" name="name" placeholder="name" required>
		<input type="email" name="email" placeholder="email (if you want a reply)" required>
		<textarea name="message" placeholder="your message..." required rows="4"></textarea>
		<button type="submit">submit -&gt;</button>
	</form>
</main>

<style>
	main {
		margin: 0 1.5rem;
		padding-bottom: 4rem;
	}

	.info {
		font-size: 1.25rem;
		margin: 1rem 0;
		font-family: 'Space Mono', monospace;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		max-width: 500px;
	}

	input, textarea {
		background: transparent;
		border: none;
		border-bottom: 2px solid var(--txt-3);
		color: var(--txt);
		font-family: 'Space Mono', monospace;
		font-size: 1.125rem;
		padding: 0.5rem 0;
		resize: vertical;
		transition: border-color 0.2s;
	}

	input:focus, textarea:focus {
		outline: none;
		border-bottom-color: var(--txt);
	}

	button {
		align-self: flex-start;
		background: var(--txt-0);
		color: var(--bg);
		padding: 0.75rem 1.5rem;
		font-family: 'Space Mono', monospace;
		font-weight: bold;
		font-size: 1.125rem;
		border-radius: 4px;
		transition: background-color 0.2s;
	}

	button:hover {
		background: var(--txt);
	}
</style>