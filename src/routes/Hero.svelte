<script>
	import "@fontsource/bonheur-royale";
</script>

<div class="positioner">
	<header>
		<h1>Perny</h1>
		<div class="ima">
			<div>
				<h3>UI/UX Designer</h3>
			</div>
			<div>
				<h3>Software Engineer</h3>
			</div>
			<div>
				<h3>SysAdmin</h3>
			</div>
			<div>
				<h3>Entrepreneur</h3>
			</div>
		</div>

		<img
			src="/perny.png"
			alt="Perny"
			width="500"
			height="auto"
			style="image-rendering: pixelated;"
		/>
		<img
			src="/heroglow.svg"
			class="glow"
			alt="Glow"
		/>
		<div class="bottomfade" />
	</header>
</div>

<style>
	header {
		display: flex;
		align-items: center;
		flex-direction: column;
		overflow-x: hidden;
	}

	.positioner {
		position: relative;
		height: 80vh;
		overflow: visible;
	}

	h1 {
		margin-top: 12vh;
		font-size: 5rem;
		font-family: "Bonheur Royale", cursive;
		color: var(--primary);
		filter: brightness(1.2);
	}

	.ima {
		font-size: 1.3rem;
		margin-top: 2rem;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.ima > div {
		background: var(--bg-2);
		padding: 1rem;
		border-radius: 1rem;
		margin-inline: 1rem;

		max-width: 30rem;
		transition: background-color 0.2s ease-in-out;
	}

	.ima > div:hover {
		background: var(--bg-3);
	}

	.bottomfade {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 24vh;
		background: linear-gradient(180deg, rgba(33, 37, 41, 0) 0%, rgba(52, 58, 64, 1) 100%);
		z-index: 1;
	}

	img {
		position: absolute;
		bottom: 0;
		z-index: 1;
	}

	.glow {
		position: absolute;
		bottom: -5rem;
		width: 90vw;
		filter: blur(10px);
		z-index: -1;
	}
</style>
