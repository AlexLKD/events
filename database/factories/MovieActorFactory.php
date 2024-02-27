<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MovieActor>
 */
class MovieActorFactory extends Factory
{
    protected $model = \App\Models\MovieActor::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'movie_id' => \App\Models\Movie::inRandomOrder()->first()->id,
            'actor_id' => \App\Models\Actor::inRandomOrder()->first()->id,
        ];
    }
}
