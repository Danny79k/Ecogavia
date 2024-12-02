<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Ciclo;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;
use Illuminate\Http\Request;


class CicloRegistroController extends RelationController
{

    use DisableAuthorization;
    protected $model = Ciclo::class;

    protected $relation = "registros";
}
