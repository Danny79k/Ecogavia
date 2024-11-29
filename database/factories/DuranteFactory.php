<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Durante>
 */
class DuranteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'riego' => $this->faker->boolean(), // True o False
            'revolver' => $this->faker->boolean(), // True o False
            'aporte_verde' => $this->faker->numberBetween(1, 50), // Valor aleatorio para aporte verde
            'tipo_aporte_verde' => $this->faker->word(), // Palabra aleatoria para tipo de aporte verde
            'aporte_seco' => $this->faker->numberBetween(1, 50), // Valor aleatorio para aporte seco
            'fotografias' => $this->faker->imageUrl(), // URL ficticia para fotografías
            'observaciones' => $this->faker->sentence(), // Observaciones aleatorias
            'registro_id' => \App\Models\Registro::factory(),
        ];
    }
}
