//#region [OUTDATED]


console.log("hola estoy dentro de vite");
const main = document.querySelector(".main")


async function getRegistros() {
    try {
        let response = await fetch('http://localhost:8000/api/registros')
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}
async function getCentro(id) {
    try {
        let response = await fetch(`http://localhost:8000/api/centros/${id}`)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

async function getUser(id) { // porque me odias tambien
    try {
        let response = await fetch(`http://localhost:8000/api/users/${id}`)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

let registros = document.querySelector("#registros")

registros.addEventListener('click', async () => {
    main.innerHTML = ''
    let registros = await getRegistros()
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

    table.classList.add("text-white", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
    console.log(registros.data);
    for (let i = 0; i < registros.data.length; i++) {

        let centro = await getUser(registros.data[i].user_id) // porque me odias 

        console.log(centro);

        let row = document.createElement("tr")
        row.classList.add("border")

        let celdaId = document.createElement("td");
        celdaId.classList.add("celdaId", "p-2");
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

        celdaId.textContent = registros.data[i].id;
        celdaUsuario.textContent = registros.data[i].user_id;
        celdaCompostera.textContent = registros.data[i].compostera_id;
        celdaCiclo.textContent = registros.data[i].ciclo_id;
        celdaInicioCiclo.textContent = registros.data[i].inicio_ciclo;
        celdaCreado.textContent = registros.data[i].created_at.substr(0, 10);
        celdaActualizado.textContent = registros.data[i].updated_at.substr(0, 10);


        row.appendChild(celdaId);
        row.appendChild(celdaUsuario);
        row.appendChild(celdaCompostera);
        row.appendChild(celdaCiclo);
        row.appendChild(celdaInicioCiclo);
        row.appendChild(celdaCreado);
        row.appendChild(celdaActualizado);

        tBody.appendChild(row)



    }
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    table.appendChild(tBody)
    div2.appendChild(table)
    div2.classList.add('flex', 'justify-center', "inline-block", "min-w-full", "py-2", "align-middle")
    div1.appendChild(div2)
    div1.classList.add("mt-8", "overflow-x-auto")
    main.appendChild(div1)
    main.classList.add("flow-root")
    document.querySelector(".bg-placeholder").classList.add("bg-slate-900")

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