<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ciclo extends Model
{
    use HasFactory;

    protected $fillable = [
        'bolo_id',
        'compostera_id',
        'terminado',
    ];

    public function registros()
    {
        return $this->hasMany(Registro::class);
    }

    public function compostera()
    {
        return $this->belongsTo(Compostera::class);
    }
}
