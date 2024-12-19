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

// --- Code for revolve Challenge ---

async function fetchCharacters() {
  try {
    // Part 1: fetch Characters
    cardContainer.innerHTML = "";
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    const characters = data.results;

    // Part 2: Create Characters
    characters.forEach((character) => {
      const characterCard = createCharacterCard({
        source: character.image,
        name: character.name,
        status: character.status,
        type: character.type,
        occurrence: character.episode,
      });
      cardContainer.append(characterCard);
    });
  } catch (Error) {
    console.error("Error: Fetch failed!", Error);
  }
}

fetchCharacters();
