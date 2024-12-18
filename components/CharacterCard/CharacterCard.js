export function createCharacterCard(character) {
  const card = document.createElement("li");

  card.innerHTML = `
          <div class="card__image-container">
            <img
              class="card__image"
              src= "${character.source}"
              alt="${character.name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${character.name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">Alive</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description"></dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">51</dd>
            </dl>
          </div>
`;
  return card;
}
