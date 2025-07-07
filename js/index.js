import games from "./modules/games.module.js";
import details from "./modules/details.module.js";

// Add event listeners to navbar categories
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    document.querySelector(".nav-link.active").classList.remove("active");
    this.querySelector(".nav-link").classList.add("active");
    games.getGamesByCategory(category);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  games.getGamesByCategory("mmorpg");
});

document.body.addEventListener("click", (e) => {
  if (e.target.id === "btnClose") {
    details.closeDetails();
  }
});

document.getElementById("cardsRow").addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) {
    const id = card.getAttribute("data-id");
    document.querySelector(".details-section").classList.remove("d-none");
    details.getGameDetails(id);
  }
});
