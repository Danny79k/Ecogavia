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
        Schema::create('antes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('temperatura_ambiental');
            $table->integer('temperatura_compostera');
            $table->integer('nivel_llenado');
            $table->String('olor');
            $table->boolean('presencia_insectos');
            $table->enum('humedad', ['escasa', 'buena', 'exceso']);
            $table->string('fotografias');
            $table->string('observaciones');
            $table->foreignId('registro_id')->on('registros');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('antes');
    }
};
