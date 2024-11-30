<?php

use App\Http\Controllers\Api\v1\AntesController;
use App\Http\Controllers\Api\v1\DespuesController;
use App\Http\Controllers\Api\v1\DuranteController;
use App\Http\Controllers\Api\v1\RegistroAntesController;
use App\Http\Controllers\Api\v1\RegistroController;
use App\Http\Controllers\Api\v1\RegistroDespuesController;
use App\Http\Controllers\Api\v1\RegistroDuranteController;
use App\Http\Controllers\Api\v1\UserRegistroController;
use App\Models\Centro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Orion\Facades\Orion;
use App\Http\Controllers\Api\v1\UserController;
use App\Http\Controllers\Api\v1\CentroController;

Route::group(['as' => 'api'], function () {
    Orion::resource('centros', CentroController::class);
    Orion::resource('registros', RegistroController::class);
    Orion::resource('users', UserController::class);
    Orion::resource('antes', AntesController::class);
    Orion::resource('durante', DuranteController::class);
    Orion::resource('despues', DespuesController::class);

    Orion::hasManyResource('users', 'registros', UserRegistroController::class);
    Orion::hasManyResource('registros', 'antes', RegistroAntesController::class);
    Orion::hasManyResource('registros', 'durante', RegistroDuranteController::class);
    Orion::hasManyResource('registros', 'despues', RegistroDespuesController::class);
});
