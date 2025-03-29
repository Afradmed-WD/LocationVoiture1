<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Avis extends Model
{
 use HasFactory;
 protected $fillable=['id_client','id_voiture','note','commentaire','date_avis'];
 protected $table='avis';

 public function client()
{
    return $this->belongsTo(Client::class,'id_client');
}
public function voiture()
{
    return $this->belongsTo(Voiture::class,'id_voiture');
}


}
