export function createNavPagination() {
  const pagination = document.createElement("span");

  pagination.classList.add("navigation__pagination");
  pagination.setAttribute("data-js", "pagination");
  pagination.textContent = "";

  return pagination;
}
