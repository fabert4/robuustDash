<script lang="ts">
    import { page } from '$app/stores';
    import {
        Briefcase,
        ClipboardDocumentList,
        Envelope,
        InboxStack,
        Users
    } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';

    const navigation = new Map([
        [
            'Dashboard',
            {
                icon: InboxStack,
                url: '/',
                notifications: 0
            }
        ],
        [
            'Analytics',
            {
                icon: Briefcase,
                url: '/analytics',
                notifications: 0,
            }
        ],
        [ 'Sleep Cycle', { icon: ClipboardDocumentList,  url: '/cycle',  notifications: 0 }],
        ['Settings', { icon: Envelope, url: '/settings', notifications: 0 }],
        ['Users', { icon: Users, url: '/users', notifications: 0 }]
    ]);

    $: activeUrl = $page.url.pathname;

    function isActive(active: string, url: string): boolean {
        if (url === '/') {
            return active === '' || active === '/' || active.startsWith('?') || active.startsWith('/?');
        } else {
            return active === url || active.startsWith(url + '/') || active.startsWith(url + '?');
        }
    }
</script>

<Sidebar asideClass="w-64 h-full">
    <SidebarWrapper
            class="flex flex-col justify-between"
            divClass="overflow-y-auto py-4 pr-4 bg-gray-50 rounded h-full"
    >
        <SidebarGroup>
            {#each Array.from(navigation.entries()) as nav}
                    <SidebarItem
                            label={nav[0]}
                            href={(nav[1].url)}
                            active={isActive(activeUrl, nav[1].url)}
                            spanClass="flex-1 ml-3 whitespace-nowrap"
                            activeClass="flex items-center p-3 pl-5 text-base font-medium text-primary-600 bg-primary-100 hover:bg-primary-50"
                            aClass="flex items-center p-3 pl-5 text-base font-medium text-gray-900 hover:bg-gray-100"
                    >
                        <Icon slot="icon" src={nav[1].icon} theme="outline" class="h-7 w-7" />
                        <svelte:fragment slot="subtext">
                            {#if nav[1].notifications}
								<span
                                        class="flex h-3 w-3 items-center justify-center rounded-full bg-primary-600 p-3 text-sm text-white"
                                >{nav[1].notifications}</span
                                >
                            {/if}
                        </svelte:fragment>
                    </SidebarItem>
            {/each}
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>
