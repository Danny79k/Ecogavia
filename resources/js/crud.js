//#region [OUTDATED]


console.log("hola estoy dentro de vite");
const main = document.querySelector("#main")


async function getRegistros() {
    try {
        let response = await fetch('http://localhost:8000/api/registros')
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los usuarios: ${e}`)
    }
}

let registros = document.querySelector("#registros")

registros.addEventListener('click', async () => {
    main.innerHTML = ''
    let usuarios = await getRegistros()
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

    thId.innerHTML = "id"
    thNombre.innerHTML = "usuario"
    thACorreo.innerHTML = "compostera"
    thAdmin.innerHTML = "ciclo"
    thCentro.innerHTML = "inicio ciclo"
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

    table.classList.add("text-white", "bg-gray-500", "text-center", "border-separate", "border-spacing-2", "border")
    console.log(usuarios.data);
    for (let i = 0; i < usuarios.data.length; i++) {

        let row = document.createElement("tr")

        let celdaId = document.createElement("td");
        celdaId.classList.add("celdaId");
        let celdaUsuario = document.createElement("td");
        celdaUsuario.classList.add("celdaUsuario");
        let celdaCompostera = document.createElement("td");
        celdaCompostera.classList.add("celdaCompostera");
        let celdaCiclo = document.createElement("td");
        celdaCiclo.classList.add("celdaCiclo");
        let celdaInicioCiclo = document.createElement("td");
        celdaInicioCiclo.classList.add("celdaInicioCiclo");
        let celdaCreado = document.createElement("td");
        celdaCreado.classList.add("celdaCreado");
        let celdaActualizado = document.createElement("td");
        celdaActualizado.classList.add("celdaActualizado");

        celdaId.textContent = usuarios.data[i].id;
        celdaUsuario.textContent = usuarios.data[i].user_id;
        celdaCompostera.textContent = usuarios.data[i].compostera_id;
        celdaCiclo.textContent = usuarios.data[i].ciclo_id;
        celdaInicioCiclo.textContent = usuarios.data[i].inicio_ciclo;
        celdaCreado.textContent = usuarios.data[i].created_at.substr(0, 9);
        celdaActualizado.textContent = usuarios.data[i].updated_at.substr(0, 9);


        row.appendChild(celdaId);
        row.appendChild(celdaUsuario);
        row.appendChild(celdaCompostera);
        row.appendChild(celdaCiclo);
        row.appendChild(celdaInicioCiclo);
        row.appendChild(celdaCreado);
        row.appendChild(celdaActualizado);

        tBody.appendChild(row)



    }
    table.appendChild(tBody)
    main.appendChild(table)
    main.classList.add('flex', 'justify-center')

    // haciendo click en los apartados por separado

    if (document.querySelectorAll('.celdaId').length >= 1) {
        let ids = document.querySelectorAll('.celdaId')

        ids.forEach(celda => {
            celda.addEventListener('click', (e) => {
                let id = e.target.textContent;
                console.log(id);
            })
        })
    }
})