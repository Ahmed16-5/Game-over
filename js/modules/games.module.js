import UX from "./../modules/ux.module.js";
import Details from "./../modules/details.module.js";

export default class Games {
  constructor(container) {
    this.container = container;
  }
   static async getGamesByCategory(category) {
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
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
      );
      const data = await response.json();

      // console.log(data);
      UX.displayGames(data);
    } catch (error) {
      console.log(error);
    } finally {
      UX.hideLoader();
    }
  }


}
