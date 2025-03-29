<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FormData; // Assurez-vous d'avoir un modèle correspondant

class FormController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
        ]);

        FormData::create([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return response()->json(['message' => 'Données enregistrées !'], 201);
    }
}

