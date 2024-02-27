<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToMovieHasActorTable extends Migration
{
    public function up()
    {
        Schema::table('movie_has_actor', function (Blueprint $table) {
            $table->foreign('movie_id')->references('id')->on('movies')->onDelete('cascade');
            $table->foreign('actor_id')->references('id')->on('actors')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::table('movie_has_actor', function (Blueprint $table) {
            $table->dropForeign(['movie_id']);
            $table->dropForeign(['actor_id']);
        });
    }
}
