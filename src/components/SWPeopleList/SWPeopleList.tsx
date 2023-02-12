import React from  'react';
import "./SWPeopleList.css";
import ICharacter from '../../types/Character';
import IPerson from "../../types/Character";
import SWCharacter from '../SWCharacter/SWCharacter';

interface SWPeopleListProps {
    people: IPerson[];
}

export default function SWPeopleList ({people}: SWPeopleListProps) {
    const renderPeople = () => people.map((character: ICharacter, index: number)=> <SWCharacter key={`characther_${index}`} character={character} />);

    return <div className='charactersList'>{renderPeople()}</div>;
}