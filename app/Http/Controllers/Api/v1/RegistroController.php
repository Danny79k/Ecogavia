<?php

namespace App\Http\Controllers\Api\v1;

use Orion\Concerns\DisableAuthorization;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Registro;
use App\Models\User;


class RegistroController extends Controller
{
    use DisableAuthorization, DisablePagination;

    protected $model = Registro::class;
    // public function __construct()
    // {
    //     $this->middleware('auth:sanctum');
    // }
    
}
