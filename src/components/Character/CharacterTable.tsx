import React from "react";
import { Character } from "../../types";
import { StyledTd } from "./StyledTd";

interface CharacterTableProps {
  character: Character;
}

export const CharacterTable: React.FC<CharacterTableProps> = ({
  character,
}) => {
  return (
    <table className="border-collapse w-full  border border-slate-400 bg-white">
      <tbody>
        <tr>
          <StyledTd>Character name</StyledTd>
          <StyledTd>{character.name}</StyledTd>
        </tr>
        <tr>
          <StyledTd>Origin name</StyledTd>
          <StyledTd>{character.origin.name}</StyledTd>
        </tr>
        <tr>
          <StyledTd>Origin dimension</StyledTd>
          <StyledTd>{character?.dimension}</StyledTd>
        </tr>
        <tr>
          <StyledTd>Popularity</StyledTd>
          <StyledTd>{character.episode.length}</StyledTd>
        </tr>
      </tbody>
    </table>
  );
};
