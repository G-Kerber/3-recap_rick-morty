export function createNavButtonPrev() {
  const prevButton = document.createElement("button");

  prevButton.classList.add("button--prev");
  prevButton.setAttribute("data-js", "button-prev");
  prevButton.textContent = "previous";

  return prevButton;
}

export function createNavButtonNext() {
  const nextButton = document.createElement("button");

  nextButton.classList.add("button--next");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.textContent = "next";

  return nextButton;
}
