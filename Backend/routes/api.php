<?php

use App\Http\Controllers\AvisController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\PiementController;
use App\Http\Controllers\ReservationsController;
use App\Http\Controllers\VoitureController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\InfoController;
use Illuminate\Support\Facades\Route;
Route::apiResource('/voitures', VoitureController::class,);
Route::apiResource('client', ClientController::class);
Route::apiResource('reservations', ReservationsController::class);
Route::apiResource('paiments', PiementController::class);
Route::apiResource('avis', AvisController::class);
Route::apiResource('infos', InfoController::class);


Route::post('/formulaire', [FormController::class, 'store']);

