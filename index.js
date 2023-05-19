import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

export async function fetchCharacters() {
  //const createCharacterCard = createCharacterCard();
  const ApiUrl = `https://rickandmortyapi.com/api/character`;

  try {
    const response = await fetch(ApiUrl);
    const data = await response.json();
  console.log(data);

  data.results.forEach((character) => {
    const characterElement = createCharacterCard(character);
    cardContainer.append(characterElement);
    //const ul = document.createElement("ul");
  }); 
} catch (error) {
  console.log("An error occured", error);
}
}

fetchCharacters();