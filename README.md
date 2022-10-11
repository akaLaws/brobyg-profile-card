# Profile Card

et 2 x 5 lektioner projekt målrettet introduktionen af webudvikling. 
Projektet foregår som en Code-Along og viser HTML, CSS og JavaScript. 
Derudover gives der mulighed for at customize produktet gennem introduktion til [fontawesome](https://fontawesome.com/), [CSS animate library](https://animate.style/), [google fonts](https://fonts.google.com/) mm. 


Alternative baggrunde kan laves/ses på [Gradient generator](https://cssgradient.io/gradient-backgrounds/). CSSen kan kopieres ind i `body{}` i CSS filen.

**Følgende `<link>'s` kan være værd at have i baghånden:**

[Fontawesome CSS library](https://www.w3schools.com/icons/fontawesome_icons_intro.asp)
```
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
  integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```
[CSS Animate library](https://animate.style/)
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

```
**HUSK:** at tilføje `animate__animated` class før den valgte animations class f.eks.: `<article class="animate__animated animate__bounce">`


[Google fonts Mono space](https://fonts.google.com/specimen/Space+Mono?query=mono)
```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" />
```
I finder dette link inde på google fonts når i har tilføjet de fonts i ønsker at bruge. Husk også at tilføje CSS med f.eks. `font-family: "mono space", sans serif;` til `body{}`.


[sketchapp sources profile illustration](https://www.sketchappsources.com/free-source/3781-profile-illustration-user-sketch-freebie-resource.html)
```
<img
  src="https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png"
  alt="profil billede"
/>
```

Bagrundsbilledet fra eksempel
```
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%239683f1'/%3E%3Cstop offset='1' stop-color='%239683f1' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%235cc8c0'/%3E%3Cstop offset='1' stop-color='%235cc8c0' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23c5bbb2'/%3E%3Cstop offset='1' stop-color='%23c5bbb2' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%232D90FF'/%3E%3Cstop offset='1' stop-color='%232D90FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF76E3'/%3E%3Cstop offset='1' stop-color='%23FF76E3' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%238AFF81'/%3E%3Cstop offset='1' stop-color='%238AFF81' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
```
