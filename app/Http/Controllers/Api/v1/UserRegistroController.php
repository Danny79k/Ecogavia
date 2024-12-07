<?php

namespace App\Http\Controllers\Api\v1;

use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\RelationController;
use Illuminate\Http\Request;
use App\Models\User;

class UserRegistroController extends RelationController
{
    // use DisableAuthorization;
    protected $model = User::class;

    protected $relation = 'registros';
}
