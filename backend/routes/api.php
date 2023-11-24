<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('signUp', 'App\Http\Controllers\API\AuthController@register')->name('signUp');
Route::post('signIn', 'App\Http\Controllers\API\AuthController@login')->name('signIn');
Route::get('users', function (Request $request) {
    $users = User::all();
    $res = [
        'users' => $users,
        'inputs' => $request->all()
    ];
    return response()->json($res, 200);
})->name('users');
