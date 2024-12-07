<?php

namespace App\Http\Controllers\Api\v1;

use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;
use Illuminate\Http\Request;
use App\Models\Registro;

class RegistroDuranteController extends RelationController
{
    // use DisableAuthorization;

    protected $model = Registro::class;

    protected $relation = 'despues';
}
