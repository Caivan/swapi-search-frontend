import React from "react";
import ICharacter from "../../types/Character";
import "./SWCharacter.css"

interface SWCharacterProps {
    character: ICharacter;
}

export default function SWCharacter ({character: { name, height}}: SWCharacterProps) {
    
    return (
        <article className="character">
            <h3>{name}</h3>
            <p>{`Height: ${height}`}</p>
        </article>
    );
}