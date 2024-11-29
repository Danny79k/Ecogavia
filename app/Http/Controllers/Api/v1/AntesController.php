<?php

namespace App\Http\Controllers\Api\v1;

use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Antes;

class AntesController extends Controller
{
    use DisableAuthorization;

    protected $model = Antes::class;
}
