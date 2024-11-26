@if (session('token'))
    <script>
        sessionStorage.setItem('sessionToken','{{session('token')}}')
    </script>
    <p>{{session('token')}}</p>
@endif
<x-app-layout>
    <div>
        <navbar class="flex p-5 bg-slate-800 text-white font-sans">
            <a href="" class="px-5">lorem</a>
            <a href="" class="px-5">lorem</a>
            <a href="" class="px-5">lorem</a>
        </navbar>
    </div>
</x-app-layout>