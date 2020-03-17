let lugar = document.getElementById("resultado");
let jwt = document.getElementById("jwt");


async function traerUsuario(){

    let url = "http://localhost:8000/api/login.php"

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
                    cache: 'default' , 
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
        localStorage.setItem("token", JSON.stringify(rta));    
    } else {
        jwt.value = "error";
    }


    console.log(rta);


//    resultado.innerHTML = response;

}

async function buscarUno(){

    let url = "http://localhost:8000/api/usuario_api.php"

    let token = JSON.parse(localStorage.getItem("token"));

    let data = {
        "token": token.jwt,
        "payload" : [
                        {
                            "model":"usuarios",
                            "filter": [
                                {"field":"id", "value":1}
                            ]
                        }
        ]
    };
    
    console.log("data del localstorage:" , data, JSON.stringify(data));
    console.log(JSON.stringify(data));

    let miInit = { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    cache: 'no-cache' , 
                    credentials: 'same-origin', 
                    body : JSON.stringify(data)
                };

    let rta = await fetch(url,miInit)
        .then(function(response) {
            //console.log("rta:", response);
            return response.json();

        })
        .catch(function(error) {
            return error;
        });

    console.log(rta);
    


}