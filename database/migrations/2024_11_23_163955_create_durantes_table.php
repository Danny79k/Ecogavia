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
        Schema::create('durantes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->boolean('riego');
            $table->boolean('revolver');
            $table->integer('aporte_verde')->nullable();
            $table->string('tipo_aporte_verde')->nullable();
            $table->integer('aporte_seco')->nullable();
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
        Schema::dropIfExists('durantes');
    }
};
