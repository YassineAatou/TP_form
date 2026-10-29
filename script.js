let etudiants = [
    { id: 1, nom: "Yassine", note: 15 },
    { id: 2, nom: "Amine", note: 17 },
    { id: 3, nom: "Sara", note: 14 }
];

function afficherEtudiants() {
    etudiants.forEach(etudiant => {
        console.log(
            etudiant.id,
            etudiant.nom,
            etudiant.note
        );
    });
}

function ajouterEtudiant(nom, note) {
    const nouvelEtudiant = {
        id: etudiants.length + 1,
        nom: nom,
        note: note
    };

    etudiants.push(nouvelEtudiant);
}

function supprimerEtudiant(id) {
    etudiants = etudiants.filter(
        etudiant => etudiant.id !== id
    );
}

ajouterEtudiant("Omar", 16);
supprimerEtudiant(2);
afficherEtudiants();