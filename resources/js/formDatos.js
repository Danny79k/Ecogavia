const main = document.querySelector(".main")

const botonInsertar = document.querySelector(".insertarRegistro");
const token = sessionStorage.getItem('sessionToken');

const option = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
}

main.addEventListener('click', (e) => {
    if (e.target.classList.contains('boloId')) {
        main.innerHTML = `
        <div>
            <div id="main">
                <div class="bg-white shadow p-5 mt-5 max-w-7xl mx-auto rounded-lg">
                    <form method="post" class="formDatos">
                        <div class="space-y-12">
                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base/7 font-semibold text-gray-900">Añadir registro</h2>
                                <p class="mt-1 text-sm/6 text-gray-600">Complete el siguiente formulario. El * indica los campos obligatorios</p>

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-3">
                                        <label for="compostera"
                                            class="block text-sm/6 font-medium text-gray-900">Compostera</label>
                                        <div class="mt-2">
                                            <select name="compostera" id="compostera"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                <option value="${e.target.textContent}">${e.target.textContent}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="hora" class="block text-sm/6 font-medium text-gray-900">Hora</label>
                                        <div class="mt-2">
                                            <input type="datetime-local" name="hora" id="hora"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="inicio_ciclo" class="block text-sm/6 font-medium text-gray-900">¿Es
                                            el inicio de un ciclo?</label>
                                        <div class="mt-2">
                                            <select name="inicio_ciclo" id="inicio_ciclo"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                <option value="1">Si</option>
                                                <option value="0">No</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base/7 font-semibold text-gray-900">Antes</h2>
                                <p class="mt-1 text-sm/6 text-gray-600">Indique el estado inicial del compostaje.</p>

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-3">
                                        <label for="temperatura_ambiental"
                                            class="block text-sm/6 font-medium text-gray-900">Temperatura
                                            ambiental*</label>
                                        <div class="mt-2">
                                            <input type="number" name="temperatura_ambiental" id="temperatura_ambiental"
                                                autocomplete="given-name"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="temperatura_compostera"
                                            class="block text-sm/6 font-medium text-gray-900">Temperatura
                                            compostera*</label>
                                        <div class="mt-2">
                                            <input type="number" name="temperatura_compostera"
                                                id="temperatura_compostera" autocomplete="given-name"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="nivel_llenado_antes"
                                            class="block text-sm/6 font-medium text-gray-900">Nivel llenado*</label>
                                        <div class="mt-2">
                                            <input type="number" name="nivel_llenado_antes" id="nivel_llenado_antes"
                                                autocomplete="given-name"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="olor" class="block text-sm/6 font-medium text-gray-900">Olor</label>
                                        <div class="mt-2">
                                            <input type="text" name="olor" id="olor" autocomplete="given-name"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="presencia_insectos"
                                            class="block text-sm/6 font-medium text-gray-900">¿Hay presencia de
                                            insectos?</label>
                                        <div class="mt-2">
                                            <select name="presencia_insectos" id="presencia_insectos"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                <option value="1">Si</option>
                                                <option value="0">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="humedad" class="block text-sm/6 font-medium text-gray-900">Nivel de
                                            humedad</label>
                                        <div class="mt-2">
                                            <select name="humedad" id="humedad"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                <option value="escasa">Escasa</option>
                                                <option value="buena">Buena</option>
                                                <option value="exceso">Exceso</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="cover-photo"
                                            class="block text-sm/6 font-medium text-gray-900">Fotografías</label>
                                        <div
                                            class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div class="text-center">
                                                <svg class="mx-auto size-12 text-gray-300" viewBox="0 0 24 24"
                                                    fill="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path fill-rule="evenodd"
                                                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <div class="mt-4 flex text-sm/6 text-gray-600">
                                                    <label for="fotografias_antes"
                                                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="fotografias_antes" name="fotografias_antes"
                                                            type="file" class="sr-only">
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="observaciones_antes"
                                            class="block text-sm/6 font-medium text-gray-900">Observaciones</label>
                                        <div class="mt-2">
                                            <textarea name="observaciones_antes" id="observaciones_antes" rows="3"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base/7 font-semibold text-gray-900">Durante</h2>
                                <p class="mt-1 text-sm/6 text-gray-600">Indique el estado del compostaje durante el
                                    proceso.</p>

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-3">
                                        <label for="riego" class="block text-sm/6 font-medium text-gray-900">¿Ha añadido
                                            agua?</label>
                                        <div class="mt-2">
                                            <select name="riego" id="riego"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                <option value="1">Si</option>
                                                <option value="0">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="revolver" class="block text-sm/6 font-medium text-gray-900">¿Ha
                                            removido el compostaje?</label>
                                        <div class="mt-2">
                                            <select name="revolver" id="revolver"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                <option value="1">Si</option>
                                                <option value="0">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="aporte_verde"
                                            class="block text-sm/6 font-medium text-gray-900">Aporte verde</label>
                                        <div class="mt-2">
                                            <input type="number" name="aporte_verde" id="aporte_verde"
                                                autocomplete="given-name"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="tipo_aporte_verde"
                                            class="block text-sm/6 font-medium text-gray-900">Tipo de aporte
                                            verde</label>
                                        <div class="mt-2">
                                            <input type="text" name="tipo_aporte_verde" id="tipo_aporte_verde"
                                                autocomplete="given-name"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="aporte_seco"
                                            class="block text-sm/6 font-medium text-gray-900">Aporte seco</label>
                                        <div class="mt-2">
                                            <input type="number" name="aporte_seco" id="aporte_seco"
                                                autocomplete="given-name"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="cover-photo"
                                            class="block text-sm/6 font-medium text-gray-900">Fotografías</label>
                                        <div
                                            class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div class="text-center">
                                                <svg class="mx-auto size-12 text-gray-300" viewBox="0 0 24 24"
                                                    fill="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path fill-rule="evenodd"
                                                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <div class="mt-4 flex text-sm/6 text-gray-600">
                                                    <label for="fotografias_durante"
                                                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="fotografias_durante" name="fotografias_durante"
                                                            type="file" class="sr-only">
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="observaciones_durante"
                                            class="block text-sm/6 font-medium text-gray-900">Observaciones</label>
                                        <div class="mt-2">
                                            <textarea name="observaciones_durante" id="observaciones_durante" rows="3"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base/7 font-semibold text-gray-900">Después</h2>
                                <p class="mt-1 text-sm/6 text-gray-600">Indique el estado final del compostaje.</p>

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="col-span-full">
                                        <label for="nivel_llenado_despues"
                                            class="block text-sm/6 font-medium text-gray-900">Nivel llenado*</label>
                                        <div class="mt-2">
                                            <input type="number" name="nivel_llenado_despues" id="nivel_llenado_despues"
                                                autocomplete="given-name"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="cover-photo"
                                            class="block text-sm/6 font-medium text-gray-900">Fotografías</label>
                                        <div
                                            class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div class="text-center">
                                                <svg class="mx-auto size-12 text-gray-300" viewBox="0 0 24 24"
                                                    fill="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path fill-rule="evenodd"
                                                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <div class="mt-4 flex text-sm/6 text-gray-600">
                                                    <label for="fotografias_despues"
                                                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="fotografias_despues" name="fotografias_despues"
                                                            type="file" class="sr-only">
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="observaciones_despues"
                                            class="block text-sm/6 font-medium text-gray-900">Observaciones</label>
                                        <div class="mt-2">
                                            <textarea name="observaciones_despues" id="observaciones_despues" rows="3"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancelar</button>
                            <button type="button"
                                class="submit rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
    `

        const inicioCicloBtn = document.getElementById("inicio_ciclo");
        const composteraBtn = document.getElementById("compostera");
        const formDatosBoton = document.querySelector(".submit")
        const formDatos = document.querySelector(".formDatos")

        formDatosBoton.addEventListener('click', insertarDatos);

        inicioCicloBtn.addEventListener('input', mostrarObservacionesBolo);

        mostrarObservacionesBolo();

        async function consultarCompostera(id) {
            let compostera = await fetch(`/api/composteras/${id}`, {
                method: 'GET',
                headers: option
            }).then((response) => response.json())
                .then((objeto) => objeto.data);
            console.log(compostera);
            return compostera;
        }

        async function consultarCiclos() {
            let consultaCiclos = await fetch('/api/ciclos', {
                method: 'GET',
                headers: option
            }).then((response) => response.json())
                .then((objeto) => objeto.data);
            let ciclo = consultaCiclos.find(ciclo => ciclo.terminado == 0 && ciclo.compostera_id == composteraBtn.value);
            console.log(ciclo);
            return ciclo;
        }

        async function consultarBolo(compostera) {
            let consultaBolos = await fetch('/api/bolos', {
                method: 'GET',
                headers: option
            }).then((response) => response.json())
                .then((objeto) => objeto.data);

            //el campo terminado de ciclos no se tiene en cuenta *ARREGLAR*
            let bolo = {}
            if (compostera.codigo == 'c-22') {
                bolo = consultaBolos.find(bolo => bolo.ciclo1 == 1 && bolo.ciclo2 == 0);
            } else if (compostera.codigo == 'c-33') {
                bolo = consultaBolos.find(bolo => bolo.ciclo1 == 1 && bolo.ciclo2 == 1 && bolo.ciclo3 == 0);
            }

            if (bolo == undefined) alert('El bolo no ha terminado el ciclo anterior');
            console.log(bolo);
            return bolo;
        }

        async function insertarDatos() {
            const formDatas = new FormData(formDatos)
            const data = Object.fromEntries(formDatas.entries());
            console.log(data);
            const camposRequeridos = [
                data.observaciones_bolo, data.temperatura_ambiental,
                data.temperatura_compostera, data.nivel_llenado_antes, data.nivel_llenado_despues];

            if (!camposRequeridos.every((campo) => campo != "")) {
                alert('Faltan campos obligatorios por llenar');
                return;
            }

            try {
                const userId = document.querySelector("span.userId").textContent;
                let compostera = await consultarCompostera(data.compostera);
                let ciclo = await consultarCiclos();

                if (!ciclo && data.inicio_ciclo == 1) {
                    if (data.compostera == 1) {
                        let bolo = await crearBolo();
                        console.log(bolo);

                        ciclo = await crearCiclo(bolo);
                        console.log(ciclo);

                    } else if (data.compostera != 1) {
                        let bolo = await consultarBolo(compostera);

                        ciclo = await crearCiclo(bolo);
                        console.log(ciclo);
                    }

                    crearRegistro(ciclo, userId);
                } else if (ciclo && data.inicio_ciclo == 0) {
                    crearRegistro(ciclo, userId);
                } else {
                    if (ciclo && data.inicio_ciclo == 1) alert('Ya existe un ciclo activo en esta compostera');
                    else if (!ciclo && data.inicio_ciclo == 0) alert('Todavía no se ha iniciado un ciclo en esta compostera');
                }

            } catch (error) {
                console.error('Error durante la inserción:', error);
                alert('Hubo un error al insertar los datos.');
            }

            async function crearBolo() {
                // Insertar en "bolo"
                const boloResponse = await fetch('/api/bolos', {
                    method: 'POST',
                    headers: option,
                    body: JSON.stringify({ terminado: 0, ciclo1: 0, ciclo2: 0, ciclo3: 0, observaciones: data.observaciones_bolo })
                });
                let bolo_promise = await boloResponse.json();
                return bolo_promise.data;
            }

            async function crearCiclo(bolo) {
                // Insertar en "ciclo"
                const cicloResponse = await fetch('/api/ciclos', {
                    method: 'POST',
                    headers: option,
                    body: JSON.stringify({ terminado: 0, bolo_id: bolo.id, compostera_id: data.compostera })
                });
                let ciclo_promise = await cicloResponse.json();
                return ciclo_promise.data;
            }

            async function crearRegistro(ciclo, userId) {
                // Insertar en "registros"
                const registroResponse = await fetch('/api/registros', {
                    method: 'POST',
                    headers: option,
                    body: JSON.stringify({ inicio_ciclo: data.inicio_ciclo, ciclo_id: ciclo.id, user_id: userId, compostera_id: data.compostera })
                });

                let registro_promise = await registroResponse.json();
                let registro = registro_promise.data;
                crearAntes(registro);
                crearDurante(registro);
                crearDespues(registro);
            }

            async function crearAntes(registro) {
                // Insertar en "antes"
                const antesResponse = await fetch('/api/antes', {
                    method: 'POST',
                    headers: option,
                    body: JSON.stringify({
                        temperatura_ambiental: data.temperatura_ambiental,
                        temperatura_compostera: data.temperatura_compostera,
                        nivel_llenado: data.nivel_llenado_antes,
                        olor: data.olor,
                        presencia_insectos: data.presencia_insectos,
                        humedad: data.humedad,
                        fotografias: data.fotografias_antes.webkitRelativePath,
                        observaciones: data.observaciones_antes,
                        registro_id: registro.id
                    })
                });
                let antes_promise = await antesResponse.json();
                console.log(antes_promise);
                let antes = antes_promise.data;
            }

            async function crearDurante(registro) {
                // Insertar en "durante"
                const duranteResponse = await fetch('/api/durante', {
                    method: 'POST',
                    headers: option,
                    body: JSON.stringify({
                        riego: data.riego,
                        revolver: data.revolver,
                        aporte_verde: data.aporte_verde,
                        tipo_aporte_verde: data.tipo_aporte_verde,
                        aporte_seco: data.aporte_seco,
                        fotografias: data.fotografias_durante.webkitRelativePath,
                        observaciones: data.observaciones_durante,
                        registro_id: registro.id
                    })
                });
                let durante_promise = await duranteResponse.json();
                console.log(durante_promise);
                let durante = durante_promise.data;
            }

            async function crearDespues(registro) {
                // Insertar en "despues"
                const despuesResponse = await fetch('/api/despues', {
                    method: 'POST',
                    headers: option,
                    body: JSON.stringify({
                        nivel_llenado: data.nivel_llenado_despues,
                        fotografias: data.fotografias_despues.webkitRelativePath,
                        observaciones: data.observaciones_despues,
                        registro_id: registro.id
                    })
                });
                let despues_promise = await despuesResponse.json();
                console.log(despues_promise);
                let despues = despues_promise.data;
            }
        }

        function mostrarObservacionesBolo() {
            if (inicioCicloBtn.value == 1 && composteraBtn.value == 1) {
                let contenedorObservaciones = document.createElement("div");
                contenedorObservaciones.classList.add("col-span-full");
                contenedorObservaciones.id = "contenedorObservaciones";

                let label = document.createElement("label");
                label.setAttribute("for", "observaciones_bolo");
                label.classList.add("block", "text-sm/6", "font-medium", "text-gray-900");
                label.textContent = "Observaciones del bolo*";

                let separador = document.createElement("div");
                separador.classList.add("mt-2");

                let observaciones = document.createElement("textarea");
                observaciones.name = "observaciones_bolo";
                observaciones.id = "observaciones_bolo";
                observaciones.rows = 3;
                observaciones.classList.add("block", "w-full", "rounded-md", "bg-white", "px-3",
                    "py-1.5", "text-base", "text-gray-900", "outline", "outline-1", "-outline-offset-1",
                    "outline-gray-300", "placeholder:text-gray-400", "focus:outline-2",
                    "focus:-outline-offset-2", "focus:outline-indigo-600", "sm:text-sm/6");

                separador.appendChild(observaciones);
                contenedorObservaciones.appendChild(label);
                contenedorObservaciones.appendChild(separador);
                inicioCicloBtn.parentElement.parentElement.parentElement.appendChild(contenedorObservaciones);
            } else if (document.getElementById("contenedorObservaciones")) {
                document.getElementById("contenedorObservaciones").remove();
            }
        }
    }
})






