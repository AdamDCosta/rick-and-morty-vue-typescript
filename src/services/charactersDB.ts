import { Results } from "@/types/rickTypes.interface";

export const fetchRickData = async (): Promise<Results> => {
  
  const ricksURL = `https://rickandmortyapi.com/api/character?name=rick`;

  const ricksString = localStorage.getItem("ricksObject")
  let ricksObject: Results;

  if (ricksString) {
    ricksObject = JSON.parse(ricksString)
  } else {
    const response = await fetch(ricksURL);
    const rickData = await response.json();
    ricksObject = rickData
    localStorage.setItem("ricksObject", JSON.stringify(ricksObject))
  }

  return ricksObject;
};

// if (rickData.info.next !== null)
// fetch rickData.info.next
// const nextPageOfResults
// ricksObject.results.push()