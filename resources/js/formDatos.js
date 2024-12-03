const main = document.querySelector(".main")

const botonInsertar = document.querySelector(".insertarRegistro");

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
                                <p class="mt-1 text-sm/6 text-gray-600">Complete el siguiente formulario.</p>

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-3">
                                        <label for="compostera"
                                            class="block text-sm/6 font-medium text-gray-900">Compostera</label>
                                        <div class="mt-2">
                                            <div
                                                class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                <select name="compostera" id="compostera"
                                                    class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6">
                                                    <option>${e.target.textContent}</option>
                                                </select>
                                            </div>
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
                                                <option value="Si">Si</option>
                                                <option value="No">No</option>
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
                                            ambiental</label>
                                        <div class="mt-2">
                                            <input type="number" name="temperatura_ambiental" id="temperatura_ambiental"
                                                autocomplete="given-name"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="temperatura_compostera"
                                            class="block text-sm/6 font-medium text-gray-900">Temperatura
                                            compostera</label>
                                        <div class="mt-2">
                                            <input type="number" name="temperatura_compostera"
                                                id="temperatura_compostera" autocomplete="given-name"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="nivel_llenado_antes"
                                            class="block text-sm/6 font-medium text-gray-900">Nivel llenado</label>
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
                                                <option value="Si">Si</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="humedad" class="block text-sm/6 font-medium text-gray-900">Nivel de
                                            humedad</label>
                                        <div class="mt-2">
                                            <select name="humedad" id="humedad"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                <option value="Baja">Baja</option>
                                                <option value="Media">Media</option>
                                                <option value="Alta">Alta</option>
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
                                                <option value="Si">Si</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="revolver" class="block text-sm/6 font-medium text-gray-900">¿Ha
                                            removido el compostaje?</label>
                                        <div class="mt-2">
                                            <select name="revolver" id="revolver"
                                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                <option value="Si">Si</option>
                                                <option value="No">No</option>
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
                                            class="block text-sm/6 font-medium text-gray-900">Nivel llenado</label>
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

        consultarDatos();
        mostrarObservacionesBolo();

        async function consultarDatos() {
            //campo booleano en ciclos y ENUM en bolos
        }

        async function insertarDatos() {
            const formDatas = new FormData(formDatos)
            const data = Object.fromEntries(formDatas.entries());
            console.log(data);

            try {
                // Insertar en "bolo"
                const boloResponse = await fetch('/api/bolos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ observaciones: data.observaciones_bolo })
                });
                const bolo = await boloResponse.json();

                // Insertar en "ciclo"
                const cicloResponse = await fetch('/api/ciclos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id_bolo: bolo.id_bolo, descripcion: data.descripcionCiclo })
                });
                const ciclo = await cicloResponse.json();

                // Insertar en "registros"
                const registroResponse = await fetch('/api/registros', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id_ciclo: ciclo.id_ciclo, detalle: data.detalleRegistro })
                });
                const registro = await registroResponse.json();

                // Insertar en "estados"
                // const estadoResponse = await fetch('/api/estados', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ id_registro: registro.id_registro, estado: data.estado })
                // });

                // const estado = await estadoResponse.json();
                alert('Datos insertados correctamente: ' + JSON.stringify(estado));
            } catch (error) {
                console.error('Error durante la inserción:', error);
                alert('Hubo un error al insertar los datos.');
            }
        }

        function mostrarObservacionesBolo() {
            if (inicioCicloBtn.value == "Si" && composteraBtn.value == 1) {
                let contenedorObservaciones = document.createElement("div");
                contenedorObservaciones.classList.add("col-span-full");
                contenedorObservaciones.id = "contenedorObservaciones";

                let label = document.createElement("label");
                label.setAttribute("for", "observaciones_bolo");
                label.classList.add("block", "text-sm/6", "font-medium", "text-gray-900");
                label.textContent = "Observaciones";

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






