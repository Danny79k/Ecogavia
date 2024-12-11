<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Antes extends Model
{
    use HasFactory;

    protected $fillable = [
        'temperatura_ambiental',
        'temperatura_compostera',
        'nivel_llenado',
        'olor',
        'presencia_insectos',
        'humedad',
        'fotografias',
        'observaciones',
        'registro_id',
    ];
}
