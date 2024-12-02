console.log("hola estoy dentro de vite");
const main = document.querySelector(".main")
const token = sessionStorage.getItem('sessionToken')
let spinner = document.querySelector(".spinner")
console.log(token);


const option = {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}

async function getRegistros() {
    try {
        let response = await fetch(`/api/registros`, option)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

async function getRegistro(id) {
    try {
        let response = await fetch(`/api/registros/${id}`, option)
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
        let response = await fetch(`/api/centros/${id}`, option)
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
        let response = await fetch(`/api/users/${id}`, option)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

async function getRegisterUserHasManyRelation(userId) {
    try {
        let response = await fetch(`/api/users/${userId}/registros`, option)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

async function getAntes(registroId) {
    try {
        let response = await fetch(`/api/registros/${registroId}/antes`, option)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}
async function getDurante(registroId) {
    try {
        let response = await fetch(`/api/registros/${registroId}/durante`, option)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}
async function getDespues(registroId) {
    try {
        let response = await fetch(`/api/registros/${registroId}/despues`, option)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

async function getBolos() {
    try {
        let response = await fetch(`/api/bolos`, option)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

async function getBoloHasManyCiclos(idBolo) {
    try {
        let response = await fetch(`/api/bolos/${idBolo}/ciclos`, option)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

async function getCiclosHasManyRegistros(idCiclo) {
    try {
        let response = await fetch(`/api/ciclos/${idCiclo}/registros`, option)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

async function getCiclo(idCiclo) {
    try {
        let response = await fetch(`/api/ciclos/${idCiclo}`, option)
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

//#region informacion cargada al entrar en la pagina de bolos y ciclos

document.addEventListener('DOMContentLoaded', async () => {
    main.innerHTML = ''
    
    let registros = await getBolos();
    if (!registros.length) {
        spinner.classList.remove("hidden")
    }
    
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let trColumna = document.createElement("tr")
    let thId = document.createElement("th")
    let thObservaciones = document.createElement("th")
    let thCreado = document.createElement("th")
    let thActualizado = document.createElement("th")
    
    thId.innerHTML = "id"
    thObservaciones.innerHTML = "observaciones"
    thCreado.innerHTML = "creado"
    thActualizado.innerHTML = "actualizado"
    
    trColumna.appendChild(thId)
    trColumna.appendChild(thObservaciones)
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
        let celdaObservaciones = document.createElement("td");
        celdaObservaciones.classList.add("celdaUsuario");
        let celdaCreado = document.createElement("td");
        celdaCreado.classList.add("celdaCreado");
        let celdaActualizado = document.createElement("td");
        celdaActualizado.classList.add("celdaActualizado");
        
        celdaId.innerHTML = `<button class="boloId">${registros.data[i].id}</button>`;
        celdaObservaciones.innerHTML = registros.data[i].observaciones;
        celdaCreado.textContent = registros.data[i].created_at.substr(0, 10);
        celdaActualizado.textContent = registros.data[i].updated_at.substr(0, 10);
        
        
        row.appendChild(celdaId);
        row.appendChild(celdaObservaciones);
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
    main.innerHTML = '<h1>Bolos</h1>'
    main.appendChild(div1)
    main.classList.add("flow-root")
    spinner.classList.add("hidden")
    document.querySelector(".bg-placeholder").classList.add("bg-slate-900")

    let botonIdBolo = document.querySelectorAll(".boloId")
    botonIdBolo.forEach((boton) => {
        boton.addEventListener("click", async (e) => {
            let boloId = e.target.textContent
            let registroCiclos = await getBoloHasManyCiclos(boloId)
            main.innerHTML = ""
            let registros = await getBolos();
            if (!registros.length) {
                spinner.classList.remove("hidden")
            }

            let table = document.createElement("table")
            let thead = document.createElement("thead")
            let trColumna = document.createElement("tr")
            let thId = document.createElement("th")
            let thObservaciones = document.createElement("th")
            let thCreado = document.createElement("th")
            let thActualizado = document.createElement("th")

            thId.innerHTML = "id"
            thObservaciones.innerHTML = "observaciones"
            thCreado.innerHTML = "creado"
            thActualizado.innerHTML = "actualizado"

            trColumna.appendChild(thId)
            trColumna.appendChild(thObservaciones)
            trColumna.appendChild(thCreado)
            trColumna.appendChild(thActualizado)


            thead.appendChild(trColumna)
            table.appendChild(thead)

            let tBody = document.createElement("tbody")

            table.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
            console.log(registros.data);

            // vamos a crear el boton del id de los usuarios para poder acceder a todos los registros realizados por un solo usuario

            let row = document.createElement("tr")
            row.classList.add("border")

            let celdaId = document.createElement("td");
            celdaId.classList.add("celdaId", "p-2");
            let celdaObservaciones = document.createElement("td");
            celdaObservaciones.classList.add("celdaUsuario");
            let celdaCreado = document.createElement("td");
            celdaCreado.classList.add("celdaCreado");
            let celdaActualizado = document.createElement("td");
            celdaActualizado.classList.add("celdaActualizado");

            celdaId.innerHTML = registros.data[0].id;
            celdaObservaciones.innerHTML = registros.data[0].observaciones;
            celdaCreado.textContent = registros.data[0].created_at.substr(0, 10);
            celdaActualizado.textContent = registros.data[0].updated_at.substr(0, 10);


            row.appendChild(celdaId);
            row.appendChild(celdaObservaciones);
            row.appendChild(celdaCreado);
            row.appendChild(celdaActualizado);

            tBody.appendChild(row)

            let div1 = document.createElement("div")
            let div2 = document.createElement("div")
            table.appendChild(tBody)
            div2.appendChild(table)
            div2.classList.add('flex', 'justify-center', "inline-block", "min-w-full", "py-2", "align-middle", "soy-tonto")
            div1.appendChild(div2)
            div1.classList.add("mt-8", "overflow-x-auto")
            main.appendChild(div1)
            main.classList.add("flow-root")

            let tableCiclo = document.createElement("table")
            let theadCiclo = document.createElement("thead")
            let trColumnaCiclo = document.createElement("tr")
            let thIdCiclo = document.createElement("th")
            let thNCiclo = document.createElement("th")
            let thIdBoloCiclo = document.createElement("th")
            let thFechaInicio = document.createElement("th")
            let thFechaFin = document.createElement("th")
            let thCreadoCiclo = document.createElement("th")
            let thActualizadoCiclo = document.createElement("th")

            thIdCiclo.innerHTML = "id"
            thNCiclo.innerHTML = "numero ciclo"
            thIdBoloCiclo.innerHTML = "id bolo"
            thFechaInicio.innerHTML = "fecha inicio"
            thFechaFin.innerHTML = "fecha fin"
            thCreadoCiclo.innerHTML = "creado"
            thActualizadoCiclo.innerHTML = "actualizado"

            trColumnaCiclo.appendChild(thIdCiclo)
            trColumnaCiclo.appendChild(thNCiclo)
            trColumnaCiclo.appendChild(thIdBoloCiclo)
            trColumnaCiclo.appendChild(thFechaInicio)
            trColumnaCiclo.appendChild(thFechaFin)
            trColumnaCiclo.appendChild(thCreado)
            trColumnaCiclo.appendChild(thActualizado)


            theadCiclo.appendChild(trColumnaCiclo)
            tableCiclo.appendChild(theadCiclo)

            let tBodyCiclo = document.createElement("tbody")
            let n = 1
            tableCiclo.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
            for (let i = 0; i < registroCiclos.data.length; i++) {
                console.log(registroCiclos.data[i]);

                // vamos a crear el boton del id de los usuarios para poder acceder a todos los registros realizados por un solo usuario

                let rowCiclo = document.createElement("tr")
                rowCiclo.classList.add("border")

                let celdaIdCiclo = document.createElement("td");
                celdaIdCiclo.classList.add("celdaId", "p-2")
                let celdaNCiclo = document.createElement("td");
                celdaNCiclo.classList.add("celdaId", "p-2")
                let celdaIdBolo = document.createElement("td");
                celdaIdBolo.classList.add("celdaId", "p-2");
                let celdaInicioCiclo = document.createElement("td");
                celdaInicioCiclo.classList.add("celdaUsuario");
                let celdaFinCiclo = document.createElement("td");
                celdaFinCiclo.classList.add("celdaUsuario");
                let celdaCreado = document.createElement("td");
                celdaCreado.classList.add("celdaCreado");
                let celdaActualizado = document.createElement("td");
                celdaActualizado.classList.add("celdaActualizado");


                celdaIdCiclo.innerHTML = `<button class="idCiclo">${registroCiclos.data[i].id}</button>`
                celdaNCiclo.textContent = n++
                celdaIdBolo.innerHTML = registroCiclos.data[i].bolo_id;
                celdaInicioCiclo.innerHTML = registroCiclos.data[i].fecha_inicio;
                celdaFinCiclo.innerHTML = registroCiclos.data[i].fecha_fin;
                celdaCreado.textContent = registroCiclos.data[i].created_at.substr(0, 10);
                celdaActualizado.textContent = registroCiclos.data[i].updated_at.substr(0, 10);

                rowCiclo.appendChild(celdaIdCiclo);
                rowCiclo.appendChild(celdaNCiclo);
                rowCiclo.appendChild(celdaIdBolo);
                rowCiclo.appendChild(celdaInicioCiclo);
                rowCiclo.appendChild(celdaFinCiclo);
                rowCiclo.appendChild(celdaCreado);
                rowCiclo.appendChild(celdaActualizado);

                tBodyCiclo.appendChild(rowCiclo)

            }
            tableCiclo.appendChild(tBodyCiclo)
            main.innerHTML = `<h1>ciclos del bolo ${boloId}</h1>`
            main.appendChild(tableCiclo)
            
            spinner.classList.add("hidden")
            document.querySelector(".bg-placeholder").classList.add("bg-slate-900")
            
            let botonesIdCiclos = document.querySelectorAll(".idCiclo")
            botonesIdCiclos.forEach((boton) => {
                boton.addEventListener("click", async (e) => {
                    let idCiclo = e.target.textContent
                    main.innerHTML = ""
                    
                    let registros = await getCiclosHasManyRegistros(idCiclo)
                    let registroCiclo = await getCiclo(idCiclo)
                    if (!registroCiclo.length || !registroCiclo.length) {
                        spinner.classList.remove("hidden")
                    }
                    
                    
                    let tableCiclo = document.createElement("table")
                    let theadCiclo = document.createElement("thead")
                    let trColumnaCiclo = document.createElement("tr")
                    let thIdCiclo = document.createElement("th")
                    let thNCiclo = document.createElement("th")
                    let thIdBoloCiclo = document.createElement("th")
                    let thFechaInicio = document.createElement("th")
                    let thFechaFin = document.createElement("th")
                    let thCreadoCiclo = document.createElement("th")
                    let thActualizadoCiclo = document.createElement("th")
                    
                    thIdCiclo.innerHTML = "id"
                    thNCiclo.innerHTML = "numero ciclo"
                    thIdBoloCiclo.innerHTML = "id bolo"
                    thFechaInicio.innerHTML = "fecha inicio"
                    thFechaFin.innerHTML = "fecha fin"
                    thCreadoCiclo.innerHTML = "creado"
                    thActualizadoCiclo.innerHTML = "actualizado"
                    
                    trColumnaCiclo.appendChild(thIdCiclo)
                    trColumnaCiclo.appendChild(thNCiclo)
                    trColumnaCiclo.appendChild(thIdBoloCiclo)
                    trColumnaCiclo.appendChild(thFechaInicio)
                    trColumnaCiclo.appendChild(thFechaFin)
                    trColumnaCiclo.appendChild(thCreadoCiclo)
                    trColumnaCiclo.appendChild(thActualizadoCiclo)
                    
                    
                    theadCiclo.appendChild(trColumnaCiclo)
                    tableCiclo.appendChild(theadCiclo)
                    
                    let tBodyCiclo = document.createElement("tbody")
                    let n = 1
                    tableCiclo.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
                    // vamos a crear el boton del id de los usuarios para poder acceder a todos los registros realizados por un solo usuario
                    
                    let rowCiclo = document.createElement("tr")
                    rowCiclo.classList.add("border")
                    
                    let celdaIdCiclo = document.createElement("td");
                    celdaIdCiclo.classList.add("celdaId", "p-2")
                    let celdaNCiclo = document.createElement("td");
                    celdaNCiclo.classList.add("celdaId", "p-2")
                    let celdaIdBolo = document.createElement("td");
                    celdaIdBolo.classList.add("celdaId", "p-2");
                    let celdaInicioCiclo = document.createElement("td");
                    celdaInicioCiclo.classList.add("celdaUsuario");
                    let celdaFinCiclo = document.createElement("td");
                    celdaFinCiclo.classList.add("celdaUsuario");
                    let celdaCreado = document.createElement("td");
                    celdaCreado.classList.add("celdaCreado");
                    let celdaActualizado = document.createElement("td");
                    celdaActualizado.classList.add("celdaActualizado");
                    
                    
                    celdaIdCiclo.innerHTML = registroCiclo.data.id
                    celdaNCiclo.textContent = n++
                    celdaIdBolo.innerHTML = registroCiclo.data.bolo_id;
                    celdaInicioCiclo.innerHTML = registroCiclo.data.fecha_inicio;
                    celdaFinCiclo.innerHTML = registroCiclo.data.fecha_fin;
                    celdaCreado.textContent = registroCiclo.data.created_at.substr(0, 10);
                    celdaActualizado.textContent = registroCiclo.data.updated_at.substr(0, 10);
                    
                    rowCiclo.appendChild(celdaIdCiclo);
                    rowCiclo.appendChild(celdaNCiclo);
                    rowCiclo.appendChild(celdaIdBolo);
                    rowCiclo.appendChild(celdaInicioCiclo);
                    rowCiclo.appendChild(celdaFinCiclo);
                    rowCiclo.appendChild(celdaCreado);
                    rowCiclo.appendChild(celdaActualizado);
                    
                    tBodyCiclo.appendChild(rowCiclo)
                    
                    tableCiclo.appendChild(tBodyCiclo)
                    main.innerHTML = `<h1>registros del ciclo ${idCiclo}</h1>`
                    main.appendChild(tableCiclo)


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
                    
                    table.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
                    console.log(registros.data);
                    for (let i = 0; i < registros.data.length; i++) {
                        
                        
                        let user = await getUser(registros.data[i].user_id) // porque me odias 
                        
                        // vamos a crear el boton del id de los usuarios para poder acceder a todos los registros realizados por un solo usuario
                        
                        console.log(registros.data[i].user_id);
                        console.log(user.data.name);
                        
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
                        
                        celdaId.innerHTML = `<button class="buttonId">${registros.data[i].id}</button>`;
                        celdaUsuario.innerHTML = `<button class="buttonIdUser">${registros.data[i].user_id}</button>${user.data.name}`;
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
                    div2.classList.add('flex', 'justify-center', "inline-block", "min-w-full", "py-2", "align-middle", "soy-tonto")
                    div1.appendChild(div2)
                    div1.classList.add("mt-8", "overflow-x-auto")
                    main.appendChild(div1)
                    main.classList.add("flow-root")
                    spinner.classList.add("hidden")
                    document.querySelector(".bg-placeholder").classList.add("bg-slate-900")
                    
                    const botonId = document.querySelectorAll(".buttonId")
                    console.log(botonId);
                    botonId.forEach(boton => {
                        boton.addEventListener('click', async (e) => {
                            let Id = e.target.textContent
                            console.log("id registro: " + Id);
                            main.innerHTML = ''
                            
                            let registroEntero = await getRegistro(Id)
                            let registrosAntes = await getAntes(Id)
                            let registrosDurante = await getDurante(Id)
                            let registrosDespues = await getDespues(Id)
                            
                            if (!registroEntero.length || !registrosAntes.length || !registrosDurante.length || registrosDespues.length) {
                                spinner.classList.remove("hidden")
                            }
                            
                            console.log(registrosAntes.data[0]);
                            
                            // crear tabla registro entero
                            
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
                            
                            table.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
                            console.log(registros.data);
                            
                            let user = await getUser(registroEntero.data.user_id) // porque me odias 
                            
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
                            
                            celdaId.textContent = registroEntero.data.id;
                            celdaUsuario.innerHTML = `<button class="buttonIdUser"><p>${registroEntero.data.user_id}<p></button>${user.data.name}`;
                            celdaCompostera.textContent = registroEntero.data.compostera_id;
                            celdaCiclo.textContent = registroEntero.data.ciclo_id;
                            celdaInicioCiclo.textContent = registroEntero.data.inicio_ciclo;
                            celdaCreado.textContent = registroEntero.data.created_at.substr(0, 10);
                            celdaActualizado.textContent = registroEntero.data.updated_at.substr(0, 10);
                            
                            
                            row.appendChild(celdaId);
                            row.appendChild(celdaUsuario);
                            row.appendChild(celdaCompostera);
                            row.appendChild(celdaCiclo);
                            row.appendChild(celdaInicioCiclo);
                            row.appendChild(celdaCreado);
                            row.appendChild(celdaActualizado);
                            
                            tBody.appendChild(row)
                            
                            table.appendChild(tBody)
                            main.innerHTML = '<h1>Estado de registros</h1>'
                            main.appendChild(table)
                            
                            // TABLA ANTES
                            
                            let tableAntes = document.createElement("table")
                            let theadAntes = document.createElement("thead")
                            let trColumnaAntes = document.createElement("tr")
                            
                            // Crear nuevos encabezados (th) con nombres actualizados
                            let thHumedad = document.createElement("th");
                            let thNivelLLenado = document.createElement("th");
                            let thObservaciones = document.createElement("th");
                            let thOlor = document.createElement("th");
                            let thInsectos = document.createElement("th");
                            let thTempAmbiental = document.createElement("th");
                            let thTempComp = document.createElement("th");
                            let thCreadoAntes = document.createElement("th");
                            let thActualizadoAntes = document.createElement("th");
                            
                            // Asignar contenido a los encabezados
                            thHumedad.innerHTML = "Humedad";
                            thNivelLLenado.innerHTML = "Nivel de Llenado";
                            thObservaciones.innerHTML = "Observaciones";
                            thOlor.innerHTML = "Olor";
                            thInsectos.innerHTML = "Insectos";
                            thTempAmbiental.innerHTML = "Temperatura Ambiental";
                            thTempComp.innerHTML = "Temperatura Compostera";
                            thCreadoAntes.innerHTML = "Creado";
                            thActualizadoAntes.innerHTML = "Actualizado";
                            
                            // Agregar los nuevos encabezados a la fila de la tabla
                            trColumnaAntes.appendChild(thHumedad);
                            trColumnaAntes.appendChild(thNivelLLenado);
                            trColumnaAntes.appendChild(thObservaciones);
                            trColumnaAntes.appendChild(thOlor);
                            trColumnaAntes.appendChild(thInsectos);
                            trColumnaAntes.appendChild(thTempAmbiental);
                            trColumnaAntes.appendChild(thTempComp);
                            trColumnaAntes.appendChild(thCreadoAntes);
                            trColumnaAntes.appendChild(thActualizadoAntes);
                            
                            
                            
                            theadAntes.appendChild(trColumnaAntes)
                            tableAntes.appendChild(theadAntes)
                            
                            let tBodyAntes = document.createElement("tbody")
                            
                            tableAntes.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
                            console.log(registros.data);
                            
                            let rowAntes = document.createElement("tr")
                            row.classList.add("border")
                            
                            // Crear nuevas celdas para las filas de datos
                            let celdaHumedad = document.createElement("td");
                            celdaHumedad.classList.add("celdaHumedad", "p-2");
                            
                            let celdaNivelLlenado = document.createElement("td");
                            celdaNivelLlenado.classList.add("celdaNivelLlenado", "p-2");
                            
                            let celdaObservaciones = document.createElement("td");
                            celdaObservaciones.classList.add("celdaObservaciones", "p-2");
                            
                            let celdaOlor = document.createElement("td");
                            celdaOlor.classList.add("celdaOlor", "p-2");
                            
                            let celdaInsectos = document.createElement("td");
                            celdaInsectos.classList.add("celdaInsectos", "p-2");
                            
                            let celdaTempAmbiental = document.createElement("td");
                            celdaTempAmbiental.classList.add("celdaTempAmbiental", "p-2");
                            
                            let celdaTempComp = document.createElement("td");
                            celdaTempComp.classList.add("celdaTempComp", "p-2");
                            
                            let celdaCreadoAntes = document.createElement("td");
                            celdaCreadoAntes.classList.add("celdaCreadoAntes", "p-2");
                            
                            let celdaActualizadoAntes = document.createElement("td");
                            celdaActualizadoAntes.classList.add("celdaActualizadoAntes", "p-2");
                            
                            
                            celdaHumedad.textContent = registrosAntes.data[0].humedad || "N/A";
                            celdaNivelLlenado.textContent = registrosAntes.data[0].nivel_llenado || "N/A";
                            celdaObservaciones.textContent = registrosAntes.data[0].observaciones || "Sin observaciones";
                            celdaOlor.textContent = registrosAntes.data[0].olor || "Normal";
                            celdaInsectos.textContent = registrosAntes.data[0].presencia_insectos || "No especificado";
                            celdaTempAmbiental.textContent = registrosAntes.data[0].temperatura_ambiental || "N/A";
                            celdaTempComp.textContent = registrosAntes.data[0].temperatura_compostera || "N/A";
                            celdaCreadoAntes.textContent = registrosAntes.data[0].created_at.substr(0, 10);
                            celdaActualizadoAntes.textContent = registrosAntes.data[0].updated_at.substr(0, 10);
                            
                            
                            rowAntes.appendChild(celdaHumedad);
                            rowAntes.appendChild(celdaNivelLlenado);
                            rowAntes.appendChild(celdaObservaciones);
                            rowAntes.appendChild(celdaOlor);
                            rowAntes.appendChild(celdaInsectos);
                            rowAntes.appendChild(celdaTempAmbiental);
                            rowAntes.appendChild(celdaTempComp);
                            rowAntes.appendChild(celdaCreadoAntes);
                            rowAntes.appendChild(celdaActualizadoAntes);
                            
                            
                            tBodyAntes.appendChild(rowAntes)
                            
                            
                            tableAntes.appendChild(tBodyAntes)
                            // main.innerHTML = `<h3 class="text-white font-bold">Antes</h3>`
                            main.appendChild(tableAntes)
                            
                            // TABLA DURANTE
                            
                            let tableDurante = document.createElement("table");
                            let theadDurante = document.createElement("thead");
                            let trColumnaDurante = document.createElement("tr");
                            
                            // Crear nuevos encabezados (th) con los nombres actualizados
                            let thRiego = document.createElement("th");
                            let thRevolver = document.createElement("th");
                            let thAporteVerde = document.createElement("th");
                            let thTipoAporteVerde = document.createElement("th");
                            let thAporteSeco = document.createElement("th");
                            let thObservacionesDurante = document.createElement("th");
                            let thCreadoDurante = document.createElement("th");
                            let thActualizadoDurante = document.createElement("th");
                            
                            // Asignar contenido a los encabezados
                            thRiego.innerHTML = "Riego";
                            thRevolver.innerHTML = "Revolver";
                            thAporteVerde.innerHTML = "Aporte Verde";
                            thTipoAporteVerde.innerHTML = "Tipo Aporte Verde";
                            thAporteSeco.innerHTML = "Aporte Seco";
                            thObservacionesDurante.innerHTML = "Observaciones";
                            thCreadoDurante.innerHTML = "Creado";
                            thActualizadoDurante.innerHTML = "Actualizado";
                            
                            // Agregar los nuevos encabezados a la fila de la tabla
                            trColumnaDurante.appendChild(thRiego);
                            trColumnaDurante.appendChild(thRevolver);
                            trColumnaDurante.appendChild(thAporteVerde);
                            trColumnaDurante.appendChild(thTipoAporteVerde);
                            trColumnaDurante.appendChild(thAporteSeco);
                            trColumnaDurante.appendChild(thObservacionesDurante);
                            trColumnaDurante.appendChild(thCreadoDurante);
                            trColumnaDurante.appendChild(thActualizadoDurante);
                            
                            theadDurante.appendChild(trColumnaDurante);
                            tableDurante.appendChild(theadDurante);
                            
                            let tBodyDurante = document.createElement("tbody");
                            
                            tableDurante.classList.add(
                                "text-white",
                                "text-center",
                                "w-full",
                                "divide-y",
                                "bg-slate-850",
                                "divide-slate-700"
                            );
                            console.log(registros.data);
                            
                            let rowDurante = document.createElement("tr");
                            
                            // Crear nuevas celdas para las filas de datos
                            let celdaRiego = document.createElement("td");
                            celdaRiego.classList.add("celdaRiego", "p-2");
                            
                            let celdaRevolver = document.createElement("td");
                            celdaRevolver.classList.add("celdaRevolver", "p-2");

                            let celdaAporteVerde = document.createElement("td");
                            celdaAporteVerde.classList.add("celdaAporteVerde", "p-2");

                            let celdaTipoAporteVerde = document.createElement("td");
                            celdaTipoAporteVerde.classList.add("celdaTipoAporteVerde", "p-2");

                            let celdaAporteSeco = document.createElement("td");
                            celdaAporteSeco.classList.add("celdaAporteSeco", "p-2");

                            let celdaObservacionesDurante = document.createElement("td");
                            thObservacionesDurante.classList.add("celdaObservaciones", "p-2");

                            let celdaCreadoDurante = document.createElement("td");
                            celdaCreadoDurante.classList.add("celdaCreadoDurante", "p-2");

                            let celdaActualizadoDurante = document.createElement("td");
                            celdaActualizadoDurante.classList.add("celdaActualizadoDurante", "p-2");

                            // Asignar contenido a las celdas
                            celdaRiego.textContent = registrosDurante.data[0].riego || "No especificado";
                            celdaRevolver.textContent = registrosDurante.data[0].revolver || "No especificado";
                            celdaAporteVerde.textContent = registrosDurante.data[0].aporte_verde || "No especificado";
                            celdaTipoAporteVerde.textContent = registrosDurante.data[0].tipo_aporte_verde || "No especificado";
                            celdaAporteSeco.textContent = registrosDurante.data[0].aporte_seco || "No especificado";
                            celdaObservacionesDurante.textContent = registrosDurante.data[0].observaciones || "Sin observaciones";
                            celdaCreadoDurante.textContent = registrosDurante.data[0].created_at.substr(0, 10);
                            celdaActualizadoDurante.textContent = registrosDurante.data[0].updated_at.substr(0, 10);

                            // Agregar celdas a la fila
                            rowDurante.appendChild(celdaRiego);
                            rowDurante.appendChild(celdaRevolver);
                            rowDurante.appendChild(celdaAporteVerde);
                            rowDurante.appendChild(celdaTipoAporteVerde);
                            rowDurante.appendChild(celdaAporteSeco);
                            rowDurante.appendChild(celdaObservacionesDurante);
                            rowDurante.appendChild(celdaCreadoDurante);
                            rowDurante.appendChild(celdaActualizadoDurante);

                            tBodyDurante.appendChild(rowDurante);

                            tableDurante.appendChild(tBodyDurante);

                            main.appendChild(tableDurante)
                            main.appendChild(tableDurante);

                            // TABLA DESPUES

                            let tableDespues = document.createElement("table");
                            let theadDespues = document.createElement("thead");
                            let trColumnaDespues = document.createElement("tr");

                            // Crear nuevos encabezados (th) con los nombres actualizados
                            let thNivelLlenadoDespues = document.createElement("th");
                            let thObservacionesDespues = document.createElement("th");
                            let thCreadoDespues = document.createElement("th");
                            let thActualizadoDespues = document.createElement("th");

                            // Asignar contenido a los encabezados
                            thNivelLlenadoDespues.innerHTML = "Nivel de Llenado";
                            thObservacionesDespues.innerHTML = "Observaciones";
                            thCreadoDespues.innerHTML = "Creado";
                            thActualizadoDespues.innerHTML = "Actualizado";

                            // Agregar los nuevos encabezados a la fila de la tabla
                            trColumnaDespues.appendChild(thNivelLlenadoDespues);
                            trColumnaDespues.appendChild(thObservacionesDespues);
                            trColumnaDespues.appendChild(thCreadoDespues);
                            trColumnaDespues.appendChild(thActualizadoDespues);

                            theadDespues.appendChild(trColumnaDespues);
                            tableDespues.appendChild(theadDespues);

                            let tBodyDespues = document.createElement("tbody");

                            tableDespues.classList.add(
                                "text-white",
                                "text-center",
                                "w-full",
                                "divide-y",
                                "bg-slate-850",
                                "divide-slate-700"
                            );

                            // Crear la fila para los datos
                            let rowDespues = document.createElement("tr");

                            // Crear nuevas celdas para las filas de datos
                            let celdaNivelLlenadoDespues = document.createElement("td");
                            celdaNivelLlenadoDespues.classList.add("celdaNivelLlenado", "p-2");

                            let celdaObservacionesDespues = document.createElement("td");
                            celdaObservacionesDespues.classList.add("celdaObservaciones", "p-2");

                            let celdaCreadoDespues = document.createElement("td");
                            celdaCreadoDespues.classList.add("celdaCreado", "p-2");

                            let celdaActualizadoDespues = document.createElement("td");
                            celdaActualizadoDespues.classList.add("celdaActualizado", "p-2");

                            celdaNivelLlenadoDespues.textContent = 98; // Nivel de llenado
                            celdaObservacionesDespues.textContent = "Cumque beatae et quia dolorem aut ut sunt in."; // Observaciones
                            celdaCreadoDespues.textContent = "2024-11-29"; // Fecha de creación
                            celdaActualizadoDespues.textContent = "2024-11-29"; // Fecha de actualización

                            rowDespues.appendChild(celdaNivelLlenadoDespues);
                            rowDespues.appendChild(celdaObservacionesDespues);
                            rowDespues.appendChild(celdaCreadoDespues);
                            rowDespues.appendChild(celdaActualizadoDespues);

                            tBodyDespues.appendChild(rowDespues);
                            tableDespues.appendChild(tBodyDespues);
                            main.appendChild(tableDespues);


                            main.classList.add("flow-root")
                            document.querySelector(".bg-placeholder").classList.add("bg-slate-900")

                            spinner.classList.add("hidden")
                        })
                    })

                })
            })
        })
    })

})


let registros = document.querySelector("#registros")

registros.addEventListener('click', async () => {
    main.innerHTML = ''
    let registros = []

    registros = await getRegistros() // CONSULTA
    if (!registros.length) {
        spinner.classList.remove("hidden")
    }

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

    table.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
    console.log(registros.data);
    for (let i = 0; i < registros.data.length; i++) {

        let user = await getUser(registros.data[i].user_id) // porque me odias 

        // vamos a crear el boton del id de los usuarios para poder acceder a todos los registros realizados por un solo usuario

        console.log(registros.data[i].user_id);
        console.log(user.data.name);

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

        celdaId.innerHTML = `<button class="buttonId">${registros.data[i].id}</button>`;
        celdaUsuario.innerHTML = `<button class="buttonIdUser">${registros.data[i].user_id}</button>${user.data.name}`;
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
    div2.classList.add('flex', 'justify-center', "inline-block", "min-w-full", "py-2", "align-middle", "soy-tonto")
    div1.appendChild(div2)
    div1.classList.add("mt-8", "overflow-x-auto")
    main.innerHTML = '<h1>Registros</h1>'
    main.appendChild(div1)
    main.classList.add("flow-root")
    spinner.classList.add("hidden")
    document.querySelector(".bg-placeholder").classList.add("bg-slate-900")

    // aqui se accede a los registros de forma manual de uno en uno pudiendo entrar en detalle de los ciclos


    const botonId = document.querySelectorAll(".buttonId")
    console.log(botonId);
    botonId.forEach(boton => {
        boton.addEventListener('click', async (e) => {
            let Id = e.target.textContent
            console.log("id registro: " + Id);
            main.innerHTML = ''

            let registroEntero = await getRegistro(Id)
            let registrosAntes = await getAntes(Id)
            let registrosDurante = await getDurante(Id)
            let registrosDespues = await getDespues(Id)

            console.log(registrosAntes.data[0]);

            // crear tabla registro entero

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

            table.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
            console.log(registros.data);

            let user = await getUser(registroEntero.data.user_id) // porque me odias 

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

            celdaId.textContent = registroEntero.data.id;
            celdaUsuario.innerHTML = `<button class="buttonIdUser"><p>${registroEntero.data.user_id}<p></button>${user.data.name}`;
            celdaCompostera.textContent = registroEntero.data.compostera_id;
            celdaCiclo.textContent = registroEntero.data.ciclo_id;
            celdaInicioCiclo.textContent = registroEntero.data.inicio_ciclo;
            celdaCreado.textContent = registroEntero.data.created_at.substr(0, 10);
            celdaActualizado.textContent = registroEntero.data.updated_at.substr(0, 10);


            row.appendChild(celdaId);
            row.appendChild(celdaUsuario);
            row.appendChild(celdaCompostera);
            row.appendChild(celdaCiclo);
            row.appendChild(celdaInicioCiclo);
            row.appendChild(celdaCreado);
            row.appendChild(celdaActualizado);

            tBody.appendChild(row)

            table.appendChild(tBody)
            main.innerHTML = '<h1>Estados de registro</h1>'
            main.appendChild(table)

            // TABLA ANTES

            let tableAntes = document.createElement("table")
            let theadAntes = document.createElement("thead")
            let trColumnaAntes = document.createElement("tr")

            // Crear nuevos encabezados (th) con nombres actualizados
            let thHumedad = document.createElement("th");
            let thNivelLLenado = document.createElement("th");
            let thObservaciones = document.createElement("th");
            let thOlor = document.createElement("th");
            let thInsectos = document.createElement("th");
            let thTempAmbiental = document.createElement("th");
            let thTempComp = document.createElement("th");
            let thCreadoAntes = document.createElement("th");
            let thActualizadoAntes = document.createElement("th");

            // Asignar contenido a los encabezados
            thHumedad.innerHTML = "Humedad";
            thNivelLLenado.innerHTML = "Nivel de Llenado";
            thObservaciones.innerHTML = "Observaciones";
            thOlor.innerHTML = "Olor";
            thInsectos.innerHTML = "Insectos";
            thTempAmbiental.innerHTML = "Temperatura Ambiental";
            thTempComp.innerHTML = "Temperatura Compostera";
            thCreadoAntes.innerHTML = "Creado";
            thActualizadoAntes.innerHTML = "Actualizado";

            // Agregar los nuevos encabezados a la fila de la tabla
            trColumnaAntes.appendChild(thHumedad);
            trColumnaAntes.appendChild(thNivelLLenado);
            trColumnaAntes.appendChild(thObservaciones);
            trColumnaAntes.appendChild(thOlor);
            trColumnaAntes.appendChild(thInsectos);
            trColumnaAntes.appendChild(thTempAmbiental);
            trColumnaAntes.appendChild(thTempComp);
            trColumnaAntes.appendChild(thCreadoAntes);
            trColumnaAntes.appendChild(thActualizadoAntes);



            theadAntes.appendChild(trColumnaAntes)
            tableAntes.appendChild(theadAntes)

            let tBodyAntes = document.createElement("tbody")

            tableAntes.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
            console.log(registros.data);

            let rowAntes = document.createElement("tr")
            row.classList.add("border")

            // Crear nuevas celdas para las filas de datos
            let celdaHumedad = document.createElement("td");
            celdaHumedad.classList.add("celdaHumedad", "p-2");

            let celdaNivelLlenado = document.createElement("td");
            celdaNivelLlenado.classList.add("celdaNivelLlenado", "p-2");

            let celdaObservaciones = document.createElement("td");
            celdaObservaciones.classList.add("celdaObservaciones", "p-2");

            let celdaOlor = document.createElement("td");
            celdaOlor.classList.add("celdaOlor", "p-2");

            let celdaInsectos = document.createElement("td");
            celdaInsectos.classList.add("celdaInsectos", "p-2");

            let celdaTempAmbiental = document.createElement("td");
            celdaTempAmbiental.classList.add("celdaTempAmbiental", "p-2");

            let celdaTempComp = document.createElement("td");
            celdaTempComp.classList.add("celdaTempComp", "p-2");

            let celdaCreadoAntes = document.createElement("td");
            celdaCreadoAntes.classList.add("celdaCreadoAntes", "p-2");

            let celdaActualizadoAntes = document.createElement("td");
            celdaActualizadoAntes.classList.add("celdaActualizadoAntes", "p-2");


            celdaHumedad.textContent = registrosAntes.data[0].humedad || "N/A";
            celdaNivelLlenado.textContent = registrosAntes.data[0].nivel_llenado || "N/A";
            celdaObservaciones.textContent = registrosAntes.data[0].observaciones || "Sin observaciones";
            celdaOlor.textContent = registrosAntes.data[0].olor || "Normal";
            celdaInsectos.textContent = registrosAntes.data[0].presencia_insectos || "No especificado";
            celdaTempAmbiental.textContent = registrosAntes.data[0].temperatura_ambiental || "N/A";
            celdaTempComp.textContent = registrosAntes.data[0].temperatura_compostera || "N/A";
            celdaCreadoAntes.textContent = registrosAntes.data[0].created_at.substr(0, 10);
            celdaActualizadoAntes.textContent = registrosAntes.data[0].updated_at.substr(0, 10);


            rowAntes.appendChild(celdaHumedad);
            rowAntes.appendChild(celdaNivelLlenado);
            rowAntes.appendChild(celdaObservaciones);
            rowAntes.appendChild(celdaOlor);
            rowAntes.appendChild(celdaInsectos);
            rowAntes.appendChild(celdaTempAmbiental);
            rowAntes.appendChild(celdaTempComp);
            rowAntes.appendChild(celdaCreadoAntes);
            rowAntes.appendChild(celdaActualizadoAntes);


            tBodyAntes.appendChild(rowAntes)


            tableAntes.appendChild(tBodyAntes)
            // main.innerHTML = `<h3 class="text-white font-bold">Antes</h3>`
            main.appendChild(tableAntes)

            // TABLA DURANTE

            let tableDurante = document.createElement("table");
            let theadDurante = document.createElement("thead");
            let trColumnaDurante = document.createElement("tr");

            // Crear nuevos encabezados (th) con los nombres actualizados
            let thRiego = document.createElement("th");
            let thRevolver = document.createElement("th");
            let thAporteVerde = document.createElement("th");
            let thTipoAporteVerde = document.createElement("th");
            let thAporteSeco = document.createElement("th");
            let thObservacionesDurante = document.createElement("th");
            let thCreadoDurante = document.createElement("th");
            let thActualizadoDurante = document.createElement("th");

            // Asignar contenido a los encabezados
            thRiego.innerHTML = "Riego";
            thRevolver.innerHTML = "Revolver";
            thAporteVerde.innerHTML = "Aporte Verde";
            thTipoAporteVerde.innerHTML = "Tipo Aporte Verde";
            thAporteSeco.innerHTML = "Aporte Seco";
            thObservacionesDurante.innerHTML = "Observaciones";
            thCreadoDurante.innerHTML = "Creado";
            thActualizadoDurante.innerHTML = "Actualizado";

            // Agregar los nuevos encabezados a la fila de la tabla
            trColumnaDurante.appendChild(thRiego);
            trColumnaDurante.appendChild(thRevolver);
            trColumnaDurante.appendChild(thAporteVerde);
            trColumnaDurante.appendChild(thTipoAporteVerde);
            trColumnaDurante.appendChild(thAporteSeco);
            trColumnaDurante.appendChild(thObservacionesDurante);
            trColumnaDurante.appendChild(thCreadoDurante);
            trColumnaDurante.appendChild(thActualizadoDurante);

            theadDurante.appendChild(trColumnaDurante);
            tableDurante.appendChild(theadDurante);

            let tBodyDurante = document.createElement("tbody");

            tableDurante.classList.add(
                "text-white",
                "text-center",
                "w-full",
                "divide-y",
                "bg-slate-850",
                "divide-slate-700"
            );
            console.log(registros.data);

            let rowDurante = document.createElement("tr");

            // Crear nuevas celdas para las filas de datos
            let celdaRiego = document.createElement("td");
            celdaRiego.classList.add("celdaRiego", "p-2");

            let celdaRevolver = document.createElement("td");
            celdaRevolver.classList.add("celdaRevolver", "p-2");

            let celdaAporteVerde = document.createElement("td");
            celdaAporteVerde.classList.add("celdaAporteVerde", "p-2");

            let celdaTipoAporteVerde = document.createElement("td");
            celdaTipoAporteVerde.classList.add("celdaTipoAporteVerde", "p-2");

            let celdaAporteSeco = document.createElement("td");
            celdaAporteSeco.classList.add("celdaAporteSeco", "p-2");

            let celdaObservacionesDurante = document.createElement("td");
            thObservacionesDurante.classList.add("celdaObservaciones", "p-2");

            let celdaCreadoDurante = document.createElement("td");
            celdaCreadoDurante.classList.add("celdaCreadoDurante", "p-2");

            let celdaActualizadoDurante = document.createElement("td");
            celdaActualizadoDurante.classList.add("celdaActualizadoDurante", "p-2");

            // Asignar contenido a las celdas
            celdaRiego.textContent = registrosDurante.data[0].riego || "No especificado";
            celdaRevolver.textContent = registrosDurante.data[0].revolver || "No especificado";
            celdaAporteVerde.textContent = registrosDurante.data[0].aporte_verde || "No especificado";
            celdaTipoAporteVerde.textContent = registrosDurante.data[0].tipo_aporte_verde || "No especificado";
            celdaAporteSeco.textContent = registrosDurante.data[0].aporte_seco || "No especificado";
            celdaObservacionesDurante.textContent = registrosDurante.data[0].observaciones || "Sin observaciones";
            celdaCreadoDurante.textContent = registrosDurante.data[0].created_at.substr(0, 10);
            celdaActualizadoDurante.textContent = registrosDurante.data[0].updated_at.substr(0, 10);

            // Agregar celdas a la fila
            rowDurante.appendChild(celdaRiego);
            rowDurante.appendChild(celdaRevolver);
            rowDurante.appendChild(celdaAporteVerde);
            rowDurante.appendChild(celdaTipoAporteVerde);
            rowDurante.appendChild(celdaAporteSeco);
            rowDurante.appendChild(celdaObservacionesDurante);
            rowDurante.appendChild(celdaCreadoDurante);
            rowDurante.appendChild(celdaActualizadoDurante);

            tBodyDurante.appendChild(rowDurante);

            tableDurante.appendChild(tBodyDurante);

            main.appendChild(tableDurante)
            main.appendChild(tableDurante);

            // TABLA DESPUES

            let tableDespues = document.createElement("table");
            let theadDespues = document.createElement("thead");
            let trColumnaDespues = document.createElement("tr");

            // Crear nuevos encabezados (th) con los nombres actualizados
            let thNivelLlenadoDespues = document.createElement("th");
            let thObservacionesDespues = document.createElement("th");
            let thCreadoDespues = document.createElement("th");
            let thActualizadoDespues = document.createElement("th");

            // Asignar contenido a los encabezados
            thNivelLlenadoDespues.innerHTML = "Nivel de Llenado";
            thObservacionesDespues.innerHTML = "Observaciones";
            thCreadoDespues.innerHTML = "Creado";
            thActualizadoDespues.innerHTML = "Actualizado";

            // Agregar los nuevos encabezados a la fila de la tabla
            trColumnaDespues.appendChild(thNivelLlenadoDespues);
            trColumnaDespues.appendChild(thObservacionesDespues);
            trColumnaDespues.appendChild(thCreadoDespues);
            trColumnaDespues.appendChild(thActualizadoDespues);

            theadDespues.appendChild(trColumnaDespues);
            tableDespues.appendChild(theadDespues);

            let tBodyDespues = document.createElement("tbody");

            tableDespues.classList.add(
                "text-white",
                "text-center",
                "w-full",
                "divide-y",
                "bg-slate-850",
                "divide-slate-700"
            );

            // Crear la fila para los datos
            let rowDespues = document.createElement("tr");

            // Crear nuevas celdas para las filas de datos
            let celdaNivelLlenadoDespues = document.createElement("td");
            celdaNivelLlenadoDespues.classList.add("celdaNivelLlenado", "p-2");

            let celdaObservacionesDespues = document.createElement("td");
            celdaObservacionesDespues.classList.add("celdaObservaciones", "p-2");

            let celdaCreadoDespues = document.createElement("td");
            celdaCreadoDespues.classList.add("celdaCreado", "p-2");

            let celdaActualizadoDespues = document.createElement("td");
            celdaActualizadoDespues.classList.add("celdaActualizado", "p-2");

            celdaNivelLlenadoDespues.textContent = 98; // Nivel de llenado
            celdaObservacionesDespues.textContent = "Cumque beatae et quia dolorem aut ut sunt in."; // Observaciones
            celdaCreadoDespues.textContent = "2024-11-29"; // Fecha de creación
            celdaActualizadoDespues.textContent = "2024-11-29"; // Fecha de actualización

            rowDespues.appendChild(celdaNivelLlenadoDespues);
            rowDespues.appendChild(celdaObservacionesDespues);
            rowDespues.appendChild(celdaCreadoDespues);
            rowDespues.appendChild(celdaActualizadoDespues);

            tBodyDespues.appendChild(rowDespues);
            tableDespues.appendChild(tBodyDespues);
            main.appendChild(tableDespues);


            main.classList.add("flow-root")
            document.querySelector(".bg-placeholder").classList.add("bg-slate-900")
        })
    })


    // aqui se entra dentro de cada registro por separado filtrados por el usuario id   

    const botonIdUser = document.querySelectorAll(".buttonIdUser")
    console.log(botonIdUser);
    botonIdUser.forEach(boton => {
        boton.addEventListener('click', async (e) => {
            let userId = e.target.textContent
            console.log(userId);
            main.innerHTML = ''
            let registros = await getRegisterUserHasManyRelation(userId)
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

            table.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")
            console.log(registros.data);
            for (let i = 0; i < registros.data.length; i++) {

                let user = await getUser(registros.data[i].user_id) // porque me odias 
                main.innerHTML = `<h1>Registro del usuario ${user.data.name}</h1>`

                // vamos a crear el boton del id de los usuarios para poder acceder a todos los registros realizados por un solo usuario

                console.log(registros.data[i].user_id);
                console.log(user.data.name);

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
                celdaUsuario.innerHTML = `<button class="buttonIdUser"><p>${registros.data[i].user_id}<p></button>${user.data.name}`;
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

                // let div1 = document.createElement("div")
                // let div2 = document.createElement("div")
                // div2.appendChild(table)
                // div2.classList.add('flex', 'justify-center', "inline-block", "min-w-full", "py-2", "align-middle")
                // div1.appendChild(div2)
                // div1.classList.add("mt-8", "overflow-x-auto")
                table.appendChild(tBody)
                main.appendChild(table)
                main.classList.add("flow-root")
                document.querySelector(".bg-placeholder").classList.add("bg-slate-900")

            }
        })
    })
})
