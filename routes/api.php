<?php

use App\Models\Centro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Orion\Facades\Orion;
use App\Http\Controllers\Api\v1\UserController;
use App\Http\Controllers\Api\v1\CentroController;

Route::group(['as' => 'api'], function(){
    Orion::resource('users', UserController::class)->middleware(['auth:sanctum']);
    Orion::resource('centros', CentroController::class);
});
