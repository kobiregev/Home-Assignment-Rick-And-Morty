import { useCallback, useEffect, useState } from "react";
import { CharacterTable } from "./components/Character/CharacterTable";
import { Chart } from "./components/Chart/Chart";
import { getAllCharactersFromOriginalEarth, getCharacters } from "./data/api";
import { findMostUnpopularCharacters } from "./data/utils";
import { Character } from "./types";

function App() {
  const [mostUnpopularCharacter, setMostUnpopularCharacter] = useState<Character>();
  const [chartCharacters, setChartCharacters] = useState<Character[]>();

  const fetchCharacters = useCallback(async () => {
    const characters = await getAllCharactersFromOriginalEarth();
    const chartCharacters = await getCharacters();

    chartCharacters && setChartCharacters(chartCharacters);
    characters && setMostUnpopularCharacter(findMostUnpopularCharacters(characters));
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="flex flex-col md:mx-auto md:max-w-screen-md">
      {mostUnpopularCharacter && (<CharacterTable character={mostUnpopularCharacter} />)}
      {chartCharacters && <Chart data={chartCharacters} />}
    </div>
  );
}

export default App;
