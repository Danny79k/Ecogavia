<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    protected $fillable = [
        'inicio_ciclo',
        'user_id',
        'ciclo_id',
        'compostera_id',
    ];
}
