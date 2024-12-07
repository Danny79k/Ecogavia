<?php

namespace App\Http\Controllers\Api\v1;

use Orion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Orion\Concerns\DisableAuthorization;
use Orion\Concerns\DisablePagination;
use App\Models\Bolo;
use Orion\Http\Controllers\RelationController;

class BoloCicloController extends RelationController
{
    use DisablePagination;

    protected $model = Bolo::class;

    protected $relation = 'ciclos';
}
