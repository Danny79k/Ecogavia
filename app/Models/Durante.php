<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Durante extends Model
{
    use HasFactory;

    protected $fillable = [
        'riego',
        'revolver',
        'aporte_verde',
        'tipo_aporte_verde',
        'aporte_seco',
        'fotografias',
        'observaciones',
        'registro_id',
    ];
}
