import { useEffect, useRef, useState } from "react";
import getAllPeople from "../services/starWarsApi";
import ICharacter from "../types/Character";
import HttpRequestError from "../types/HttpRequestError";

export const useCharactersList = ({search}: {search?: string}) => {
    const [people, setPeople] = useState<ICharacter[]> ([]);
    const [isLoading, setIsLoading] = useState<boolean> (false);
    const [error, setError] = useState<string> ();
    const prevSearch = useRef(search);

    useEffect(()=> {
      if (search === prevSearch.current) {
        return;
      }

      try {
        setIsLoading(true);
        getAllPeople(search).then((response: ICharacter[]) => setPeople(response))
      }catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    },[search]);

    return { people, isLoading, error };
}  