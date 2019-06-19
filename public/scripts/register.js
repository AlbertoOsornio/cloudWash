
let formaRegistro = document.getElementById("formaRegistro")

formaRegistro.addEventListener("submit",handlerSubmitRegister)

function handlerSubmitRegister(event){
    event.preventDefault()
    const data = {}
    data.name = document.getElementById("name").value
    data.username = document.getElementById("username").value
    data.password = document.getElementById("pass").value
    fetch("http://localhost:3000/users", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    }).then(response => response.json())
    .then((user)=>alert(`el usuario ${user.username}  ya esta guardado`))
}