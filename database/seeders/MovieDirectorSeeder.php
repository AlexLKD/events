<?php

namespace Database\Seeders;

use App\Models\MovieDirector;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieDirectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        MovieDirector::factory()->count(20)->create();
    }
}
