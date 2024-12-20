export function createSearchBar(onSubmit) {
  const form = document.createElement("form");

  form.classList.add("search-bar");
  form.setAttribute("data-js", "search-bar");
  form.setAttribute("action", "");

  form.innerHTML = `
<input
  name="query"
  class="search-bar__input"
  type="text"
  placeholder="search characters"
  aria-label="character name"
/>
<button class="search-bar__button" aria-label="search for character">
  <img
    class="search-bar__icon"
    src="assets/magnifying-glass.png"
    alt=""
  />
</button>
`;

  form.addEventListener("submit", onSubmit);

  return form;
}
