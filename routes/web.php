<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('Subway');
});
Route::get('/subway', function () {
    return view('Subway');
});
Route::get('/testaftersub', function () {
    return view('jstest');
});
Route::get('/simplecal', function () {
    return view('simplecal');
});
Route::get('/blackjack', function () {
    return view('blackjack');
});
Route::get('/rps', function () {
    return view('rps');
});
Route::get('/chrome', function () {
    return view('chrome');
});
