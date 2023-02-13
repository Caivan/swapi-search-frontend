import React from "react";
import ICharacter from "../../types/Character";
import "./SWCharacter.css"

interface SWCharacterProps {
    character: ICharacter;
}

export default function SWCharacter ({character: { name, height, birthYear, edited }}: SWCharacterProps) {

    return (
        <article className="character">
            <h3>{name}</h3>
            <p>{`Height: ${height}`}</p>
            <p>{`Birth Year: ${birthYear}`}</p>
            <p>
                {`Edited: ${
                edited.toLocaleString(
                    "en-US", 
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    }
                )}`}
            </p>
        </article>
    );
}