<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Envelope, LockClosed } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Button, ButtonGroup, Checkbox, Input, InputAddon, Spinner } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let email = '';
	let password = '';

	let error = false;
	let loading = false;

	let color: 'base' | 'red' = 'base';

	$: {
		color = error ? 'red' : 'base';
	}

	onMount(() => {
		if (window.location.search) {
			goto('/login');
		}
		if ('caches' in window) {
			caches.keys().then((keys) => {
				keys.forEach((key) => {
					if (key.startsWith('workbox-runtime')) {
						caches.delete(key);
					}
				});
			});
		}
	});

	const url = $page.url.searchParams.has('page')
		? decodeURIComponent($page.url.searchParams.get('page')!)
		: undefined;

	async function login() {
		error = false;
		loading = true;
		const res = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (res.status === 200) {
			goto('/')
		} else {
			error = true;
		}
		loading = false;
	}
</script>

<form class="flex flex-col space-y-6" on:submit|preventDefault={login}>
	<img src="https://www.robuust.com/cdn/shop/files/Robuust_Amsterdam_Logo_2-01.png?v=1616600047" width="400em" height="400em">
	<h1 class="text-center">Sign in to the Robuust Dashboard</h1>
	<ButtonGroup>
		<InputAddon>
			<Icon src={Envelope} theme="solid" class="h-5 w-5" />
		</InputAddon>
		<Input {color} bind:value={email} type="email" name="email" placeholder="Email" required />
	</ButtonGroup>
	<ButtonGroup>
		<InputAddon>
			<Icon src={LockClosed} theme="solid" class="h-5 w-5" />
		</InputAddon>
		<Input
			{color}
			bind:value={password}
			type="password"
			name="password"
			placeholder="Password"
			required
		/>
	</ButtonGroup>
	<Checkbox>Remember me</Checkbox>
	<Button class="space-x-4" type="submit">
		{#if loading}
			<Spinner class="mr-3" size="4" color="white" />
		{/if}
		Login to your account
	</Button>
</form>
