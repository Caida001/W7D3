class APIUtil {
  static fetchAllPokemon() {
    return $.ajax({
      method: "GET",
      url: "/api/pokemon"
    });
  }
}

export default APIUtil;
