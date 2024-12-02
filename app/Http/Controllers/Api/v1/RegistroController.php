<?php

namespace App\Http\Controllers\Api\v1;

use Orion\Concerns\DisableAuthorization;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Registro;
use App\Models\User;
use App\Policies\RegistroPolicy;


class RegistroController extends Controller
{
    use DisablePagination;

    protected $model = Registro::class;

    protected $policy = RegistroPolicy::class;
    // public function __construct()
    // {
    //     $this->middleware('auth:sanctum');
    // }
    
}
