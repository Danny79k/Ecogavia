console.log("hola estoy dentro de vite");
const main = document.querySelector("#main")


async function getUsers() {
    try {
        let response = await fetch('http://localhost:8000/api/users')
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los usuarios: ${e}`)
    }
}

let crudButton = document.querySelector("#crudButton")

crudButton.addEventListener('click', async () => {
    main.innerHTML = ''
    let usuarios = await getUsers()
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let trColumna = document.createElement("tr")
    let thId = document.createElement("th")
    let thNombre = document.createElement("th")
    let thACorreo = document.createElement("th")
    let thAdmin = document.createElement("th")
    let thCentro = document.createElement("th")
    let thCreado = document.createElement("th")
    let thActualizado = document.createElement("th")
    
    main.innerHTML = `<p class=''>hola</p>`
    thId.innerHTML = "id"
    thNombre.innerHTML = "nombre"
    thACorreo.innerHTML = "correo"
    thAdmin.innerHTML = "admin"
    thCentro.innerHTML = "centro"
    thCreado.innerHTML = "creado"
    thActualizado.innerHTML = "actualizado"

    trColumna.appendChild(thId)
    trColumna.appendChild(thNombre)
    trColumna.appendChild(thACorreo)
    trColumna.appendChild(thAdmin)
    trColumna.appendChild(thCentro)
    trColumna.appendChild(thCreado)
    trColumna.appendChild(thActualizado)


    thead.appendChild(trColumna)
    table.appendChild(thead)

    let tBody = document.createElement("tbody")

    table.classList.add("text-white", "bg-black", "table-auto", "text-center", "border-separate", "border-spacing-2", "border")
    console.log(usuarios.data);
    for (let i = 0; i < usuarios.data.length; i++) {
        let row = document.createElement("tr")
        let celdaId = document.createElement("td")
        let celdaNombre = document.createElement("td")
        let celdaCorreo = document.createElement("td")
        let celdaAdmin = document.createElement("td")
        let celdaCentro = document.createElement("td")
        let celdaCreado = document.createElement("td")
        let celdaActualizado = document.createElement("td")

        celdaId.textContent = usuarios.data[i].id
        celdaNombre.textContent = usuarios.data[i].name
        celdaCorreo.textContent = usuarios.data[i].email
        celdaAdmin.textContent = usuarios.data[i].admin
        celdaCentro.textContent = usuarios.data[i].centro_id
        celdaCreado.textContent = usuarios.data[i].created_at
        celdaActualizado.textContent = usuarios.data[i].updated_at

        row.appendChild(celdaId)
        row.appendChild(celdaNombre)
        row.appendChild(celdaCorreo)
        row.appendChild(celdaAdmin)
        row.appendChild(celdaCentro)
        row.appendChild(celdaCreado)
        row.appendChild(celdaActualizado)

        tBody.appendChild(row)
    }
    table.appendChild(tBody)
    main.appendChild(table)
})