// Funktion, die auf das Scroll-Event hört
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const videoSection = document.querySelector('.section-Startseite'); // Die Videosektion
    const logo = document.querySelector('.Ducks-Logo'); // Das Ducks-Logo
    
    // Die Höhe der Videosektion wird ermittelt
    const videoHeight = videoSection.offsetHeight;
    
    // Wenn der Nutzer weiter als die Videosektion gescrollt hat, wird der Header schwarz
    if (window.scrollY > videoHeight) {
        header.style.backgroundColor = 'black'; // Hintergrund schwarz bei Scroll
        logo.style.display = 'none'; // Logo ausblenden
    } else {
        header.style.backgroundColor = 'transparent'; // Zurück zu transparent
        logo.style.display = 'block'; // Logo wieder einblenden
    }
});


// Setze das Datum für das nächste Spiel (Jahr, Monat (0-basiert), Tag, Stunde, Minute)
const nextGameDate = new Date("2024-12-07T15:40:00").getTime();

// Update den Countdown jede Sekunde
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = nextGameDate - now;

    // Zeitwerte für Tage, Stunden, Minuten und Sekunden
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Werte in das HTML-Element einfügen
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Wenn der Countdown abgelaufen ist
    if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = '<a href="https://www.ooeehv.at/landesliga-nachwuchs/ooe-liwest-ahol" target="_blank">Live-Ticker!</a>';
    }
}, 1000);
