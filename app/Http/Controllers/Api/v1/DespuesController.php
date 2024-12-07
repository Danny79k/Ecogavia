<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Despues;
use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DespuesController extends Controller
{
    //

    // use DisableAuthorization;

    protected $model = Despues::class;
}
