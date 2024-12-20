import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { createNavPagination } from "./components/NavPagination/NavPagination.js";
import {
  createNavButtonNext,
  createNavButtonPrev,
} from "./components/NavButton/NavButton.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

navigation.append(createNavButtonPrev());
navigation.append(createNavPagination());
navigation.append(createNavButtonNext());

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

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

console.log("step 1");
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
  } else {
    page = 1;
  }
  fetchCharacters();
});

console.log("step 2");
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
  } else {
    page = maxPage;
  }
  fetchCharacters();
});

searchBarContainer.addEventListener("submit", (event) => {
  event.preventDefault();

  // Variante 1
  //const searchInput = searchBar.querySelector(".search-bar__input");
  //searchQuery = searchInput.value;
  // Varinate 2
  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharacters();
});

fetchCharacters();
