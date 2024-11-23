<x-guest-layout>
        <div class="flex justify-end p-5">
            <img src="assets/dark_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" height="38" width="38"
                id="lightmode">
        </div>
        <main class="flex justify-center content-center">
            <div class="w-80 rounded-xl absolute top-1/4">
                <x-auth-session-status class="mb-4" :status="session('status')" />
                <div class="flex justify-center m-2">
                    <img src="assets/logo.svg" height="64" width="64">
                </div>
                <form action="{{ route('login') }}" method="POST" class="flex flex-col relative top-1/4">
                    @csrf
                    <!-- <h1 class="text-white text-center text-5xl">Login</h1> -->
                    <input type="email" id="" class="text-white p-3 m-7 bg-slate-900 rounded-xl" placeholder="email"
                        name="email" :value="old('email')" required autofocus autocomplete="username">
                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                    <input type="password" id="" class="text-white p-3 m-7 bg-slate-900 rounded-xl"
                        placeholder="password" name="password" required autocomplete="current-password">
                    <x-input-error :messages="$errors->get('password')" class="mt-2" />
                    <div class="flex justify-center">
                        <div class="flex items-center justify-end mt-4">
                            @if (Route::has('password.request'))
                                <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                    href="{{ route('password.request') }}">
                                    {{ __('Forgot your password?') }}
                                </a>
                            @endif
                            <input type="image" src="assets/login_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                                height="64" width="64">
                        </div>
                    </div>
                </form>
            </div>
        </main>
        <!-- scripts -->
        <script src="js/light.js"></script>
</x-guest-layout>