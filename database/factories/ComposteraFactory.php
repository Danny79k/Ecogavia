<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Compostera>
 */
class ComposteraFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'QR' => $this->faker->uuid(), // Genera un UUID aleatorio para el campo QR
            'codigo' => $this->faker->randomElement(['c-22', 'c-11', 'c-33']), // Selecciona aleatoriamente uno de los valores del enum
            'centro_id' => \App\Models\Centro::factory()
        ];
    }
}
