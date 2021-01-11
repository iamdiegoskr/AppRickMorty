const getCharacteres = async() => {
    const BASE_API = 'https://rickandmortyapi.com/api/character/';
    try {
        let characteres = await fetch(BASE_API)
        return await characteres.json();
    } catch (error) {
        console.log(error)
    }
}


const printData = async() => {

    const characteres = await getCharacteres()



    console.log(characteres.results);

}

printData()