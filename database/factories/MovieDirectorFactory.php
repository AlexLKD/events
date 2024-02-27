<?php

namespace Database\Factories;

use App\Models\MovieDirector;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MovieDirector>
 */
class MovieDirectorFactory extends Factory
{
    protected $model = MovieDirector::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'movie_id' => \App\Models\Movie::inRandomOrder()->first()->id,
            'director_id' => \App\Models\Director::inRandomOrder()->first()->id,
        ];
    }
}
