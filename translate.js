document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-language");
    
    if (!toggleButton) return; // Se il pulsante non esiste, termina il codice

    toggleButton.addEventListener("click", function () {
        let langElements = document.querySelectorAll("[data-lang]");
        
        langElements.forEach(el => {
            if (el.dataset.lang === "it") {
                el.innerHTML = el.dataset.en;
                el.dataset.lang = "en";
            } else {
                el.innerHTML = el.dataset.it;
                el.dataset.lang = "it";
            }
        });
    });
});
