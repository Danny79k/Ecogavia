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

async function consultarCiclos() {
    try {
        let response = await fetch(`/api/ciclos`, option)
            .then((response) => response.json())
            .then((objeto) => objeto.data);
        let ciclos = response.filter(ciclo => ciclo.terminado == 0);
        return ciclos
    } catch (e) {
        throw new Error(`error en recuperar los registros: ${e}`)
    }
}

botonInsertar.addEventListener('click', async (e) => {
    e.preventDefault()
    main.innerHTML = ''
    let registros = await getComposteras()
    let ciclosActivos = await consultarCiclos()
    console.log(registros.data);
    console.log(ciclosActivos);
    generarTabla();

    function generarTabla() {
        let table = document.createElement("table")
        let thead = document.createElement("thead")
        let trColumna = document.createElement("tr")
        let thId = document.createElement("th")
        let thCodigo = document.createElement("th")
        let thCreado = document.createElement("th")
        let thActualizado = document.createElement("th")
        let thEstado = document.createElement("th")
        let thAcciones = document.createElement("th")

        thId.innerHTML = "id"
        thCodigo.innerHTML = "codigo"
        thCreado.innerHTML = "creado"
        thActualizado.innerHTML = "actualizado"
        thEstado.innerHTML = "estado"
        thAcciones.innerHTML = "acciones"

        trColumna.appendChild(thId)
        trColumna.appendChild(thCodigo)
        trColumna.appendChild(thCreado)
        trColumna.appendChild(thActualizado)
        trColumna.appendChild(thEstado)
        trColumna.appendChild(thAcciones)

        thead.appendChild(trColumna)
        table.appendChild(thead)

        let tBody = document.createElement("tbody")

        table.classList.add("text-white", "text-center", "w-full", "divide-y", "bg-slate-850", "divide-slate-700")

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
            let celdaEstado = document.createElement("td");
            celdaEstado.classList.add("celdaEstado");

            celdaId.innerHTML = `<button class="boloId">${registros.data[i].id}</button>`;
            celdaCodigo.innerHTML = registros.data[i].codigo;
            celdaCreado.textContent = registros.data[i].created_at.substr(0, 10);
            celdaActualizado.textContent = registros.data[i].updated_at.substr(0, 10);

            row.appendChild(celdaId);
            row.appendChild(celdaCodigo);
            row.appendChild(celdaCreado);
            row.appendChild(celdaActualizado);
            row.appendChild(celdaEstado);

            if (ciclosActivos.find(ciclo => ciclo.compostera_id == registros.data[i].id)) {
                celdaEstado.innerHTML = `<span class="statusInUse">Ocupada</span>`;
                let celdaTerminar = document.createElement("td");
                celdaTerminar.innerHTML = `<button class="buttonFinish" data-id="${registros.data[i].id}">Terminar ciclo</button>`;
                row.appendChild(celdaTerminar);
            } else {
                celdaEstado.innerHTML = `<span class="statusFree">Libre</span>`;
            }

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
    }

    main.addEventListener('click', async (e) => {
        if (e.target.classList.contains('buttonFinish')) {

            let ciclo = ciclosActivos.find(ciclo => ciclo.compostera_id == e.target.getAttribute('data-id'));
            console.log(ciclo);

            let compostera = registros.data.find(compostera => compostera.id == e.target.getAttribute('data-id'));
            console.log(compostera);

            await modificarCiclo(ciclo.id);
            await modificarBolo(ciclo.bolo_id, compostera.codigo);

            //Volver a cargar la página
            main.innerHTML = '';
            generarTabla();
        }
    })

    async function modificarCiclo(cicloId) {
        const cicloResponse = await fetch(`/api/ciclos/${cicloId}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ terminado: 1 })
        });
        let ciclo_promise = await cicloResponse.json();
        console.log(ciclo_promise);
    }

    async function modificarBolo(boloId, cicloActual) {
        let cambios;
        if (cicloActual == 'c-11') {
            cambios = { ciclo1: 1 };
        } else if (cicloActual == 'c-22') {
            cambios = { ciclo2: 1 };
        } else if (cicloActual == 'c-33') {
            cambios = { ciclo3: 1, terminado: 1 };
        }
        console.log(cambios);
        const boloResponse = await fetch(`/api/bolos/${boloId}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cambios)
        });
        let bolo_promise = await boloResponse.json();
        console.log(bolo_promise);
    }
})