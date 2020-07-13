let urlBase = "http://localhost:8000/api/";
let jwt = {};
let tokenName = "token";

export async function handleResponse(response) {
  if (response.ok) {
    let rta = await response.json();
    console.log("traje", rta);
    return rta;
  } else {
    if (response.status === 400) {
      // So, a server-side validation error occurred.
      // Server side validation returns a string error message, so parse as text instead of json.
      const error = await response.text();
      throw new Error(error);
    }
    throw new Error("Network response was not ok.");
  }
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}

export function login() {
  let data = {
    email: "akouvach@yahoo.com",
    password: "akouvach",
  };

  return verificarLogin(data);
}

export async function verificarLogin(data) {
  let rdo = false;
  console.log("entre a verificar login");

  try {
    rdo = await traerUsuario(data);
    console.log("trajo el resultado");
    return rdo;
  } catch (err) {
    console.log(err);
    return false;
  }
}

async function traerUsuario(data) {
  let url = urlBase + "login";

  let miInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    body: JSON.stringify(data),
  };

  console.log("arranco el fetch del login:", url);
  let rta = await fetch(url, miInit)
    .then(function (response) {
      console.log("Termino el fetch del login:", response);
      return response.json();
    })
    .then((data) => data)
    .catch(function (error) {
      console.log("error en el fetch", error.message);
      return error;
    });

  console.log("rta del fetch", rta);
  if (rta.rta) {
    jwt.value = rta.jwt;
    sessionStorage.setItem(tokenName, JSON.stringify(rta));
    return true;
  } else {
    jwt.value = "error";
    return false;
  }
}

// async function traerUsuarios(){

//     let url = urlBase + "usuarios.php";

//     let data = {
//         email: "akouvach@yahoo.com",
//         password : "akouvach"
//     }

//     let miInit = {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Accept': 'application/json'
//                     },
//                     mode: 'cors',
//                     cache: 'no-cache' ,
//                     credentials: 'omit',
//                     body : JSON.stringify(data)
//                 };

//     let rta = await fetch(url,miInit)
//         .then(function(response) {
//             return response.json();
//         })
//         .catch(function(error) {
//             console.log("error en el fetch", error.message);
//             return error;
//         });

//     console.log(rta);
//     if(rta.ok){
//         jwt.value = rta.jwt;
//         sessionStorage.setItem(tokenName, JSON.stringify(rta));
//     } else {
//         jwt.value = "error";
//     }

// //    resultado.innerHTML = response;

// }
