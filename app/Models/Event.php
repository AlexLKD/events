<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'available_seats', 'movie_id'];

    public function movie()
    {
        return $this->belongsTo(Movie::class);
    }
}
