<?php

use App\Http\Controllers\AvisController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\PiementController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationsController;
use App\Http\Controllers\VoitureController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('auth.register');
});

Route::get('/diagram', function () {
    $data = [12, 19, 10, 15, 2, 3]; // Exemple de données dynamiques
    return view('Voitures.diagrame', compact('data'));
});

Route::get('/list',[VoitureController::class,'index1'])->middleware(['auth', 'verified'])->name('list');
Route::get('/afrad',[VoitureController::class,'index1']);
Route::get('/addvoiture',[VoitureController::class,'index3'])->middleware(['auth', 'verified'])->name('ad');
Route::post('/addvoiture',[VoitureController::class,'store1'])->middleware(['auth', 'verified'])->name('add');
Route::get('/editvoiture/{id}',[VoitureController::class,'edit'])->middleware(['auth', 'verified'])->name('edit');
Route::put('/editvoiture/{id}',[VoitureController::class,'update2'])->middleware(['auth', 'verified'])->name('update');
Route::get('/listcar',[VoitureController::class,'index4'])->middleware(['auth', 'verified'])->name('listcar');
Route::delete('/deletecar/{id}',[VoitureController::class,'destroy1'])->middleware(['auth', 'verified'])->name('destroy1');


Route::get('/admins',[PiementController::class,'index1']);
Route::put('/editadmin/{id}',[ProfileController::class,'index'])->name('edit_admin');
Route::delete('/deletetadmin/{id}',[ProfileController::class,'destroy1'])->name('destroy_admin');


Route::get('/clients',[ClientController::class,'index1']);

Route::get('/reservations',[ReservationsController::class,'index1']);

Route::get('/piements',[PiementController::class,'index2']);

Route::get('/avis',[AvisController::class,'index1']);
Route::delete('/avis/delete/{id}',[AvisController::class,'destroy'])->name('destroy');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
