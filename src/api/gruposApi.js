import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.REACT_APP_API_URL + "/grupos/";
const baseClass = "grupos";
const baseUrl = "http://localhost:8000/api/" + baseClass + "/";

export function getAll() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getByPrim(id) {
  return fetch(baseUrl + "?id=" + id)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((grupos) => {
        if (grupos.length !== 1) throw new Error("Course not found: " + id);
        return grupos[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function guardar(grupo) {
  return fetch(baseUrl + (grupo.id || ""), {
    method: grupo.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...grupo,
      // Parse authorId to a number (in case it was sent as a string).
      idCreador: 1,
      idOrganigrama: 2,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function eliminar(idGrupo) {
  return fetch(baseUrl + idGrupo, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
