<?php
namespace App\Http\Controllers;

use App\Models\Piement;
use App\Models\Reservations;
use App\Models\User;
use App\Models\Voiture;
use Illuminate\Http\Request;

class VoitureController extends Controller
{
    public function index()
    {
        // Retrieve all voitures
        $voitures = Voiture::all();
        return response()->json($voitures);
    }
    public function index1()
    {
        $nbrcar=Voiture::count();
        $nbrUser=User::count();
        $nbrcomm=Reservations::count();
        $sumcomm=Piement::sum('montant');
        return view('Voitures.ListeVoiture' ,compact('nbrcar','nbrUser','nbrcomm','sumcomm'));
    }
    public function index2()
    {

        // Retrieve all voitures
        return view('Voitures.Addvoiture' );
    }
    public function index3()
    {
        $data=Voiture::all();
        // Retrieve all voitures
        return view('Voitures.Addvoiture' ,compact('data'));
    }
    public function index4()
    {
        $data=Voiture::paginate(20);
        // Retrieve all voitures
        return view('Voitures.listcar' ,compact('data'));
    }

    public function store(Request $request)
    {
        // Validate incoming data
        $validated = $request->validate([
            'ImageP' => 'required|string',
            'ImageS1' => 'required|string',
            'ImageS2' => 'required|string',
            'ImageS3' => 'required|string',
            'title' => 'required|string',
            'type' => 'required|string',
            'prix_jour' => 'required|numeric',
            'status' => 'required|in:Disponible,réservée',
            'consomation' => 'required|string',
            'category' => 'required|string',
            'description' => 'required|string',
            'dor' => 'required|integer',
        ]);

        // Create a new voiture
        $voiture = Voiture::create($validated);

        return response()->json($voiture, 201);
    }
    public function store1(Request $request){
        $validated = $request->validate([
            'ImageP' => 'required|string',
            'ImageS1' => 'required|string',
            'ImageS2' => 'required|string',
            'ImageS3' => 'required|string',
            'title' => 'required|string',
            'type' => 'required|string',
            'prix_jour' => 'required|numeric',
            'status' => 'required|in:Disponible,réservée',
            'consomation' => 'required|string',
            'category' => 'required|string',
            'description' => 'required|string',
            'dor' => 'required|integer',
        ]);
        Voiture::create([
            'ImageP' => $validated['ImageP'],
            'ImageS1' => $validated['ImageS1'],
            'ImageS2' => $validated['ImageS2'],
            'ImageS3' => $validated['ImageS3'],
            'title' => $validated['title'],
            'type' => $validated['type'],
            'prix_jour' => $validated['prix_jour'],
            'status' => $validated['status'],
            'consomation' => $validated['consomation'],
            'category' => $validated['category'],
            'description' => $validated['description'],
            'dor' => $validated['dor'],
        ]);
        return redirect('/list')->with('success','Le Vol a été ajouter avec success');

    }

    public function show($id)
    {
        // Find voiture by id
        $voiture = Voiture::findOrFail($id);
        return response()->json($voiture);
    }

    public function update(Request $request, $id)
    {
        // Find voiture by id
        $voiture = Voiture::findOrFail($id);

        // Validate incoming data
        $validated = $request->validate([
            'ImageP' => 'string',
            'ImageS1' => 'string',
            'ImageS2' => 'string',
            'ImageS3' => 'string',
            'title' => 'string',
            'type' => 'string',
            'prix_jour' => 'numeric',
            'status' => 'in:Disponible,réservée',
            'consomation' => 'string',
            'category' => 'string',
            'description' => 'string',
            'dor' => 'integer',
        ]);

        // Update voiture
        $voiture->update($validated);

        return response()->json($voiture);
    }
    public function edit($id){
        $data=Voiture::all();
        $data1=Voiture::find($id);
        return view('Voitures.editVoiture',compact('data','data1'));
    }
    public function update2(Request $request, $id){
        $data1=Voiture::find($id);
        $data1->ImageP = $request->ImageP;
        $data1->ImageS1 = $request->ImageS1;
        $data1->ImageS2 = $request->ImageS2;
        $data1->ImageS3 = $request->ImageS3;
        $data1->title= $request->title;
        $data1->type = $request->type;
        $data1->prix_jour = $request->prix_jour;
        $data1->status = $request->status;
        $data1->consomation= $request->consomation;
        $data1->category= $request->category;
        $data1->description = $request->description;
        $data1->dor = $request->dor;
        $data1->save();
        return redirect('/listcar')->with('success','la modification a ete avec success');
    }
    public function destroy($id)
    {
        // Find voiture by id
        $voiture = Voiture::findOrFail($id);

        // Delete voiture
        $voiture->delete();

        return response()->json(null, 204);
    }
    public function destroy1($id){
        $voiture=Voiture::find($id);
        if($voiture){
            $voiture->delete();
            return redirect('/listcar')->with('success','ce voiture a ete supprimer avec success');
        }
    }
}
