let lugar = document.getElementById("resultado");
let jwt = document.getElementById("jwt");
let tokenName = "token";
let urlBase = "http://localhost:8000/api/";

async function traerUsuario(){

    let url = urlBase + "login.php";

    let data = {
        email: "akouvach@yahoo.com",
        password : "akouvach"
    }


    let miInit = { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    cache: 'no-cache' , 
                    credentials: 'omit', 
                    body : JSON.stringify(data)
                };

    let rta = await fetch(url,miInit)
        .then(function(response) {
            if(response.ok)
                return response.json();
            else {
                return {"rta":false, "mensaje":"error de conversion json"  };
            }
        })
        .catch(function(error) {
            return error;
        });

    if(rta.ok){
        jwt.value = rta.jwt;
        sessionStorage.setItem(tokenName, JSON.stringify(rta));    
    } else {
        jwt.value = "error";
    }


    console.log(rta);


//    resultado.innerHTML = response;

}

async function buscarUno(){



    let url = urlBase + "usuario_api.php";

    let token = JSON.parse(sessionStorage.getItem(tokenName));

    let data = {
        "payload" : [
                        {
                            "model":"usuarios",
                            "filter": [
                                {"field":"id", "value":1}
                            ]
                        }
        ]
    };
    
    //console.log("data del localstorage:" , data);
    //console.log(token);
    //token.jwt +="pepe";

    let miInit = { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token.jwt
                    },
                    mode: 'cors',
                    cache: 'no-cache' , 
                    credentials: 'same-origin', 
                    body : JSON.stringify(data)
                };

    let rta = await fetch(url,miInit)
        .then(function(response) {
            return response.text();
            // if(response.ok){
            //     return response.json();
            // } else {
            //     throw new Error ("Error en la consulta post");
            // }
            
        })
        .catch(function(error) {
            console.log(error.message);
        });

    console.log(rta);
    


}