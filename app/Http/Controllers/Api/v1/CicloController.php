<?php

namespace App\Http\Controllers\Api\v1;

use Orion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ciclo;
use Orion\Concerns\DisableAuthorization;

class CicloController extends Controller
{
    use DisableAuthorization;

    protected $model = Ciclo::class;
}
