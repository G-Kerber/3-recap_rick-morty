export function Button(buttonContent, onClick, customClass) {
  const button = document.createElement("button");

  console.log(customClass);
  button.classList.add("button", customClass);
  button.textContent = buttonContent;

  button.addEventListener("click", onClick);

  return button;
}
