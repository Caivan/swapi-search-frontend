import ICharacter from "../types/Character";
import HttpRequestError from "../types/HttpRequestError";

const SWAPI_BASE_URL = 'https://swapi.dev/api/';

const getAllPeople = async (searchParam?: string): Promise<ICharacter[]> => {
    const URL = `${SWAPI_BASE_URL}people/${searchParam && `?search=${searchParam}`}`;
    try{
        const response = await fetch(URL);    
        const json = await response.json();
        
        return json.results.map((character: any) => ({
            name : character.name,
            height : character.height,
            mass : character.mass,
            hairColor :character.hair_color,
            skinColor :character.skin_color,
            eyeColor :character.eye_color,
            birthYear :character.birth_year,
            gender : character.gender,
            created : new Date(character.created),
            edited :  new Date(character.edited),
            url :  character.url,
       }));
    } catch (error) {
        console.error(error);
        throw new HttpRequestError(`Error calling ${URL}`);
    }
}

export default getAllPeople;
