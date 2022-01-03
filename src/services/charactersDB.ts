import { Results } from "@/types/rickTypes.interface";

export const fetchRickData = async (): Promise<Results> => {
  const ricksURL = `https://rickandmortyapi.com/api/character?name=rick`;

  const ricksString = localStorage.getItem("ricksObject");
  let ricksObject: Results;

  if (ricksString) {
    ricksObject = JSON.parse(ricksString);
  } else {
    const response = await fetch(ricksURL);
    const rickData = await response.json();
    ricksObject = rickData;
    const totalPages = rickData.info.pages;
    for (let i = 2; i <= totalPages; i++) {
      const nextResponse = await fetch(
        `https://rickandmortyapi.com/api/character?page=${i}&name=rick`
      );
      const nextPageOfData = await nextResponse.json();
      for (const rick of nextPageOfData.results) {
        ricksObject.results?.push(rick);
      }
    }

    localStorage.setItem("ricksObject", JSON.stringify(ricksObject));
  }

  return ricksObject;
};
