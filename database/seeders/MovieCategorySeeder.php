<?php

namespace Database\Seeders;

use App\Models\MovieCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        MovieCategory::factory()->count(20)->create();
    }
}
