import { handleResponse, handleError, login } from "./apiUtils";
// const baseUrl = process.env.REACT_APP_API_URL + "/grupos/";
const baseClass = "blogs";
const baseUrl = "http://localhost:8000/api/" + baseClass;
let tokenName = "token";

export async function getLast(idGrupo) {
  if (!sessionStorage.getItem(tokenName)) {
    // me voy a logonear forzadamente por ahora
    console.log("voy a forzar login");
    login();
  }

  let token = JSON.parse(sessionStorage.getItem(tokenName));
  console.log("El token es: ", token);
  if (!token.jwt) return false;

  let miInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.jwt,
    },
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
  };

  // el saque el miInit ,
  // body : JSON.stringify(data)

  // baseUrl += "/" + idGrupo;
  console.log("buscando...", baseUrl + "/grupos/" + idGrupo, token.jwt);
  return fetch(baseUrl + "/grupos/" + idGrupo, miInit)
    .then(handleResponse)
    .catch(handleError);
}
