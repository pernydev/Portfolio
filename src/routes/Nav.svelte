<script>
	import { page } from '$app/stores';

	let currentPath = $page.url.pathname;
</script>

<nav>
	<a href="/" class:active={currentPath === '/'}>Home</a>
	<a href="/projects" class:active={currentPath === '/projects'}>Projects</a>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 4rem;
	}
	a {
		margin-inline: 1rem;
		text-decoration: none;
		color: #fff;
		transition: color 0.2s ease-in-out;
	}
	a:hover {
		color: var(--primary);
	}
    a.active {
        color: var(--primary);
    }
</style>
