<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservations extends Model
{
   use HasFactory;
   protected $fillable=['id_client','id_voiture','date_debut','date_fin','status'];
   protected $table = 'reservations';
    
   public function client()
   {
       return $this->belongsTo(Client::class, 'id_client');
   }
public function voiture()
{
    return $this->belongsTo(Voiture::class,'id_voiture');
}
public function paiements()
{
    return $this->hasMany(Piement::class,'id_reservation');
}


}
