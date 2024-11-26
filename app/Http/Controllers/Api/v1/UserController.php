<?php

namespace App\Http\Controllers\Api\v1;

use Orion\Concerns\DisableAuthorization;
use Orion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class UserController extends Controller
{
    use DisableAuthorization;
    protected $model = User::class;
    
    /*
    @return \Illuminate\Contracts\Auth\Authenticatable|null
    */

   public function resolveUser()
   {
       return Auth::guard('sanctum')->user();
   }
}
