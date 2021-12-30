import { Results } from "@/types/rickTypes.interface";

export const fetchRickData = async (): Promise<Results> => {
  const ricksURL = `https://rickandmortyapi.com/api/character?name=rick`;

  const response = await fetch(ricksURL);
  const rickData = await response.json();
  return rickData;
};
