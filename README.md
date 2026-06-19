# Snappthis

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

In deze sprint gaat alles om de User Experience. Performance, perceived performance, loading states, feedback, alles komt hier in terug.

[Live link](https://user-experience-enhanced-website-if2q.onrender.com/snappmaps)

<img width="700" height="1508" alt="snapthis" src="https://github.com/user-attachments/assets/a4e778df-2b72-4baf-a3e2-175fb633871c" />


## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

### Loading state
Feedback voor de gebruiker is erg belangrijk. Vooral bij een interactie wat even kan duren (het uploaden van een foto naar een database). Het is daarom ook van belang dat je aan de gebruiker laat zien dat het wat aan het gebeuren is na een interactie. In dit geval is het een loading state. De gebruiker klikt op de knop, er komt een loading state, als het gelukt is krijg de gebruiker een success state, als het niet gelukt is een failure state. Zo weet de gebruiker precies wat er gaande is.

https://github.com/user-attachments/assets/f158e32b-8560-4393-861e-497221ce16d2


#### Geen client-side JS? Geen probleem!
Als de gebruiker op een of andere manier toch geen client-side JS kan gebruiken, gaat de POST op de oude manier, direct naar de server dus! Geen fancy loading state, maar het is wel functioneel.

https://github.com/user-attachments/assets/3f21d6c9-b55d-4537-8a59-4f7518b37ee9


### Performance optimized images
De content van Snappthis zijn voornamelijk foto's dit maakt het erg zwaar en kan daardoor het laden van pagina's erg langzaam maken. Gelukkig heb je methodes om dit zo veel mogelijk te drukken.

#### Methode 1:
https://github.com/MathijsN/user-experience-enhanced-website/blob/5ecf8b6528f69a3d18a9db92d975f897917283bd/views/snappmap.liquid#L120-L125
Hier zie je dat de foto's als bestands type webp krijgen, dit scheelt een hoop mb's ten opzichte van bijvoorbeeld een png.

#### Methode 2:
https://github.com/MathijsN/user-experience-enhanced-website/blob/5ecf8b6528f69a3d18a9db92d975f897917283bd/public/styles.css#L147-L150
Deze background-color zorgt voor perceived performance. Als de foto nog niet geladen is zie je wel al een ingevuld vlakje. Dit is handig voor de gebruiker omdat diegene dan weet dat daar nog wat komt.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
Deze website is gemaakt met in de basis server-side JS, hiermee ontvang en stuur je alle data. Daarna een sterke laag goede HTML, dit is de structuur van de website. Daar overheen zit een laag baseline CSS die met bijna alle browsers werkt. En daar overheen zitten leuke en fijne enhancements zoals client-side JS (loading state) en andere toevoegingen die het leuker maken, maar niet noodzakelijk zijn.

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Stap 1: **Fork de repo**
Stap 2: **Clone de code**
Stap 3: **npm install**
Stap 4: **npm run**

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
