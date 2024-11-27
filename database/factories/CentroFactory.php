<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Number;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Centro>
 */
class CentroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'codigo' => 1,
            'nombre' => fake()->name(),
            'direccion' => fake()->address(),
            'logotipo' => Str::random('1'),
            'persona_responsable' => fake()->name()
        ];
    }
}
