<?php

namespace App\Http\Controllers;

use App\Models\Piement;
use App\Models\User;
use Illuminate\Http\Request;

class PiementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Piement::all());
    }
    public function index1(){
        $users=User::all();
        return view('Admins.ListesAdmins',compact('users'));
    }
    public function index2(){
        $piement=Piement::all();
        return view('Piements.piements',compact('piement'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        //'id_reservations','montant','date_piement','mode_piement'
        $request->validate([
            'id_reservations'=>'required',
            'montant'=>'required',
            'date_piement'=>'required',
            'mode_piement'=>'required'
        ]);
        $post=Piement::create($request->all());
        return response()->json($post,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Piement $piement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Piement $piement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Piement $piement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Piement $piement)
    {
        //
    }
}
