<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Piement extends Model
{
    use HasFactory;
    protected $fillable=['id_reservations','montant','date_piement','mode_piement'];
    protected $table='piements';
    public function reservation()
{
    return $this->belongsTo(Reservations::class,'id_reservation');
}

}
