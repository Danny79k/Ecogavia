<?php

namespace App\Http\Controllers\Api\v1;

use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    use DisableAuthorization;
    protected $model = User::class; 
}
