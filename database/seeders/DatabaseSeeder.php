<?php

namespace Database\Seeders;

use App\Models\Centro;
use App\Models\Compostera;
use App\Models\User;
use App\Models\Antes;
use App\Models\Durante;
use App\Models\Despues;
use App\Models\Ciclo;
use App\Models\Registro;
use App\Models\Bolo;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        Centro::factory(5)->create();
        Compostera::factory(3)->create();
    }
}
