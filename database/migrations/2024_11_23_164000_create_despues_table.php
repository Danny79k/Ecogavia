<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('despues', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('nivel_llenado');
            $table->string('fotografias')->nullable();
            $table->string('observaciones')->nullable();
            $table->foreignId('registro_id')->on('registros');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('despues');
    }
};
