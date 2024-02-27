<?php

namespace Database\Factories;

use App\Models\Event;
use App\Models\Movie;
use App\Models\Theater;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    protected $model = Event::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $theater = Theater::inRandomOrder()->first();
        $movie = Movie::inRandomOrder()->first();

        return [
            'screened_at' => $this->faker->dateTimeBetween('+1 week', '+1 month'),
            'available_seats' => $this->faker->numberBetween(50, 200),
            'theater_id' => $theater->id,
            'movie_id' => $movie->id,
        ];
    }
}
