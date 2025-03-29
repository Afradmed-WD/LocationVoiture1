<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voiture extends Model
{
    use HasFactory;
    protected $fillable=['ImageP','ImageS1','ImageS2','ImageS3','title','type','prix_jour','status','consomation','category','description','dor'];
    protected $table='voitures';
    public function reservations()
{
    return $this->hasMany(Reservations::class,'id_voiture');
}
public function avis()
{
    return $this->hasMany(Avis::class,'id_voiture');
}

}
