<script>
    import { Pencil, Trash } from "@steeze-ui/heroicons";
    import { Icon } from "@steeze-ui/svelte-icon";
    import { Button } from "flowbite-svelte";

  // Define an array of user objects
  let users = [
    { name: 'Tijn', avatar: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg', email: 'email@windster.com', balance: '$320' },
    { name: 'Robin', avatar: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg', email: 'email@windster.com', balance: '$3467' },
    { name: 'Ivan', avatar: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg', email: 'email@windster.com', balance: '$67' },
    { name: 'Youri', avatar: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg', email: 'email@windster.com', balance: '$367' },
    { name: 'Doris', avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg', email: 'email@windster.com', balance: '$2367' },
  ];
</script>

<div class="max-w-2xl mx-auto">
  <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">User List</h3>

    </div>
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        {#each users as user}
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src={user.avatar} alt={user.name + ' image'}>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {user.name}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {user.email}
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <Button><Icon src={Trash} size="9h 9w"></Icon></Button>
                <Button><Icon src={Pencil} size="9h 9w"></Icon></Button>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
