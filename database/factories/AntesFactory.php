<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Antes>
 */
class AntesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'temperatura_ambiental' => $this->faker->numberBetween(-10, 50), // Temperatura ambiental en grados
            'temperatura_compostera' => $this->faker->numberBetween(10, 70), // Temperatura de la compostera en grados
            'nivel_llenado' => $this->faker->numberBetween(0, 100), // Porcentaje de llenado
            'olor' => $this->faker->word(), // Palabra aleatoria para el olor
            'presencia_insectos' => $this->faker->boolean(), // True o False
            'humedad' => $this->faker->randomElement(['escasa', 'buena', 'exceso']), // Valores definidos
            'fotografias' => $this->faker->imageUrl(), // URL ficticia para la fotografía
            'observaciones' => $this->faker->sentence(), // Observación aleatoria
            'registro_id' => \App\Models\Registro::factory(),
        ];
    }
}
