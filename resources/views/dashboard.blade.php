@if (session('token'))
    <script>
        sessionStorage.setItem('sessionToken', '{{session('token')}}')
    </script>
    <p>{{session('token')}}</p>
@endif
<x-app-layout>
    <div>
        <navbar class="flex p-5 bg-slate-800 text-white font-sans">
            <a href="" class="text-white bg-gray-800 border hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Insertar registro</a>
            <a href="" class="text-white bg-gray-800 border hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">lorem</a>
            <a href="" class="text-white bg-gray-800 border hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">lorem</a>
        </navbar>
    </div>
    <div id="main">

    </div>
</x-app-layout>