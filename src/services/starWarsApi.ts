import ICharacter from "../types/Character";
import HttpRequestError from "../types/HttpRequestError";

const SWAPI_BASE_URL = 'https://swapi.dev/api/';

const getAllPeople = async (searchParam?: string): Promise<ICharacter[]> => {
    const URL = `${SWAPI_BASE_URL}people/${searchParam && `?search=${searchParam}`}`;
    try{
        const response = await fetch(URL);    
        const json = await response.json();
        
        return json.results;
    } catch (error) {
        console.error(error);
        throw new HttpRequestError(`Error calling ${URL}`);
    }
}

export default getAllPeople;
