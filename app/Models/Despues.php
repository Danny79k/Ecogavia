<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Despues extends Model
{
    use HasFactory;

    protected $fillable = [
        'nivel_llenado',
        'fotografias',
        'observaciones',
        'registro_id',
    ];
}
