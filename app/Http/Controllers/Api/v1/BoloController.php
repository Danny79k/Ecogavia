<?php

namespace App\Http\Controllers\Api\v1;

use Orion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bolo;
use Orion\Concerns\DisableAuthorization;
use Orion\Concerns\DisablePagination;

class BoloController extends Controller
{
    use DisableAuthorization, DisablePagination;
    protected $model = Bolo::class;
}
