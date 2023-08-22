<script lang="ts">
    import { Button, Card, Input, Label } from "flowbite-svelte";


    let user = [
        {
            name: "Tijn",
            birthday: "29-10-1999",
            mattressPurchaseDate: "27-07-2023",
        }
    ];

    function changePw() {
        alert("Wachtwoord is veranderd!")
    }
    function addPurchaseDate() {
        alert("Matras aankoopdatum is toegevoegd!")
    }
    function addBirthday() {
        alert("Geboortedatum is toegevoegd!")
    }

</script>

<div style="padding: 15px;">
    <Card size="lg">
    <h><strong>Gebruikersnaam:</strong></h>
    {user[0].name} <br />
    <!--    <h>Password: Grapje</h> {{user.password}} <br>-->
    <h><strong>Geboortedatum:</strong></h>
    {user[0].birthday}<br />
    <h><strong>Matras-aankoop datum:</strong></h>
    {user[0].mattressPurchaseDate} <br /> <br /> <br />
</Card>
<br>
<Card size="lg">
    <h><strong>Wachtwoord Veranderen</strong></h>
    <div>
        <Label for="pw1">Wachtwoord:</Label>
        <Input
            type="password"
            id="password1"
            name="pw1"
            placeholder="E.g. Test123"
        /><br /><br />
        <Label for="pw2">Bevestig wachtwoord:</Label>
        <Input
            type="password"
            id="password2"
            name="pw2"
            placeholder="E.g. Test123"
        /><br /><br />
        <Button
            type="submit"
            value="Bevestigen"
            on:click={changePw}
            class="btn btn-primary"
        >Bevestigen</Button>
    </div>
</Card>
    <br /> <br />
    <div id="test2">
        <Card size="lg">
        <h><strong>Matras Aankoopdatum toevoegen</strong></h>
        <br /> <br />
        <Label>Datum:</Label>
        <Input
            type="date"
            id="start"
            name="trip-start"
            value="2023-01-18"
            min="2018-01-01"
        />
        <br /> <br />
        <Button
            id="matrasaankoop"
            type="submit"
            value="Bevestigen"
            on:click={addPurchaseDate}
            class="btn btn-primary"
        >Bevestigen</Button>
        <p id="changed2" />
    </Card>
    </div>

    <br /> <br />
    <div id="test2">
        <Card size="lg">
        <h><strong>Geboortedatum toevoegen</strong></h>
        <br /> <br />
        <Label>Datum:</Label>
        <Input
            type="date"
            id="start2"
            name="trip-start"
            value="2023-01-18"
            min="2018-01-01"
        />
        <br /> <br />
        <Button
            id="geboortedatum"
            type="submit"
            value="Bevestigen"
            on:click={addBirthday}
            class="btn btn-primary"
        >Bevestigen</Button>
        <p id="changed" />
    </Card>
    </div>
    <br /> <br /> <br />
</div>
