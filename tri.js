
function triParInsertion() {
    // Récupérer l'input de l'utilisateur
    let input = document.getElementById('inputArray').value;
    // Convertir l'input en tableau de nombres
    let arr = input.split(',').map(num => parseInt(num.trim()));

    // Algorithme de tri par insertion
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        // Déplacer les éléments plus grands que currentElement vers la droite
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Placer currentElement à sa bonne position
        arr[j + 1] = currentElement;
    }

    // Afficher le tableau trié dans l'élément HTML
    document.getElementById('arrayOutput').textContent = arr.join(', ');
}