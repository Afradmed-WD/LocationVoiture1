<?php

namespace App\Http\Controllers;

use App\Models\Avis;
use Illuminate\Http\Request;

class AvisController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Avis::all());
    }
    public function index1()
    {
        $avis=Avis::all();
       return view('Avis.Avis',compact('avis'));
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
        $request->validate([

            'id_client' => 'required',
            'id_voiture' => 'required',
            'note' => 'required',
            'commentaire' => 'required',
            'date_avis' => 'required',
            
            ]);
            $post = Avis::create($request->all());
            return response()->json($post, 201);
    
    }

    /**
     * Display the specified resource.
     */
    public function show(Avis $avis)
    {
        return response()->json($avis);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Avis $avis)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Avis $avis)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
       $avis=Avis::find($id);
       if($avis){
        $avis->delete();
        return redirect('/avis')->with('success','ce commentaire a ete suprimer avec sucsess');
       }
    }
}
