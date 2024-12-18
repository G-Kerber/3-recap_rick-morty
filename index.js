import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

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

const character = {
  name: "Rick Sanchez",
  status: "alive",
  source: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};

const newCharacter = createCharacterCard(character);
cardContainer.append(newCharacter);

async function fetchCharacters() {
  try {
    cardContainer.innerHTML = "";
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();

    const characters = data.results;
    characters.forEach((character) => {
      const characterCard = createCharacterCard({
        name: character.name,
        status: character.status,
        source: character.image,
      });
      cardContainer.append(characterCard);
    });
  } catch (Error) {
    console.error("Error: Fetch failed!", Error);
  }
}
fetchCharacters();
