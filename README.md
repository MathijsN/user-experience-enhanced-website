# Snappthis

Snappthis is een mobiele webapplicatie waarmee gebruikers foto's delen binnen zogenoemde snappmaps. Een gebruiker wordt uitgenodigd in een groep; die groep kan meerdere snappmaps bevatten. Een begeleider, bijvoorbeeld een docent, maakt een snappmap aan en geeft deze een thema of opdracht. Deelnemers delen hierin zelfgemaakte foto's, die dienen als inspiratie en gespreksonderwerp vanuit de echte wereld.

[Link naar de live website.](https://the-web-is-for-everyone-interactive-rhmm.onrender.com/snappmaps)

## Bescrhrijving

### Responsive

Aangezien het idee van de webapp tot nu toe alleen mobiel is, is er nog nog geen desktop design. De website is wel responsive al zitten er nog geen layout veranderingen in voor desktop.

<img width="350" height="745" alt="Screenshot 2026-04-01 at 10 05 07" src="https://github.com/user-attachments/assets/d22a19f3-fc19-43fd-a60f-4bc580a21bba" />

<img width="1480" height="739" alt="Screenshot 2026-04-01 at 10 06 35" src="https://github.com/user-attachments/assets/17db6872-9ce1-41cc-a747-25235a9d27ef" />

Maar je kan wel ve view veranderen zodat je op destkop kleinere foto's krijgt.

<img width="1477" height="742" alt="Screenshot 2026-04-01 at 10 07 47" src="https://github.com/user-attachments/assets/290ea4ef-4e4b-47b2-abe0-85546fb2aeef" />


## Gebruik

De hoofd functionaliteit van de webapp is het uploaden van snapps naar een specifieke snappmap. De website staat standaard ingesteld op de 'test' snappmap. Om foto's in deze snappmap te uploaden druk je op de groene foto knop.

<img width="1171" height="472" alt="Screenshot 2026-04-01 at 10 16 47" src="https://github.com/user-attachments/assets/6682e2dd-f8a5-4ab5-9c7e-940d652141dd" />

## Kenmerken

In dit project maak ik gebruik van ExpressJS (voor NodeJS) en LiquidJS. De hoofd functionaliteit is een POST van een foto naar de snappmap. De inhoud van het formulier (een foto) wordt doorgestuurd naar de post route die vervolgens het doorstuurd naar de database. Vervolgens halen wij uit de database de bijbehorende ID van de foto op en sturen die door naar de juiste snappmap.

#### PE Popover

Voor de view verander functie is een popover gebruikt die progressive enhanced is. Dat wilt zeggen dat als de browser geen popover ondersteund er niks zichtbaar is. De functionaliteit van de view verander functie is gemaakt met (client-side) Javascript. Ik check hier welke button geklikt is om de juiste classes te triggeren.

```js
viewButtons.forEach((button) => {
    button.addEventListener('click', ev => {

        const currentID = ev.target.id

        viewButtons.forEach(button => {
            button.className = ''
        })

        if (currentID === 'XLarge') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-Xlarge")

            ev.target.classList.add("active-view")

            viewImg.src = "/assets/Grid2White.svg"
        }
        if (currentID === 'Large') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-large")

            ev.target.classList.add("active-view")

            viewImg.src = "/assets/Grid3White.svg"
        }
        if (currentID === 'Medium') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-medium")

            ev.target.classList.add("active-view")

            viewImg.src = "/assets/Grid4White.svg"
        }
        if (currentID === 'Small') {
            grid.className = ''
            grid.classList.add("grid-view", "grid-small")

            ev.target.classList.add("active-view")

            viewImg.src = "/assets/Grid5White.svg"
        }
        if (currentID === 'List') {
            grid.className = ''
            grid.classList.add("grid-view", "list")

            ev.target.classList.add("active-view")

            viewImg.src = "/assets/ListWhite.svg"
        }
    })
})
```

#### PE Animatie
Er zit een animatie in de snappmap die gebruik maakt van `sibling-index()`. Deze is nog niet goed ondersteund en kan er voor zorgen dan de website niet goed werkt. Hiervoor heb ik **CSS Feature Detection** gebruikt. De browsers die dit al kunnen laten de animatie zijn, terwijl de browsers die dit niet ondersteunen het compleet negeren.

```
@supports (animation-delay: calc(0.1s * sibling-index())) {
    @media (prefers-reduced-motion: no-preference) {
        .snapp-image {
            animation: --scale-in;
            animation-duration: 0.2s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-delay: calc(0.05s * sibling-index());

            opacity: 0;
        }
    }
}
```

#### UI states
De hopelijk meest voorkomende UI state is de success state.

<img width="369" height="741" alt="Screenshot 2026-04-01 at 10 41 55" src="https://github.com/user-attachments/assets/4cd072ee-db2b-46a3-9123-e32b2379c05e" />

```
    if (snapResponse.ok) {
      response.redirect(303, `/snappmaps/${snappmapid}?status=succes`)
    } else {
      response.redirect(303, `/snappmaps/${snappmapid}?status=upload_failed`)
    }
```

Met door middel van deze code check ik of de upload gelukt is.

Als de upload niet gelukt is, bijvoorbeeld doordat Directus het niet doet krijg je dit scherm te zien:

<img width="361" height="741" alt="Screenshot 2026-04-03 at 11 46 41" src="https://github.com/user-attachments/assets/b16ee0f2-c8c3-458c-8fe3-6783ff9d05ee" />



## Installatie

Als je zelf aan dit project wilt werken is de eerste stap na het clonen `npm install` te doen, dit doe je in de terminal van de code editor. Hiermee zorg je er voor dat alle benodigde packages geinstalleerd worden in het project.

Wil je een nieuwe pagina?
Maak een nieuwe app.get `route` en maak een nieuwe `view` aan in de map `views`.

Test de website locaal door middel van `npm start`

## licensie

This project is licensed under the terms of the [MIT license](./LICENSE).
