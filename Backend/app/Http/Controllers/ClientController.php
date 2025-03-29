<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return response()->json(Client::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function index1(){
        $data1=Client::all();
        return view('Clients.ListeClient',compact('data1'));
    }
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //'nom','prenom','email','telephone','Cin','adresse','date_naissance'
       $request->validate([
        'nom'=>'required',
        'prenom'=>'required',
        'email'=>'required',
        'telephone'=>'required',
        'Cin'=>'required',
        'adresse'=>'required',
        'date_naissance'=>'required'
        
       ]);
       $post=Client::create($request->all());
       return response()->json($post,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
       return response()->json($client);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
