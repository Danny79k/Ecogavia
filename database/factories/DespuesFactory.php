<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Despues>
 */
class DespuesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nivel_llenado' => $this->faker->numberBetween(0, 100), // Porcentaje de llenado (0-100)
            'fotografias' => $this->faker->imageUrl(), // URL ficticia para fotografías
            'observaciones' => $this->faker->sentence(), // Observaciones aleatorias
            'registro_id' => \App\Models\Registro::factory(),
        ];
    }
}
