const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", () => {
  const state = menu.dataset.state || "close";

  if (state === "close") {
    menu.setAttribute("data-state", "open");
  } else {
    menu.setAttribute("data-state", "close");
  }
});
