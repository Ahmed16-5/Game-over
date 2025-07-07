import UX from "./../modules/ux.module.js";
export default class Details {

  static closeDetails(){
    document.querySelector(".details-section").classList.add("d-none");
}


static async getGameDetails(id) {
  UX.showLoader();
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "529fc1f4f7mshcfa1724f9c85e7fp18d265jsncf39791d79ae",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const result = await response.json();
    // displayGameDetails(result);
    UX.displayGameDetails(result);
  } catch (error) {
    console.error(error);
  } finally {
    UX.hideLoader();
  }
}
}
