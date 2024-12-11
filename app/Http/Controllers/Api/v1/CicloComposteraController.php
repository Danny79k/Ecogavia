<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Orion\Http\Controllers\RelationController;
use App\Models\Ciclo;
class CicloComposteraController extends RelationController
{
    protected $model = Ciclo::class;
    protected $relation = 'compostera';
}
