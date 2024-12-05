const main = document.querySelector(".main")
const token = sessionStorage.getItem('sessionToken')
const botonInsertar = document.querySelector(".insertarRegistro")

const option = {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}

async function getComposteras() {
    try {
        let response = await fetch(`/api/composteras`, option)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

botonInsertar.addEventListener('click', async (e) => {
    e.preventDefault()
    main.innerHTML = ''
    let registros = await getComposteras()
    console.log(registros.data);

    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let trColumna = document.createElement("tr")
    let thId = document.createElement("th")
    let thCodigo = document.createElement("th")
    let thCreado = document.createElement("th")
    let thActualizado = document.createElement("th")
    
    thId.innerHTML = "id"
    thCodigo.innerHTML = "codigo"
    thCreado.innerHTML = "creado"
    thActualizado.innerHTML = "actualizado"
    
    trColumna.appendChild(thId)
    trColumna.appendChild(thCodigo)
    trColumna.appendChild(thCreado)
    trColumna.appendChild(thActualizado)
    
    
    thead.appendChild(trColumna)
    table.appendChild(thead)
    
    let tBody = document.createElement("tbody")
    
    table.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
    console.log(registros.data);
    for (let i = 0; i < registros.data.length; i++) {
        
        // vamos a crear el boton del id de los usuarios para poder acceder a todos los registros realizados por un solo usuario
        
        let row = document.createElement("tr")
        row.classList.add("border")
        
        let celdaId = document.createElement("td");
        celdaId.classList.add("celdaId", "p-2");
        let celdaCodigo = document.createElement("td");
        celdaCodigo.classList.add("celdaUsuario");
        let celdaCreado = document.createElement("td");
        celdaCreado.classList.add("celdaCreado");
        let celdaActualizado = document.createElement("td");
        celdaActualizado.classList.add("celdaActualizado");
        
        celdaId.innerHTML = `<button class="boloId">${registros.data[i].id}</button>`;
        celdaCodigo.innerHTML = registros.data[i].codigo;
        celdaCreado.textContent = registros.data[i].created_at.substr(0, 10);
        celdaActualizado.textContent = registros.data[i].updated_at.substr(0, 10);
        
        
        row.appendChild(celdaId);
        row.appendChild(celdaCodigo);
        row.appendChild(celdaCreado);
        row.appendChild(celdaActualizado);
        
        tBody.appendChild(row)
        
        
        
    }
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    table.appendChild(tBody)
    div2.appendChild(table)
    div2.classList.add('flex', 'justify-center', "inline-block", "min-w-full", "py-2", "align-middle", "soy-tonto")
    div1.appendChild(div2)
    div1.classList.add("mt-8", "overflow-x-auto")
    main.innerHTML = '<h1>Composteras</h1>'
    main.appendChild(div1)
    main.classList.add("flow-root") 
})