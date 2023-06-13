fetch('https://store.steampowered.com/appreviews/751780?json=1&key=25011829B91D025DA389A44924E5C14B')
            .then(response => response.json())
            .then(data => {
                // Traitement des données récupérées
                console.log(data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des revues :', error);
            });