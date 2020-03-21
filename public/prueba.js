
const urlBase = "http://localhost:8000/api/";

function buscar(){
    MyLogin().then( (rta)=>{
        console.log(rta);
    });

}

const MyLogin= async()=>{
    let url = urlBase + "login.php";
    // url='https://randomuser.me/api/'

    let data = {
        email: "akouvach@yahoo.com",
        password : "akouvach"
    }

    // credentials: 'include', 

    let miInit = { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    mode: 'cors',
                    cache: 'no-cache' , 
                    body : JSON.stringify(data)
                };
        // let rta = await fetch(url)
        let rta = await fetch(url,miInit)
                .then(function(response) {
                    console.log(response.ok);
                    if(response.ok)
                        return response.json();
                    else 
                        return response.text();
                })
                .catch(function(error) {
                    return {"ok":false, "mensaje":error.message};
                });

        console.log("rta: ", rta);

    // if(rta.ok)
    //     sessionStorage.setItem(tokenName, JSON.stringify(rta));    
    // else    
    //     console.log(rta);

    return rta;
    
}

