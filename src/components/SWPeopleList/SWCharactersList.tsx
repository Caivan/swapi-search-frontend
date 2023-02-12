import React from  'react';
import "./SWCharactersList.css";
import ICharacter from '../../types/Character';
import IPerson from "../../types/Character";
import SWCharacter from '../SWCharacter/SWCharacter';

interface SWCharactersListProps {
    people: IPerson[];
}

export default function SWCharactersList ({people}: SWCharactersListProps) {
    const renderPeople = () => people.map(
        (character: ICharacter, index: number)=> <SWCharacter key={`character-${index}`} character={character} />
    );

    return <div className='charactersList'>{renderPeople()}</div>;
}
