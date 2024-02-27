<?php

namespace Database\Factories;

use App\Models\MovieCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MovieCategory>
 */
class MovieCategoryFactory extends Factory
{
    protected $model = MovieCategory::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'movie_id' => \App\Models\Movie::inRandomOrder()->first()->id,
            'category_id' => \App\Models\Category::inRandomOrder()->first()->id,
        ];
    }
}
