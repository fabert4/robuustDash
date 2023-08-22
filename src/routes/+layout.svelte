<script>
    import "../app.css";
    import Sidebar from "./Sidebar.svelte";
    import Topbar from "./Topbar.svelte";
</script>

<div class="flex h-[100dvh] flex-col bg-gray-200">
    <Topbar />
    <div class="flex flex-1 overflow-auto">
        <div class="flex-col">
            <Sidebar />
        </div>
        <main
            class="mx-auto flex flex-1 flex-col gap-2 overflow-auto px-1 py-2 lg:px-8 lg:py-8"
        >
            <slot />
        </main>
    </div>
</div>
