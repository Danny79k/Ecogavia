<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ciclo>
 */
class CicloFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $fechaInicio = $this->faker->dateTimeBetween('-1 year', 'now');
        $fechaFin = $this->faker->dateTimeBetween($fechaInicio, '+1 month');

        return [
            'fecha_inicio' => $fechaInicio->format('Y-m-d'), // Fecha inicial en formato 'YYYY-MM-DD'
            'fecha_fin' => $fechaFin->format('Y-m-d'), // Fecha final después de la inicial
            'bolo_id' => \App\Models\Compostera::factory()
        ];
    }
}
