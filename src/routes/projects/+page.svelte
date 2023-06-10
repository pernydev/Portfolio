<script>
	export let data;
</script>

<div class="list">
	{#each data.projects as project}
		<div>
			<h1>{project.name}</h1>
			<p>{project.description}</p>
			<div>
				{#each project.links as link}
					<a href={link.url}>{link.name}</a>
				{/each}
				<a href="/projects/{project._id}">View More</a>
			</div>
		</div>
	{/each}
</div>

<style>
	.list {
		display: flex;
	}

	.list > div {
		background-color: var(--bg-2);
		margin: 1rem;
		padding: 1rem;

		border-radius: 1rem;

        display: flex;
        flex-direction: column;
	}

    .list > div > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

	a {
		/* Button */
		background-color: var(--bg-3);
		color: #fff;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		text-decoration: none;
		transition: background-color 0.2s ease-in-out;
	}
	a:hover {
		background-color: var(--bg-4);
	}

    .list > div h1 {
        margin-bottom: 0.5rem;
    }

    .list > div p {
        margin-bottom: 1rem;
    }


</style>
