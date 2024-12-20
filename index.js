import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { createSpanElement } from "./components/NavPagination/NavPagination.js";
import { Button } from "./components/NavButton/NavButton.js";
import { createSearchBar } from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

// --- Code for revolve Challenge ---

async function fetchCharacters() {
  try {
    // Part 1: fetch Characters
    cardContainer.innerHTML = "";
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    );
    const data = await response.json();
    const characters = data.results;

    maxPage = data.info.pages;

    pagination.textContent = `${page} / ${maxPage}`;

    // Part 2: Create Characters
    characters.forEach((character) => {
      const characterCard = createCharacterCard({
        source: character.image,
        name: character.name,
        status: character.status,
        type: character.type,
        occurrences: character.episode?.length || 0,
      });
      cardContainer.append(characterCard);
    });
  } catch (Error) {
    console.error("Error: Fetch failed!", Error);
  }
}

const nextButton = Button(
  "Next",
  () => {
    if (page < maxPage) {
      page++;
    } else {
      page = 1;
    }
    fetchCharacters();
  },
  "button--next"
);

const prevButton = Button(
  "Previous",
  () => {
    if (page > 1) {
      page--;
    } else {
      page = maxPage;
    }
    fetchCharacters();
  },
  "button--prev"
);

const pagination = createSpanElement("", "navigation__pagination");

navigation.append(prevButton, pagination, nextButton);

const searchBar = createSearchBar((event) => {
  event.preventDefault();

  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharacters();
});

searchBarContainer.append(searchBar);

fetchCharacters();
