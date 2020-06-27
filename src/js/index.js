/**
 * Liste des different signes et leur id
 * @type {{MULTIPLIER: string, MOINS: string, PLUS: string, DIVISER: string}}
 */
const signes = {
    PLUS: "+",
    MOINS: "-",
    DIVISER: "/",
    MULTIPLIER: "*"
};

/**
 * Fonction qui vas calculer a et b en fonction du signe recupéré en paramètre
 * @param {number} a - Le premier chiffre
 * @param {number} b - Le second chiffre
 * @param {string} signe - Le signe
 * @returns {number}
 */
function calculer(a, b, signe) {
    let resultat = 0;


    switch (signe) {

        case signes.PLUS: // Si le signe est l'addition, on fait a + b

            resultat = a + b;
            break;

        case signes.MOINS: // Dans le cas de la soustraction, on fait a - b

            resultat = a - b;
            break;

        case signes.DIVISER: // Si le signe est la division

            // Si b > 0 alors, on effectue la division
            // dans le cas contraire, on enregistre une erreur dans le resultat
            resultat = b > 0 ? a / b : "Erreur: tentative de division par 0.";
            break;

        case signes.MULTIPLIER: // Pour la multiplication

            resultat = a * b;
            break;

    }
    return resultat;
}

function lancer() {

    let signe = prompt("Entrez l'operation à effectuer: \n - Addition (+) \n - Soustraction (-) \n - Division (/) \n - Multiplication (*)");

    let a = parseInt(prompt("Entrez le premier chiffre"));
    let b = parseInt(prompt("Entrez le second chiffre"));

    alert(`${a} ${signe} ${b} = ${calculer(a, b, signe)}`);

    return confirm("Voulez-vous effectuer une autre opération ?");

}

function boucle() {
    let recommencer = true;

    while (recommencer) {
        recommencer = lancer();
    }
}
