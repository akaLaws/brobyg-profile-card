
// Lytter om alt content er loaded på document (index.html i vores tilfælde)
// Når content er loaded skal der udføres en funktion
document.addEventListener("DOMContentLoaded", function () {
  
  // Funktionen lytter på <body> i document om der bliver klikket på den - når der bliver klikket skal den unfører en funktion
  document.querySelector("body").addEventListener("click", function () {
    
    // Funktionen tilføjer class'en "animate__tada" til <body> tagget i HTML
    document.querySelector("body").classList.add("animate__tada");
    
    // Funktionen sætter også en time out på 500 ms 
    setTimeout(() => {
      
      // Når de 500 ms er gået skal class'en animate__tada fjernes fra <body> tagget igen 
      document.querySelector("body").classList.remove("animate__tada");
    
    }, 500);
  });
});
