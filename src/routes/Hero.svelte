<script>
</script>

<div class="positioner">
	<header>
		<div class="bottomfade" />
		<h1>Sup, I'm <span>Perny</span>! 👋</h1>
		<div class="ima">
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
			width="600"
			height="auto"
			style="image-rendering: pixelated;"
		/>
	</header>
</div>

<style>
	header {
		height: 80vh;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

    .positioner {
        position: relative;
        h
    }

	h1 {
		margin-top: 15vh;
		font-size: 5rem;
	}

	h1 > span {
		color: var(--primary);
	}

	.ima {
		font-size: 2rem;
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
		height: 10vh;
		background: linear-gradient(transparent 0%, var(--bg-1));
	}

	img {
        position: absolute;
        bottom: 0;
	}
</style>
