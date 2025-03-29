<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    Use HasFactory;
    protected $fillable=['nom','prenom','email','telephone','Cin','adresse','date_naissance'];
    protected $table = 'clients';
    
    public function reservations()
    {
        return $this->hasMany(Reservations::class, 'id_client');
    }
public function avis()
{
    return $this->hasMany(Avis::class,'id_client');
}

}
