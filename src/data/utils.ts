import { Character } from "../types";
import { BASE_ORIGIN_NAME, } from "./constants";

// id is a string at the end of the url
export function filterIds(residents: string[]) {
  return residents.map((resident) =>
    resident.substring(resident.search(/[0-9]+/))
  );
}

export function filterCharacterByOriginName(characters: Character[]) {
  return characters.filter(
    (character) => character.origin.name === BASE_ORIGIN_NAME
  );
}

export function findMostUnpopularCharacters(characters: Character[]) {
  return characters.find((character) => character.episode.length === 1);
}
