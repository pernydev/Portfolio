<script>
	// @ts-nocheck

	export let data;
	const technologies = {
		svelte: {
			name: 'Svelte',
			color: '#ff3e00'
		},
		node: {
			name: 'Node.js',
			color: '#339933'
		},
		express: {
			name: 'Express',
			color: '#000000'
		},
		mongo: {
			name: 'MongoDB',
			color: '#47a248'
		},
		react: {
			name: 'React',
			color: '#61dafb'
		},
		next: {
			name: 'Next.js',
			color: '#404040'
		},
		spotify: {
			name: 'Spotify API',
			color: '#1DB954'
		},
		discord: {
			name: 'Discord API',
			color: '#7289DA'
		}
	};
</script>

<div class="container">
	<h1>{data.project.name}</h1>

	<br />
	{#each data.project.tech as tech}
		<a class="tech" style="--tech-color: {technologies[tech].color};" href="/projects?tech={tech}"
			>{technologies[tech].name}</a
		>
	{/each}
</div>

<style>
	.container {
		padding-inline: 4vw;
	}

	a.tech {
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		margin-inline: 0.5rem;
		color: #fff;

		background-color: var(--tech-color);

		transition: background-color 0.2s ease-in-out;
		box-shadow: 0 3px 25px var(--tech-color);
	}

    h1 {
        font-size: 2.5rem;
    }
</style>
