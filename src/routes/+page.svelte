<script>
    import { Alert, Button, Card, Hr } from "flowbite-svelte";
</script>

<div class="p-8">
    <Alert>
        <span class="font-medium">Info alert!</span> Uw matras heeft onderhoud nodig!
    </Alert>
</div>

<div class="grid grid-cols-3 p-4 mx-auto px-2">
    <Card img="https://www.naturemade.com/cdn/shop/articles/Blog93-Tips_on_How_to_Increase_Deep_Sleep_iStock-925672018.jpg?v=1650483356&width=1000" href="/" horizontal  class="mb-4">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Diepe Slaap</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">6 Uur, 25 Minuten</p>
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 45%"> 20%</div>
          </div>
      </Card>
      <Card img="https://media.post.rvohealth.io/wp-content/uploads/2019/07/woman-sleeping-light-bed-1200x628-facebook.jpg" href="/" horizontal  class="mb-4">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lichte Slaap</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">2 Uur, 35 Minuten</p>
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 45%"> 14%</div>
          </div>
      </Card>
      <Card img="https://static.toiimg.com/photo/62457973.cms" href="/" horizontal  class="mb-4">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wakker</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">15 Uur, 55 Minuten</p>
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 45%"> 66%</div>
          </div>
      </Card>
</div>
<div class="flex">
    <div class="pr-4 flex items-stretch">
        <Card title="Analytics">
            <b>Huidige status van uw matras:</b>
            <Hr
                divClass="inline-flex justify-center items-center w-full lg:hidden"
            />
            <h3 class="pt-4 pb-4">
                De status van uw matras is op dit moment: 
            </h3>
            <b class="pt-4 text-6xl">93%</b>
            <div id="time-remaining" />
        </Card>
    </div>

    <Card title="Wekker">
        <b>Wekker</b>
        <Hr
            divClass="inline-flex justify-center items-center w-full lg:hidden"
        />

        <h3 class="pt-4 pb-4">
            Gebruik deze wekker om de perfecte slaapduur te bereiken!
        </h3>
        <Button>Start</Button>
        <div id="time-remaining" />
        <h3 class="pt-4 pb-4">
            Nog <strong>8 uur, 34 minuten, 20 seconden</strong> resterend.
        </h3>
    </Card>


</div>
