import { BASE_ORIGIN_NAME, BASE_URL, DEFAULT_FAMILY_IDS } from "./constants";
import { filterCharacterByOriginName, filterIds } from "./utils";

async function getDimensionResidentsIds() {
  try {
    const response = await fetch(
      `${BASE_URL}/location?name=${BASE_ORIGIN_NAME}`
    );

    if (!response.ok) return null;

    const { results } = await response.json();

    return {
      residentsIds: filterIds(results[0].residents),
      dimension: results[0].dimension,
    };
  } catch (e) {
    console.error(e);
  }
}
async function getCharactersByIds(idsArray: string[]) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${idsArray}`
    );
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
// all where origin is C - 137
export async function getAllCharactersFromOriginalEarth() {
  try {
    // @ts-ignore
    const { residentsIds, dimension } = await getDimensionResidentsIds();

    if (!residentsIds || !dimension) return null;

    const characters = await getCharactersByIds(residentsIds);

    // filter characters and then add dimension
    return filterCharacterByOriginName(characters).map((character) => ({
      ...character,
      dimension,
    }));
  } catch (e) {
    console.error(e);
  }
}
// 1 3 2 4  5

export async function getCharacters() {
  try {
    const response = await fetch(
      `${BASE_URL}/character/${[...DEFAULT_FAMILY_IDS]}`
    );
    const data = await response.json();
    return data;
    console.log(data);
  } catch (e) {
    console.error(e);
  }
  // fetch(`${BASE_URL}/characters/name`);
}
