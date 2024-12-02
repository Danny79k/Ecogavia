import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/light.js', 'resources/js/app.js', 'resources/js/tablaDatos.js', 'resources/css/style.css', 'resources/js/formDatos.js'],
            refresh: true,
        }),
    ],
});
