export function createSpanElement(labelcontent, customClass) {
  const spanElement = document.createElement("span");

  spanElement.classList.add(customClass);
  spanElement.textContent = labelcontent;

  return spanElement;
}
