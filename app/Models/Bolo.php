<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bolo extends Model
{
    use HasFactory;

    protected $fillable = [
        'terminado',
        'ciclo1',
        'ciclo2',
        'ciclo3',
        'observaciones',
    ];

    public function ciclos()
    {
        return $this->hasMany(Ciclo::class);
    }
}
