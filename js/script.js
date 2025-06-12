
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {
        // Laisse le formulaire se soumettre normalement
        setTimeout(() => {
            // Affiche le message de confirmation
            messageBox.style.display = "block";

            // Réinitialise les champs du formulaire
            form.reset();

            // Cache le message après 5 secondes
            setTimeout(() => {
                messageBox.style.display = "none";
            }, 7000);
        }, 500); // petit délai pour laisser le serveur traiter le POST (à ajuster si nécessaire)
    });
});

