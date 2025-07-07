// import Details from "./../modules/details.module.js";
 export  default class UX {
  static showLoader() {
    document.getElementById("loader").style.display = "flex";
  }
  static hideLoader() {
    document.getElementById("loader").style.display = "none";
  }
  static displayGames(games) {
    const container = document.querySelector(".row");
    container.innerHTML = "";
    // using for of loop to can change the value of constant
    for (const game of games) {
      container.innerHTML += `<div class="col-sm-12 bg col-md-6 col-lg-4 col-xl-3 "> 
              <div class="card bg-transparent" data-id="${game.id}">
                <div class="card-body">
                  <img
                    class="card-img-top object-fit-cover h-100 mb-3"
                    src="${game.thumbnail}"
                    alt=""
                  />
                  <div class="hstack justify-content-between">
                    <h3 class="h6 small text-white">${game.title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                  <p class="card-text small text-center opacity-50 text-white py-2">
                     ${game.short_description.length > 100 ? game.short_description.slice(0, 100) + "..." : game.short_description}
                  </p>
                </div>
                <footer
                  class="card-footer small hstack justify-content-between mt-3 "
                >
                  <span class="badge badge-color small">${game.genre}</span>
                  <span class="badge badge-color small">${game.platform}</span>
                </footer>
              </div>
            </div>`;
    }
  }
  static displayGameDetails(game) {
  const container = document.querySelector(".details-section");
  container.innerHTML = `<div class="container">
        <header class="hstack justify-content-between">
          <h1 class="text-center h3 py-4 text-white">Details Game</h1>
          <button class="btn-close btn-close-white"  id="btnClose"></button>
        </header>
        <div class="row g-4" id="details-contetnt">
          <div class="col-md-4">
            <img
              src="${game.thumbnail}"
              alt="img-details"
              class="w-100"
            />
          </div>
          <div class="col-md-8">
            <h3 class="text-white">Title: ${game.title}</h3>
            <p class="text-white">
              Category: <span class="badge text-bg-info"> ${game.genre}</span>
            </p>
            <p class="text-white">
              Platform: <span class="badge text-bg-info"> ${game.platform}</span>
            </p>
            <p class="text-white">
              Status: <span class="badge text-bg-info"> ${game.status}</span>
            </p>
            <p class="small text-white">
              ${game.description}
            </p>
            <a
              class="btn btn-outline-warning"
              target="_blank"
              href="${game.game_url}"
              >Show Game</a
            >
          </div>
        </div>
      </div>`
}
}

