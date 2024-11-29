<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Registro>
 */
class RegistroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'inicio_ciclo' => $this->faker->boolean(), // True o False
            'ciclo_id' => \App\Models\Ciclo::factory(), // Relación con la tabla ciclos
            'user_id' => \App\Models\User::factory(), // Relación con la tabla users
            'compostera_id' => \App\Models\Compostera::factory(),
        ];
    }
}
