export function Button(buttonContent, onClick, customClass) {
  const button = document.createElement("button");

  button.classList.add("button", customClass);
  button.textContent = buttonContent;

  button.addEventListener("click", onClick);

  return button;
}
