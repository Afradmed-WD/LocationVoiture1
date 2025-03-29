<?php

namespace App\Http\Controllers;

use App\Models\Reservations;
use App\Models\User;
use Illuminate\Http\Request;

class ReservationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    { 
        return response()->json(Reservations::all());
    }
    public function index1(){
        $reserv=Reservations::all();
        return view('Reservation.ListeReservations',compact('reserv'));
    }
    public function index2(){
        $nbrUser=User::count();
        return view('Voitures.ListeVoiture',compact('nbrUser'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       $nbrUser=User::count();
       return view('Voitures.ListeVoiture',compact('nbrUser'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //'id_client','id_voiture','date_debut','date_fin','status'
        $request->validate([
            'id_client'=>'required',
            'id_voiture'=>'required',
            'date_debut'=>'required',
            'date_fin'=>'required',
            'status'=>'required'
        ]);
        $post=Reservations::create($request->all());
        return response()->json($post,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Reservations $reservations)
    {
       return response()->json($reservations);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reservations $reservations)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reservations $reservations)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reservations $reservations)
    {
        //
    }
}
