const BASE_API = 'https://rickandmortyapi.com/api/character/';
const cardContentBody = document.getElementById('cards-content');

const fetchData = async(API) => {
    try {
        let response = await fetch(API)
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}


const getCharacteres = async(API) => {
    const { results } = await fetchData(API)
    return results;
}

const stilllives = (status) => {
    switch (status) {
        case "Alive":
            return "alive";
        case "Dead":
            return "dead";
        default:
            return "unknown"
    }
}

const renderCharacteres = async() => {

    const characteres = await getCharacteres(BASE_API);
    console.log(characteres)

    let html = '';

    characteres.forEach((character) => {

        const status = stilllives(character.status);

        let cardCharacter =
            `
            <div class="card-item">
            <span class="bagde-dimension">${character.species}</span>
            <img src=${character.image} alt="image ${character.name}">
            <div class="information-overflow">
                <div class="information-container">
                    <p class="information-name">${character.name}</p>
                    <p class="information-specie">${character.species}</p>
                    <p class="information-gender">${character.gender}</p>
                    <p class="information-status ${status}">${character.status}</p>
                </div>
            </div>
            </div>
            `;

        html += cardCharacter;

        cardContentBody.innerHTML = html;

    });
}

renderCharacteres();