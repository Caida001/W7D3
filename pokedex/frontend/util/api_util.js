class APIUtil {
  static fetchAllPokemon() {
    return $.ajax({
      method: "GET",
      url: "/api/pokemon"
    });
  }

  static fetchSinglePokemon(id) {
    return $.ajax({
      method: "GET",
      url: `/api/pokemon/${id}`
    });
  }

  static createNewPokemon(pokemon) {
    return $.ajax({
      method: "POST",
      url: "/api/pokemon",
      data: {
        pokemon: {
          image_url:
        };
      }
    });
  }
}

export default APIUtil;
