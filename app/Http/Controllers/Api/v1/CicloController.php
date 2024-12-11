<?php

namespace App\Http\Controllers\Api\v1;

use Orion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ciclo;
use Orion\Concerns\DisableAuthorization;
use App\Policies\CicloPolicy;

class CicloController extends Controller
{
    // use DisableAuthorization;

    protected $model = Ciclo::class;

    protected $policy = CicloPolicy::class;
}
