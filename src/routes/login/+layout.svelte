<script lang="ts">
	import { onMount } from 'svelte';
    import Login from './Login.svelte';
    import GithubLogin from './GithubLogin.svelte';

	onMount(() => {
		navigator.serviceWorker.addEventListener('controllerchange', () => {
			window.location.reload();
		});
	});
</script>

<div class="flex h-[100dvh] flex-col items-center justify-around">
	<div class="flex">
		<Login />
	</div>
	<div class="flex">
		<slot />
	</div>
</div>
