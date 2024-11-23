<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Orion\Facades\Orion;
use App\Http\Controllers\Api\v1\UserController;

Route::group(['as' => 'api'], function(){
    Orion::resource('users', UserController::class);
});
