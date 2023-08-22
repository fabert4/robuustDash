<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { MagnifyingGlass, XMark } from "@steeze-ui/heroicons";
    import { Icon } from "@steeze-ui/svelte-icon";
    import {
        Navbar,
        NavBrand,
        Avatar,
        Dropdown,
        Button,
        ButtonGroup,
        Input,
        DropdownItem,
    } from "flowbite-svelte";

    let search = $page.url.searchParams.get("search") ?? "";
    let loggedIn = false;

    function clearSearch() {
        search = "";
    }

    function login() {
        loggedIn = true;
        goto("/login");
    }
</script>

<Navbar color="none" class="bg-primary-600">
    <div class="flex flex-1 justify-between gap-2">
        <div class="flex flex-col justify-center">
            <div class="lg:flex">
                <NavBrand href={""}>
                    <img
                        src="https://www.robuust.com/cdn/shop/files/Robuust_Amsterdam_Logo_2-01.png?v=1616600047"
                        class="h-6 sm:h-9"
                        alt="Logo"
                    />
                </NavBrand>
            </div>
        </div>
        <div class="flex flex-col justify-center">
            <form class="lg:flex">
                <ButtonGroup>
                    <Button on:click={clearSearch}>
                        <Icon src={XMark} class="h-5 w-5" />
                    </Button>
                    <Input
                        bind:value={search}
                        placeholder="Search..."
                        size="md"
                    />
                    <Button type="submit">
                        <Icon src={MagnifyingGlass} class="h-5 w-5" />
                    </Button>
                </ButtonGroup>
            </form>
        </div>
        <div class="flex justify-center gap-2">
            <button>
                <!-- <a id="avatar-menu">Log In</a> -->
                <Avatar id="avatar-menu" on:click={() => login()} dot={{ placement: 'bottom-right', color: 'green' }} />
            </button>
            <Dropdown
                placement="bottom"
                triggeredBy="#avatar-menu"
                frameClass="z-10"
            >
                <DropdownItem><a>Settings</a></DropdownItem>
                <DropdownItem><a>Log out</a></DropdownItem>
            </Dropdown>
        </div>
    </div>
</Navbar>
