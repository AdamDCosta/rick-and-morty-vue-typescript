import { RickType } from "@/types/charactersTypes.interface"

export const fetchRickData = async (): Promise<RickType> => {
  const ricksURL = "https://rickandmortyapi.com/api/character?name=rick"

    const response = await fetch(ricksURL)
    const rickData = await response.json()
    return rickData.results;
}

